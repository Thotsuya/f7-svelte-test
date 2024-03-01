<Page name="home">
    <!-- Top Navbar -->
    <Navbar
            bgColor="blue"
            large
            sliding={false}>
        <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"/>
        </NavLeft>
        <NavTitle sliding>Test App</NavTitle>
        <NavTitleLarge>
            A Simple Test App
        </NavTitleLarge>
    </Navbar>
    <!-- Page content -->
    <BlockTitle>Query Chuck Norris Jokes</BlockTitle>
    <List form strongIos dividersIos insetIos>
        <ListInput
                type="text"
                name="search"
                placeholder="Enter your search"
                bind:value={search}
                on:input={filterQuotes}
        >
            <Icon slot="media" f7="search"></Icon>
        </ListInput>

    </List>

    <List strong inset dividersIos>
        <ListItem
                title="Fetch Jokes"
                link="/quotes/"
        />
    </List>

    <Block>
        <div class="grid grid-cols-1 medium-grid-cols-4 grid-gap">

            {#if search && filteredQuotes.length === 0}
                <p>No results found</p>
            {:else if filteredQuotes.length > 0}
                {#each filteredQuotes as quote, i}
                    <Card raised class="demo-card-header-pic">
                        <CardHeader
                                valign="bottom"
                                style="background-image: url('/chuck.jpg')"
                        >
                            Chuck Norris Quote {i + 1}
                        </CardHeader>
                        <CardContent>
                            <p>
                                {quote.value}
                            </p>
                        </CardContent>
                    </Card>
                {/each}
            {:else}
                {#each quotes as quote, i}
                    <Card raised class="demo-card-header-pic">
                        <CardHeader
                                valign="bottom"
                                style="background-image: url('/chuck.jpg')"
                        >
                            Chuck Norris Quote {i + 1}
                        </CardHeader>
                        <CardContent>
                            <p>
                                {quote.value}
                            </p>
                        </CardContent>
                    </Card>
                {/each}
            {/if}


        </div>
    </Block>
</Page>
<script lang="ts">
    import {
        Page,
        Navbar,
        NavLeft,
        NavTitle,
        NavTitleLarge,
        NavRight,
        Link,
        Toolbar,
        Block,
        BlockTitle,
        List,
        ListItem,
        Button,
        View,
        Segmented, ListInput, Icon, Card, CardHeader, CardContent, CardFooter,
        useStore
    } from 'framework7-svelte';
    import {Quote, RootState} from "../js/store";

    let quotes: Quote[] = useStore('quotes', (value: Quote[]) => quotes = value);
    let filteredQuotes: Quote[] =  []
    let search: string = '';

    const filterQuotes = () => {
        if (search === '') {
            return quotes;
        }
        return filteredQuotes = quotes.filter((quote: Quote) => {
            return quote.value.toLowerCase().includes(search.toLowerCase());
        });
    }

    //TODO: Replace with your own user id
    window
        .Echo
        .private('App.Models.User.1d67ac74-66d2-4a64-87c2-a462d8f60071')
        .notification((notification: any) => {
            console.log(notification);
        })
        .error((error: any) => {
            console.error('Error:', error);
        });

</script>