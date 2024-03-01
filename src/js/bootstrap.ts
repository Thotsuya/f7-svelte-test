import Echo from '@ably/laravel-echo';
import * as Ably from 'ably';
import {Types} from 'ably';
import ChannelStateChange = Types.ChannelStateChange;

declare global {
    interface Window {
        Ably: typeof Ably;
        Echo: Echo;
    }
}

window.Ably = Ably;
window.Echo = new Echo({
    broadcaster: 'ably',
    useTls: true,
    requestTokenFn: async (channelName: string, existingToken: string) => {
        let postData = { channel_name: channelName, token: existingToken, device_id: 'postman' };

        //TODO: replace with your own API endpoint
        const response = await fetch('https://langsys-nova.test/api/broadcasting/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-device-id': 'postman'
            },
            body: JSON.stringify(postData)
        });

        return await response.json();
    },
});

window.Echo.connector.ably.connection.on((stateChange: ChannelStateChange) => {
    if (stateChange.current === 'connected') {
        console.log('connected to ably server');
    }
});

