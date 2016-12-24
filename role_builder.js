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

        var debug_module = false;
        require('function_working_status').run(creep);

        if (creep.memory.working == false) { // If Creep's status is set to getting_energy
            creep.say("bGetEnergy");
            require('function_mine_energy').run(creep);
        }

        if (creep.memory.working == true) { // If creep is currently set to working
            creep.say("bWorking");
            require('function_build').run(creep);

        }
        if (debug_module == true){
            console.log("______________________________________________________________________________");
            console.log("Debuging: role_builder.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("Creep: " + creep);
            console.log("Working: " + creep.memory.working);
            console.log("______________________________________________________________________________");
        }
    }
};
