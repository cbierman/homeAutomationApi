var config = require('./config'),
    express = require('express');


module.exports = function() {
    var app = express();

    require('../app/routes/outlets.routes.js')(app);

    return app;
}