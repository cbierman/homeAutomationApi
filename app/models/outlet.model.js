var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var outletSchema = new Schema({
    frequency: "Number",
    label: "String",
    state: "Number"
});


mongoose.model('Outlet', outletSchema);