const server = require('./server')(),
    config = require('./config');

console.log(config);

server.create(config);
server.start();