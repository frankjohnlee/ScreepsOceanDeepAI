/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep, target) {
        if (creep.transfer(creep.room.controller, target) == ERR_NOT_IN_RANGE) { // try to transfer
            creep.say("uGoEnergy");
            creep.moveTo(target);
        }
    }
};