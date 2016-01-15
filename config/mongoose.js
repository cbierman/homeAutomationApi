var mongoose = require('mongoose'),
    config = require('./config');

module.exports = function() {
    var db = mongose.connect(config.db);
    return db;
}
