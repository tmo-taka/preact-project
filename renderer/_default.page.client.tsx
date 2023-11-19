import ReactDOM from "preact/compat";
import React from "preact/compat";

export { render };

async function render(pageContext) {
    const { Page, pageProps } = pageContext
    ReactDOM.hydrateRoot(
        document.getElementById("page-view"),
        <Page {...pageProps} />
    );
}