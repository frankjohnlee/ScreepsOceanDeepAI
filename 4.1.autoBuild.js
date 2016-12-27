/**
 * Created by Frank2 on 12/10/2016.
 */
module.exports = {

    run: function (curr_room, x_cor, y_cor, STRUCTURE_TYPE, second_rec = false) {

        var debug_module = false;
        var debug_string = "Module: auto_build.js | ";
        debug_string += "curr_room: " + curr_room + " | ";
        debug_string += "x_cor: " + x_cor + " | ";
        debug_string += "y_cor: " + y_cor + " | ";
        debug_string += "STRUCTURE_TYPE: " + STRUCTURE_TYPE + " | ";

        // I will rewrite this later to include all the structures I want but for now it's just for extensions

        // STEP 1: CHECK IF THIS IS A RECURSIVE CALL

        // STEP 1: PART A: If this is true then there is no recursion yet

        // try blah.pos.find(STRUCTURE_SPAWN)
        //var position_spawn = curr_room.find(FIND_STRUCTURES, s => s.structureType == STRUCTURE_SPAWN);
        //array_to_spawn = curr_room.creeps[0].findPathto(position_spawn);
        //console.log(Game.creeps);
        //var x = position_spawn[0];
        //var y = position_spawn[1];
        var x = x_cor;
        var y = y_cor;
        var alt_x = x - 15;
        var alt_y = y - 15;


        // IF I cannot make anymore of the structure due to construction site limit or room controller level cap then break the loop
        if ((curr_room.createConstructionSite(x, y, STRUCTURE_TYPE) == ERR_RCL_NOT_ENOUGH) || (curr_room.createConstructionSite(x, y, STRUCTURE_TYPE) == ERR_FULL)) {
            var do_nothing = 0;
        }
        // IF SOMETHING IS WRONG WITH THE FORMATTING
        else if (curr_room.createConstructionSite(x, y, STRUCTURE_TYPE) == ERR_INVALID_ARGS) {
            console.log("ERR_INVALID_ARGS The location is incorrect");
        }
        // IF THE LOCATION CANNOT WORK...note: first time this run will always give that result since it's the location of the Spawn
        // if there are no error then I think the construction site was successfully set up
        else if (curr_room.createConstructionSite(x, y, STRUCTURE_TYPE) == ERR_INVALID_TARGET) {
            // Four conditions to try before trying 2 units aways
            // (null) x + 1, y
            // (2) x, y + 1
            // (3) x - 1, y
            // (4) x, y - 1
            // (5) repeat sequence with 2 digits
            var loop_x = x;
            var loop_y = y;

            // We want to check if it's getting too far away


            var i = 0;
            while (curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_TYPE) == ERR_INVALID_TARGET && i < 14) {
                i++;
                loop_x++;
                if (curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_TYPE) == ERR_INVALID_TARGET) {
                    loop_y++;
                }
            }
            if (second_rec == false){
                require('auto_build').run(curr_room, alt_x, alt_y, STRUCTURE_TYPE, true)
            }

            // ERR_INVALID_TARGET The structure cannot be placed at the specified location.
            // ERR_FULL You have too many construction sites. The maximum number of construction sites per player is 100.
            // ERR_INVALID_ARGS The location is incorrect.
            // ERR_RCL_NOT_ENOUGH Room Controller Level insufficient

        }
    }
};