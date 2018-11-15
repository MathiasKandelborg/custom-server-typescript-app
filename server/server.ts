import * as next from 'next';
import * as express from 'express';

import routes from "./routes";

const port = process.env.PORT || 3333;
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  conf: {
   //  distDir: 'dist',
    pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
    poweredByHeader: false,
    useFileSystemPublicRoutes: false,
    webpack: config => {

      return config;
    },
  },
  dev,
});

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
});
