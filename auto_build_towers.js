/**
 * Created by Frank2 on 12/10/2016.
 */
module.exports = {

    run: function(curr_room, x_rec = null, y_rec = null, current_try = null){
        // I will rewrite this later to include all the structures I want but for now it's just for extensions

        // STEP 1: CHECK IF THIS IS A RECURSIVE CALL

        // STEP 1: PART A: If this is true then there is no recursion yet

        var x = 9;
        var y = 19;
        var break_loop = false;


        // IF I cannot make anymore of the structure due to construction site limit or room controller level cap then break the loop
        if ((curr_room.createConstructionSite(x, y, STRUCTURE_TOWER) == ERR_RCL_NOT_ENOUGH) || (curr_room.createConstructionSite(x,y) == ERR_FULL)) {
            var do_nothing = 0;
        }
        // IF SOMETHING IS WRONG WITH THE FORMATTING
        else if (curr_room.createConstructionSite(x, y, STRUCTURE_TOWER) == ERR_INVALID_ARGS) {
            console.log("ERR_INVALID_ARGS The location is incorrect");
        }
        // IF THE LOCATION CANNOT WORK...note: first time this run will always give that result since it's the location of the Spawn
        // if there are no error then I think the construction site was successfully set up
        else if (curr_room.createConstructionSite(x, y, STRUCTURE_TOWER) == ERR_INVALID_TARGET) {
            console.log("auto_build tower attempting to build tower");
            // Four conditions to try before trying 2 units aways
            // (null) x + 1, y
            // (2) x, y + 1
            // (3) x - 1, y
            // (4) x, y - 1
            // (5) repeat sequence with 2 digits
            var loop_x = x;
            var loop_y = y;
            while (curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_TOWER) == ERR_INVALID_TARGET){
                //var look = curr_room.lookAt(loop_x, loop_y) == STRUCTURE_ROAD;
                //if (look == STRUCTURE_ROAD){
                //curr_room.remove(loop_x, loop_y)
                //}
                //curr_room.createConstructionSite(loop_x, loop_y);
                loop_x ++;
                if (curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_TOWER) == ERR_INVALID_TARGET){
                    //var look = curr_room.lookAt(loop_x, loop_y) == STRUCTURE_ROAD;
                    //if (look == STRUCTURE_ROAD){
                    //    curr_room.remove(loop_x, loop_y)
                    //};
                    loop_y++;
                }
            }
        }


        // ERR_INVALID_TARGET The structure cannot be placed at the specified location.
        // ERR_FULL You have too many construction sites. The maximum number of construction sites per player is 100.
        // ERR_INVALID_ARGS The location is incorrect.
        // ERR_RCL_NOT_ENOUGH Room Controller Level insufficient

    }
};