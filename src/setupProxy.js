const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/resource',
    createProxyMiddleware({
      target: 'https://clist.by:443/api/v1',      
      changeOrigin: true,
    })
  );

  app.use(
    '/contest',
    createProxyMiddleware({
      target: 'https://clist.by:443/api/v1',      
      changeOrigin: true,
    })
  );

   app.use(
    '/users',
    createProxyMiddleware({
      target: 'https://jsonplaceholder.typicode.com',      
      changeOrigin: true,
    })
  );
};