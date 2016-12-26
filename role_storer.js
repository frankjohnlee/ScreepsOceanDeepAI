module.exports = {
    run: function (creep) {

        // Energizers prioritize giving energy to towers first and then gives powers to extensions

        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);
        var storage = creep.room.storage;

        if (creep.memory.working == true) { // If creep is currently set to working

            if (storage == undefined) {
                require('role_builder').run(creep);
            }
            else if (storage.energy != 1000000000) {
                require('function_move_in_range_transfer').run(creep, storage);
            }

        }
    }
};