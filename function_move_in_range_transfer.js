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
        if (target == creep){
            creep.say("give energy");
        }
        else{
            creep.say("transfer energy")
        }

        if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) { // try to harvest from source
            creep.moveTo(target); // if it's not in range then move to range
        }
    }
};

