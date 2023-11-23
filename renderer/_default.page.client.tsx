import { hydrateRoot }from "preact/compat/client";
import React from "preact/compat";
import { DefaultLayout } from "../layouts/default"
import '@/index.css'

export { render };

async function render(pageContext) {
    const { Page, pageProps } = pageContext
    hydrateRoot(
        document.getElementById("page-view"),
        <DefaultLayout><Page {...pageProps} /></DefaultLayout>
    );
}