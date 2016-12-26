/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {
        var debug_module = false;
        creep.memory.target_room = 'W31S76';
        if (creep.room.name == creep.memory.target_room) {

            var enemy_towers_array = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: object =>
                object.structureType == STRUCTURE_TOWER
            });
            var enemy_creep_array = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            creep.moveTo(enemy_creep_array)
        }

        else if (creep.memory.home_room == creep.room.name) {
            require('function_go_to_room').run(creep, creep.memory.target_room);


            if (debug_module == true) {
                console.log("______________________________________________________________________________");

                console.log("Debuging: role_warrior_melee_1.js");
                console.log("creep.room.name: " + creep.room.name);
                console.log("creep.room.name == 'W31S76': ");
                console.log(creep.room.name == 'W31S76');

                console.log("______________________________________________________________________________");
            }

        }
    }
};