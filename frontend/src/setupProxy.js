const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://44.207.63.226:8080', // 서버 URL 또는 localhost:설정한포트번호
      changeOrigin: true,
    })
  );
};
