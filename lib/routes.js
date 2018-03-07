const express = require('express');
const app = express();

const registerRoutes = (router) => {
    
    console.log('Registering routes...');
    
    router.get('/', (request, response) => {
        response.send('Hello world!');
    });

    router.get('/blog', (request, response) => {
        response.send('Hello blog');
    });

    router.get('/api', (request, response) => {
        response.send({ name: 'Ancizar', age: 15 });
    });    
};

module.exports = {
  register: registerRoutes  
};
