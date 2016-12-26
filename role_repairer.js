module.exports = {
    run: function (creep) {
        //console.log('                    role_repairer.js');

        require('function_working_status').run(creep);

        if (creep.memory.working == false) { // If Creep's status is set to getting_energy
            creep.say("rGetEnergy");

            // find closest source, if source energy is mined out go to the next source in array
            var source = require('function_find_closest_source').run(creep);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) { // try to harvest from source
                creep.moveTo(source); // if it's not in range then move to range
                creep.say("rGoSource");
            }
        }

        if (creep.memory.working == true) { // If creep is currently set to working
            var repairSite = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax &&
            (object.structureType != STRUCTURE_WALL &&
            object.structureType != STRUCTURE_RAMPART)
            });
            var closest_repair = creep.pos.findClosestByPath(repairSite);
            creep.say("rWorking");
            if (closest_repair != undefined) {
                if (creep.repair(closest_repair) == ERR_NOT_IN_RANGE) { // try to transfer
                    creep.say("rGoRepair");
                    creep.moveTo(closest_repair);
                }
            }
            else {
                if (creep.room.name == creep.home_room){
                    require('function_go_to_target_room').run(creep);
                }
                else if (creep.room.name == creep.target_room){
                    require('function_go_to_home_room').run(creep);
                }
                //creep.say("rNoJobs");
                //require('role_builder').run(creep);
            }
        }
    }
};
