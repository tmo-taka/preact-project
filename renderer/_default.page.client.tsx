import { hydrateRoot }from "preact/compat/client";
import React from "preact/compat";
import { DefaultLayout } from "../layouts/default"
import { AuthModal } from '@/components/AuthModal'
import '@/index.css'

export { render };

async function render(pageContext) {
    const { Page, pageProps } = pageContext
    let modalFlag = true;
    if(document.cookie.includes('english=allow')) { modalFlag = false }

    hydrateRoot(
        document.getElementById("page-view"),
        <DefaultLayout>
            <Page {...pageProps} />
            {modalFlag}
            <AuthModal modalFlag={modalFlag} />
        </DefaultLayout>
    );
}