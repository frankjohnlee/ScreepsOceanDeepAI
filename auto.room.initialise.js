var initRoom = require('console.room.initialise');
var removeDup = require('remove.duplicates.list');
module.exports = {
    // This function generates a list of room names from creep location and inits rooms for all of them
    // To run this function:
    // name this function auto.roon.initialise.js
    // Add this to the top of main.js var autoInitRoom = require('auto.room.initialise');
    // Add this to the loop inside main.js autoInitRoom.run();
    run: function(){
        // STEP 1: Generate a list of room names for which our creep occupies.
        var list_occupied_rooms = [];
        for (let name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory._move != undefined) {
                //console.log(creep.memory._move.dest.room);
                list_occupied_rooms.push(creep.memory._move.dest.room);}
            }

        //console.log(list_occupied);
        list_occupied_rooms = removeDup.run(list_occupied_rooms);
        //console.log(list_occupied_rooms);
        // STEP 2: Initialize Room Class for each room
        for (let room_name in list_occupied_rooms) {
            var r_name = room_name;
            initRoom.run(r_name);
            if (Game.memory.room_name == undefined){
                var position_spawn = curr_room.find(FIND_STRUCTURES, s => s.structureType == STRUCTURE_SPAWN);
                creep_locater = Game.room_name.creeps[0];
                creep_locater.say(locFind);
                creep_locater.moveTo(position_spawn);
            }
        }


    }
};