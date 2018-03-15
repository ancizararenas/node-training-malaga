function registerRoutes(router) {
  console.log('registering routes');

  router.get('/', function (req, res) {
    res.send('Hello World!');
  });

  router.get('/blog', function (req, res) {
    res.send('Hello blog');
  });

  router.get('/api', function (req, res) {
    res.send({name : 'ancizar', age : 15});
  });
}

module.exports = {
  register : registerRoutes
};
