module.exports = {
    run: function(){
        var spaces = "    ";
        console.log(spaces + "02_spawn_controller.js");
        for (let spawn in Game.spawns) {
            var curr_spawn = Game.spawns[spawn];
            console.log(spaces + spaces + curr_spawn);
            if (curr_spawn != undefined) {
                var curr_room_level = curr_spawn.room.controller.level;
                var creep_list = curr_spawn.room.find(FIND_MY_CREEPS);


                // Room Memory
                require('2.1.roomMemory').run(curr_spawn.room, creep_list);

                // CREEP SPAWNER
                require('3.0.creepSpawner').run(curr_spawn, creep_list, curr_room_level);

                // CONSTRUCTION
                require('4.0.autoConstructionSite').run(curr_spawn.room);

                // DEFENCE
                require('5.0.roomDefense').run(curr_spawn.room);



        }


    }
    }
};
