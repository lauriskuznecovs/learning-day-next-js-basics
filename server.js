const express = require('express')
const next = require('next')
const Router = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = app.getRequestHandler() // Default
const handle = Router.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.get('/', (req, res) => res.redirect('/en'))
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  })
})