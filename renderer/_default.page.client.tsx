import { hydrateRoot }from "preact/compat/client";
import React from "preact/compat";
import { DefaultLayout } from "../layouts/default"
import { AuthModal } from '@/components/AuthModal'
import '@/index.css'

export { render };

async function render(pageContext) {
    console.log(document.cookie);
    console.log(pageContext)
    const { Page, pageProps } = pageContext
    hydrateRoot(
        document.getElementById("page-view"),
        <DefaultLayout>
            <Page {...pageProps} />
            <AuthModal />
        </DefaultLayout>
    );
}