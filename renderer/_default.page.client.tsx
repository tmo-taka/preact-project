import { hydrateRoot }from "preact/compat/client";
import React from "preact/compat";
import '@/index.css'

export { render };

async function render(pageContext) {
    const { Page, pageProps } = pageContext
    hydrateRoot(
        document.getElementById("page-view"),
        <Page {...pageProps} />
    );
}