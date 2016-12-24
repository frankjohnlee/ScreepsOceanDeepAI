/**
 * Created by Frank2 on 12/10/2016.
 */
module.exports = {

    run: function(curr_spawn) {

        var auto_wall = false;

        var curr_room = curr_spawn.room;
        var debug_module = false;


        if (curr_room.controller.level == 2 && auto_wall) {
            require('auto_build_walls_left').run(curr_room);
            require('auto_build_walls_right').run(curr_room);
            require('auto_build_walls_bottom').run(curr_room);
            require('auto_build_walls_top').run(curr_room);
        }


        if (curr_room.controller.level > 1) {
            require('auto_build').run(curr_room, 26, 23, STRUCTURE_EXTENSION);


        }
        if (curr_room.controller.level > 2) {
            require('auto_build').run(curr_room, 9, 22, STRUCTURE_TOWERS);
            require('auto_build').run(curr_room, 27, 28, STRUCTURE_STORAGE);
        }
        if (debug_module){
            var debug_string = "Module: auto_build.js | ";
            debug_string += "curr_spawn: " + curr_spawn  + " | ";
            debug_string += "curr_room: " + curr_room  + " | ";
            debug_string += "if (curr_room.controller.level > 1) {: " + curr_room.controller.level > 1  + " | ";
            debug_string += "curr_room.controller.level > 2: " + curr_room.controller.level > 2  + " | ";
            console.log(debug_string);
        }
    }
    };
