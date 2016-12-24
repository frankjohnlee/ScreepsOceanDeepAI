/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep, room) {

        var debug_module = true;
        var room_object = room;
        var exit = creep.room.findExitTo(room_object);
        creep.say("RM:" + room);
        creep.moveTo(creep.pos.findClosestByPath(exit));

        if (debug_module == true){
            console.log("______________________________________________________________________________");

            console.log("Debuging: function_go_to_room.js");
            console.log("creep: " + creep);
            console.log(" var room_object = Game.rooms[room]: " + room_object);
            console.log("room: " + room);
            console.log("var exit = creep.room.findExitTo(Game.rooms[room]): ");
            console.log(exit);
            console.log("______________________________________________________________________________");

            // ERR_NO_PATH	         -2         Path can not be found.
            // ERR_INVALID_ARGS	     -10    	The location is incorrect.
        }
    }


};

