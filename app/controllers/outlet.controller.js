var Outlet = require('mongoose').model('Outlet');

exports.createNew = function(req, res, next) {
    var outlet = new Outlet(req.body);

    outlet.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(outlet);
        }
    });
}

exports.delete = function(req, res, next) {

}
