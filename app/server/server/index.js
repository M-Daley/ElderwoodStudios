// Server Dependencies
const express = require("express"),
    path = require("path");
const app = express();

module.exports = function() {
    let server = express();

    function create(config) {
        let routes = require('./routes');

        // Server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // Middleware
        server.use(express.json());
        server.use(express.static(path.join(__dirname, '../../build')));

        // Set up routes
        routes.init(server);
    }

    function start() {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, () => {
            console.log(`Express server listening on - http://${hostname}:${port}`);
        });
    };

    return { create, start }
}