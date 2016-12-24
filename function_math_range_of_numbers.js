/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (lowEnd, highEnd) {
        var list = [];
        for (var i = lowEnd; i <= highEnd; i++) {
            list.push(i);
        }
        return list;

    }
};

