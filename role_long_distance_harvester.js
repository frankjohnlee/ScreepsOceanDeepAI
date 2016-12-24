module.exports = {
    run: function (creep) {
        //console.log("debug: LDH");
        //console.log(creep.memory.target_room);
        //console.log(creep.memory.home_room);

        require('function_working_status').run(creep);
        creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);

        var home_room = creep.memory.home_room;
        var target_room = 'W77N72';
        var creep_current_room = creep.room.name;
        var in_target_room = creep_current_room == target_room;
        var in_home_room = creep_current_room == home_room;


        if (in_target_room && creep.memory.working == false) {
            creep.say("LDHGetEnergy");
            var source = require('function_find_closest_source').run(creep);
                require('function_move_in_range_harvest').run(creep, source);
            }
        else if (in_target_room && creep.memory.working == true){
            require('function_go_to_room').run(creep, creep.memory.target_room);
            }
        else if (in_home_room && creep.memory.working == true) {
            require("role_harvester").run(creep);
            }
        else if (in_home_room && creep.memory.working == false) {
            require('function_go_to_room').run(creep, creep.memory.target_room);
            }
        }

};