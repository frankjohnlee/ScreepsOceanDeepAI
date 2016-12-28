module.exports = {
    run: function (creep) {
        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);
        if (creep.memory.working == true) { // If creep is currently set to working
            var spawn_array = creep.room.find(FIND_MY_SPAWNS);
            var spawn = creep.pos.findClosestByPath(spawn_array);
            require("role_harvester").run(creep);

            //if (spawn.energy == spawn.energyCapacity) {
            //    require("role_energizer").run(creep);
            //}
            //else {
            //    creep.say("tWorking");
            //    require('function_move_in_range_transfer').run(creep, spawn);
            //}
            //
            //}

        }
    }
};
