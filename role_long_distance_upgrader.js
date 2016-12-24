module.exports = {
    run: function (creep) {
        //console.log('                    role_long_distance_upgrader.js');
        //console.log("here");
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }



        if (creep.room.name == creep.memory.target_room) {
            if (creep.memory.working == false) { // If Creep's status is set to getting_energy
                creep.say("LDU-GetEnergy");

                // find closest source, if source energy is mined out go to the next source in array
                var source = require('function_find_closest_source').run(creep);

                if (creep.harvest(source) == ERR_NOT_IN_RANGE) { // try to harvest from source
                    creep.moveTo(source); // if it's not in range then move to range
                    creep.say("LDU-GoSource");
                }
            }
            else { // creep.memory.working == true
                creep.say("LDU-GoHome");
                var exit = creep.room.findExitTo(creep.memory.home_room);
                creep.moveTo(creep.pos.findClosestByPath(exit));
            }
        }
        else if (creep.room.name == creep.memory.home_room) {
            creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);

            if (creep.memory.working == true &&
                creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.say("LDU-Working");
                creep.moveTo(creep.room.controller)
            }
            else if (creep.memory.working == false) {
                creep.say("LDU-MoveTO");
                var exit = creep.room.findExitTo(creep.memory.target_room);
                creep.moveTo(creep.pos.findClosestByPath(exit));

            }
        }
    }
};