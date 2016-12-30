module.exports = {
    run: function (creep) {

        var debug_module = false;
        require('function_working_status').run(creep); // When creep is carrying max energy working becomes false.

        var home_room = creep.memory.home_room;
        var creep_current_room = creep.room.name;
        var in_target_room = creep_current_room == creep.memory.target_room;
        var in_home_room = creep_current_room == home_room;



        // CASE 1: CREEP IS AT HOME WITH NO ENERGY => Creep should go to target_room
        if (in_home_room && creep.memory.working == false) {
            require('function_go_to_target_room').run(creep);

        }

        // CASE 2: CREEP IS AT TARGET ROOM AND DOES HAVE FULL energy => Creep should get energy
        else if (in_target_room && creep.memory.working == false) {
            creep.say("LDHGetEnergy");
            require('function_working_false_then_mine').run(creep);

        }

        // CASE 3: CREEP IS FULL OF ENERGY => GO HOME
        else if (in_target_room && creep.memory.working == true) {


            var target_array = creep.room.find(FIND_CONSTRUCTION_SITES);
            var con_target = creep.pos.findClosestByPath(target_array);
            var repairSite = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax &&
            (object.structureType != STRUCTURE_WALL &&
            object.structureType != STRUCTURE_RAMPART)
            });
            var closest_repair = creep.pos.findClosestByPath(repairSite);

            if (con_target != undefined) {
                if (creep.build(con_target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(con_target);
                    creep.say("LDH-GoConSite");
                }
            }
            else if (closest_repair != undefined) {
                if (creep.repair(closest_repair) == ERR_NOT_IN_RANGE) { // try to transfer
                    creep.say("rGoRepair");
                    creep.moveTo(closest_repair);
                }
            }
            else {
                require('function_go_to_home_room').run(creep);
            }



        }



        // CASE 4: CREEP IS HOME AND FULL OF ENERGY => BECOME HARVESTER
        else if (in_home_room && creep.memory.working == true) {
            require("role_storer").run(creep);
        }

        if (debug_module) {
            require("print_module_creep").run(creep, "long_distance_harvester.js");
            console.log("in_target_room: " + in_target_room);
            console.log("in_home_room: " + in_home_room);
        }

        }
    };
