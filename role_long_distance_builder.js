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

        var debug_module = true;
        require('function_working_status').run(creep);
        var con_site_rest = creep.room.find(FIND_CONSTRUCTION_SITES); // checks if there are any jobs in the current room
        var room_array = creep.memory.target_rooms; // ['W33S77','W32S77', 'W31S77']
        var index_of_rooms = room_array.length - 1 ;
        var array_index = require('function_math_range_of_numbers').run(0, index_of_rooms);
        require('function_math_shuffle').run(array_index);
        var random_index = array_index[0];
        var room_to_go_to = room_array[random_index];

        if (creep.memory.working == false) {
            require('function_mine_energy').run(creep);
        }
        else if (con_site_rest != undefined) {
            var go_build = require('function_build');
        }
        else if (creep.memory.target_room == false){
            creep.memory.target_room = room_to_go_to;
        }
        else if (creep.memory.target_room == creep.roomName){
            creep.memory.target_room = false;
        }
        else if (creep.memory.target_room != false){
            require('function_go_to_room').run(creep, creep.memory.target_room[room_to_go_to]);
        }





        if (debug_module == true){
            console.log("______________________________________________________________________________");

            console.log("Debuging: role_long_distance_builder.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("target_rooms: " + creep.memory.target_room);
            console.log("Creep: " + creep);
            console.log("Check Working: ");
            console.log(creep.memory.working);
            console.log("go_build: ");
            console.log(go_build);
            console.log("var room_array = creep.memory.target_rooms: " + room_array);
            console.log("var index_of_rooms = room_array.length - 1: " + index_of_rooms);
            console.log("var array_index = require('function_math_range_of_numbers').run(0, index_of_rooms): " + array_index);
            console.log("var random_index = array_index[0]: " + random_index);
            console.log("Room to Go to: " + room_to_go_to);
            console.log("creep.memory.target_room: " + creep.memory.target_room);
            console.log("else if (creep.memory.target_room == undefined){: ");
            console.log(creep.memory.target_room == undefined);







            console.log("______________________________________________________________________________");
        }
    }
};
