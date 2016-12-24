/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {


        if (creep.room.name == creep.memory.target_room) {
            var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            //var target_structures = creep.room.find(FIND_HOSTILE_STRUCTURES);
            if (target != undefined) { // If there are enemy creep
                if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                    creep.moveTo(target); // if it's not in range then move to range
                    creep.say("AttackCP");
                }
            }
        }
        else if (creep.room.name == creep.memory.home_room) {
            creep.say("ATgoTarget");
            var exit = creep.room.findExitTo(creep.memory.target_room);
            console.log(exit);
            creep.moveTo(exit);
        }
    }
};