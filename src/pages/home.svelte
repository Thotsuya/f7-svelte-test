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
    <!-- Toolbar -->
    <Toolbar bottom>
        <Link>Left Link</Link>
        <Link>Right Link</Link>
    </Toolbar>
    <!-- Page content -->
    <BlockTitle>Query Chuck Norris Jokes</BlockTitle>
    <List form strongIos dividersIos insetIos>
        <ListInput
                type="text"
                name="search"
                placeholder="Enter your search"
                bind:value={search}
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
            {#each quotes as quote, i}
                <Card raised class="demo-card-header-pic">
                    <CardHeader
                            valign="bottom"
                            style="background-image: url(https://picsum.photos/400/300)"
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

    let quotes: any = useStore('quotes', (value: Quote[]) => quotes = value);
    let search: string = '';

</script>