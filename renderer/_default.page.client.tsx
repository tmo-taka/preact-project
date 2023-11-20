import { hydrateRoot }from "preact/compat/client";
import React from "preact/compat";

export { render };

async function render(pageContext) {
    const { Page, pageProps } = pageContext
    hydrateRoot(
        document.getElementById("page-view"),
        <Page {...pageProps} />
    );
}