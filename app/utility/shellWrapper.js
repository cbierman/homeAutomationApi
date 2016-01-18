var exec = require('child_process').exec;

module.exports.sendFrequency = function(frequency, iterations = 20) {
    iterations = typeof iterations !== 'undefined' ? iterations : 20;
}