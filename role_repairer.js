module.exports = {
    run: function (creep) {
        //console.log('                    role_repairer.js');

        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);

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

                creep.say("rNoJobs");
                require('role_builder').run(creep);
            }
        }
    }
};
