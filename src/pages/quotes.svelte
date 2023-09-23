<Page>
    <Navbar title="Quotes" backLink="Back" />
    <Block strong inset>
        <ul>
            <li><b>Quote:</b> {quote.value}</li>
        </ul>
    </Block>
    <Block strong inset>
        <Link onClick={() => saveAndGoBack()} iconF7="checkmark_alt" large>Save</Link>
    </Block>
</Page>
<script>
    import { Page, Navbar, Block, Link } from 'framework7-svelte';
    import store from "@/js/store";

    export let f7route;
    export let f7router;

    export let quote;

    export const saveAndGoBack = () => {

        let storageQuotes = JSON.parse(localStorage.getItem('quotes'));

        if (storageQuotes) {
            storageQuotes.push(quote);
            localStorage.setItem('quotes', JSON.stringify(storageQuotes));
        } else {
            localStorage.setItem('quotes', JSON.stringify([quote]));
        }

        store.dispatch('addQuote', quote)
        f7router.back();
    };
</script>
