module.exports = {
    run: function (creep, structre_rec = false) {

        // Energizers prioritize giving energy to towers first and then gives powers to extensions

        require('function_working_status').run(creep);

        require('function_working_status').run(creep);
        creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);

        if (creep.memory.working == true) { // If creep is currently set to working
            if (structre_rec == false) {
                var storages = creep.room.find(FIND_MY_STRUCTURES, {
                    filters: object =>
                    object.energy < object.energyCapacity &&
                    object.structureType == STRUCTURE_STORAGE
                });

                creep.say("sLen:" + storages);

                if (structure.length == 0) {
                    require('role_builder').run(creep);
                }
                else if (structure[0].energy == structure[0].energyCapacity) {
                    structure.shift();
                    if (structure.length == 0) {
                        require('role_builder').run(creep);
                    }
                    else {
                        require('role_storer').run(creep, storages);
                    }
                } // delete the first of list if afterwards len is 0 then run builder
                else {
                    require('function_move_in_range_transfer').run(creep, storages[0]);
                }
            }
        }
    }
};