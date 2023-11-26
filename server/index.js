// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.github.io/) to scaffold a Vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)

import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { auth } from './api/auth.js'

startServer()

async function startServer() {
    const app = express()
    // app.use(compression())
    auth(app);
    await assets(app);
    vike(app);
    const port = 3000
    app.listen(port)
    console.log(`Server running at http://localhost:${port}`)

    async function assets(app) {
        const vite = await import('vite')
        const viteDevMiddleware = (
            await vite.createServer({
                server: { middlewareMode: true }
            })
        ).middlewares
        app.use(viteDevMiddleware)
    }

    function vike(app) {
        app.get('*', async (req, res, next) => {
            const pageContextInit = {
                urlOriginal: req.originalUrl
            }
            const pageContext = await renderPage(pageContextInit)
            const { httpResponse } = pageContext
            if (!httpResponse) {
                return next()
            } else {
                const { body, statusCode, headers, earlyHints } = httpResponse
                if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
                headers.forEach(([name, value]) => res.setHeader(name, value))
                res.status(statusCode)
                // For HTTP streams use httpResponse.pipe() instead, see https://vike.dev/stream
                res.send(body)
            }
        })
    }
}