module.exports = {
    run: function (creep) {

        var debug_module = true;
        require('function_working_status').run(creep); // When creep is carrying max energy working becomes false.
        creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);

        var home_room = creep.memory.home_room;
        creep.memory.target_room = 'W21S79';
        var creep_current_room = creep.room.name;
        var in_target_room = creep_current_room == creep.memory.target_room;
        var in_home_room = creep_current_room == home_room;


        // CASE 1: CREEP IS AT HOME WITH NO ENERGY => Creep should go to target_room
        if (in_home_room && creep.memory.working == false) {
            require('function_go_to_target_room').run(creep);
        }

        // CASE 1: CREEP IS AT TARGET ROOM AND DOES HAVE FULL energy => Creep should get energy
        else if (in_target_room && creep.memory.working == false) {
            creep.say("LDHGetEnergy");
            var source = require('function_find_closest_source').run(creep);
            require('function_move_in_range_harvest').run(creep, source);
        }

        // CASE 2: CREEP IS FULL OF ENERGY => GO HOME
        else if (in_target_room && creep.memory.working == true) {
            var con_site_rest = creep.room.find(FIND_CONSTRUCTION_SITES);
            var repairSite = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < 1500 &&
                (object.structureType != STRUCTURE_WALL && object.structureType != STRUCTURE_RAMPART)
            });
            // IF THERE ARE CONSTRUCTION SITES THEN BUILD IT
            if (con_site_rest) {
                require('role_builder').run(creep);
            }
            // IF THERE ARE ANY ROADS ABOUT TO BREAK DOWN REPAIR IT
            else if (repairSite) {
                require('role_repairer').run(creep);
            }
            // IF NONE OF THOSE ARE PRESSING ISSUES THEN GO HOME AND DELIVER ENERGY
            else {
                require('function_go_to_home_room').run(creep);
            }

        }

        // CASE 3: CREEP IS HOME AND FULL OF ENERGY => BECOME HARVESTER
        if (in_home_room && creep.memory.working == true) {
            require("role_harvester").run(creep);
        }

        if (debug_module){
            require("")
        }

    }
};
