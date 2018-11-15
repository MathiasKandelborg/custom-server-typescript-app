const nextRoutes = require('next-routes');
const routes = nextRoutes()
    .add('index', '/')
    .add('a', '/a', 'a')
    .add('b', '/b', 'a');

export const Link = routes.Link;
export default routes;