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
        if (creep.room.name == creep.memory.target_room) {

            var enemy_towers_array = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: object =>
                object.structureType == STRUCTURE_TOWER
            });
            var enemy_creep_array = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            var enemy_spawn_array = creep.pos.findClosestByRange(FIND_HOSTILE_SPAWNS);
            var enemy_structures = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            console.log(enemy_towers_array);
            if (enemy_towers_array){

                var target = enemy_towers_array;
                creep.moveTo(target);
                if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                    creep.moveTo(target); // if it's not in range then move to range
                    creep.say("W_A_Tower");
                }
            }
            else if (enemy_creep_array) {
                var target =  enemy_towers_array;
                    if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                        creep.moveTo(target); // if it's not in range then move to range
                        creep.say("W_A_Creep");
                    }
                }
            else if (enemy_spawn_array) {
                var target = enemy_spawn_array;
                if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                    creep.moveTo(target); // if it's not in range then move to range
                    creep.say("W_A_Spawn");
                }
            }
            else if (enemy_structures) {
                var target = enemy_structures;
                if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                    creep.moveTo(target); // if it's not in range then move to range
                    creep.say("W_A_Structures");
                }

            }
        }

        else if (creep.memory.home_room == creep.room.name) {
            console.log("Warrior1 in room");
            var army_size_before_attack = 6;
            var army_size_when_attacking = army_size_before_attack + 1;
            require('function_go_to_room').run(creep, creep.memory.target_room);
            //var current_number_of_warriors1 = _.sum(Game.creeps, (c) => c.memory.role == 'WarriorMelee1');
            //if (current_number_of_warriors1 > army_size_before_attack){
            //    creep.say("ATTACK");
            //    require('function_go_to_target_room').run(creep);
            //}
            //else{
            //    creep.moveTo(17, 1);
            //    creep.say(current_number_of_warriors1 + " | " + army_size_when_attacking);
            //}

        }

        if (debug_module == true){
            console.log("______________________________________________________________________________");

            console.log("Debuging: role_warrior_melee_1.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("creep.room.name == 'W31S76': ");
            console.log(creep.room.name == 'W31S76');

            console.log("______________________________________________________________________________");
        }

    }
};