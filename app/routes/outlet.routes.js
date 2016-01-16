var outlet = require('../controllers/outlet.controller')

module.exports = function(app) {
    app.post('/outlet/create', outlet.createNew);
}