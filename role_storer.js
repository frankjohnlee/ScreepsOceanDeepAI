module.exports = {
    run: function (creep) {

        // Energizers prioritize giving energy to towers first and then gives powers to extensions

        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);


        if (creep.memory.working == true) { // If creep is currently set to working

            var storages = creep.room.find(FIND_MY_STRUCTURES, {
            filter: object =>
            object.structureType == STRUCTURE_STORAGE
        });

        creep.say("sLen:" + storages);

        if (storages.length == 0 || storages[0].energy == storages[0].energyCapacity) {
            require('role_builder').run(creep);
        }
        else
            require('function_move_in_range_transfer').run(creep, storages);
    }
        }
    };