import {createStore} from 'framework7/lite';

export type Quote = {
    icon_url: string;
    value: string;
    id: string;
    url: string;
}

let initialQuoteState = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')!) : [];

const store = createStore({
    state: {
        quotes: initialQuoteState as Quote[],
    },
    getters: {
        quotes({state}) : Quote[] {
            return state.quotes;
        }
    },
    actions: {
        addQuote({state}, quote : Quote) {
            state.quotes = [...state.quotes, quote];
        },
    },
})

export type Store = typeof store;
export type RootState = ReturnType<typeof store.state>;
export type StoreGetters = ReturnType<typeof store.getters>;
export type StoreActions = typeof store.actions;

export default store;
