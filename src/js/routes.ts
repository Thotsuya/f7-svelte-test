
import HomePage from '../pages/home.svelte';
import AboutPage from '../pages/about.svelte';
import FormPage from '../pages/form.svelte';


import DynamicRoutePage from '../pages/dynamic-route.svelte';
import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';
import Quotes from "../pages/quotes.svelte";

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/quotes/',
    async: async function ({ router, to, resolve }) {
        let app = router.app;
        app.preloader.show();

        let response = await fetch("https://api.chucknorris.io/jokes/random");

        let data = await response.json();

        app.preloader.hide();

        resolve(
            {
                component: Quotes,
            },
            {
                props: {
                    quote: data
                }
            }
        )
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
