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
        //console.log('                    role_upgrader.js');


        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);
        if (creep.memory.working == true) { // If creep is currently set to working
            creep.say("uWorking");
            if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) { // try to transfer
                creep.say("uGoEnergy");
                creep.moveTo(creep.room.controller);
            }
        }
    }
};