const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()


routes.add('index', '/');

routes.add('a', '/a', 'a');

routes.add('b', '/b', 'a');
