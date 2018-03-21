function registerRoutes (router) {
    console.log('registering routes');

    router.get('/', function(req, res) {
        res.send('Hello World');
    });
    
    router.get('/blog', function(req, res) {
        res.send('Hello Blog');    
    });
    
    router.get('/api', function(req, res) {
        var person = {
            name : 'Jacobo',
            age : 15
        }
        res.send(person);
    });
}

module.exports = {register : registerRoutes};
