var outlet = require('../controllers/outlet.controller')

module.exports = function(app) {
    app.route('/outlets').post(outlet.createNew).get(outlet.list);
    app.route('/outlets/:outletId').post(outlet.update).get(outlet.read);
    app.param('outletId', outlet.findOne);
}