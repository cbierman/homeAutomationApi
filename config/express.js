var config = require('./config')
    bodyParser = require('body-parser'),
    express = require('express');


module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    require('../app/routes/outlet.routes')(app);

    return app;
}