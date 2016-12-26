module.exports = {
    run: function (creep) {

        // Energizers prioritize giving energy to towers first and then gives powers to extensions

        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);


        if (creep.memory.working == true) { // If creep is currently set to working

            var storage = creep.room.storage;
        creep.say("sLen:" + storages);

        if (storages != undefined || storages.energy == storages.energyCapacity) {
            require('role_builder').run(creep);
        }
        else
            require('function_move_in_range_transfer').run(creep, storages);
    }
        }
    };