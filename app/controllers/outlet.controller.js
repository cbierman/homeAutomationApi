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

exports.read = function(req, res) {
    res.json(req.outlet);
}

exports.update = function(req, res, next) {
    return;
}

exports.findOne = function(req, res, next, id) {
    Outlet.findOne(
        {_id: id},
        function(err, outlet) {
            if (err) {
                return next(err);
            }
            else {
                req.outlet = outlet;
                next();
            }
        }
    )
}

exports.list = function(req, res, next) {
    Outlet.find({}, function(err, outlets) {
        if (err) {
            next(err);
        }
        else {
            res.json(outlets);
        }
    });
}

exports.delete = function(req, res, next) {

}
