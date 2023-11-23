// import ReactDOMServer from "preact-render-to-string";
import { renderToString } from "preact-render-to-string";
import React from "preact/compat";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { DefaultLayout } from "../layouts/default";

export { render, passToClient };

const passToClient = [
    'pageProps',
]

async function render(pageContext) {
    const { Page, pageProps } = pageContext;
    const viewHtml = renderToString(
        <DefaultLayout><Page {...pageProps} /></DefaultLayout>
    );

    const title = "Vite SSR";

    return escapeInject`<!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
            </body>
        </html>`;
}