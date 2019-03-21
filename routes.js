const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes.add('index', '/:langcode(en|fi)')
routes.add('node', '/:langcode(en|fi)/:node+')

module.exports = routes