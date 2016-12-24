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
        var first_letter_role = creep.memory.role.slice(0,1);
        creep.say(first_letter_role + "GetE");
        if (target != null && target != undefined) {
            if (creep.harvest(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                creep.moveTo(target); // if it's not in range then move to range
            }
        }
    }
};

