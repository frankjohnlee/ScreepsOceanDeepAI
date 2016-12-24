/**
 * Created by Frank2 on 12/10/2016.
 */
module.exports = {

    run: function(curr_room){

        var x = 47;
        var y = 0;

        // IF I cannot make anymore of the structure due to construction site limit or room controller level cap then break the loop
        if ((curr_room.createConstructionSite(x, y, STRUCTURE_WALL) == ERR_RCL_NOT_ENOUGH) || (curr_room.createConstructionSite(x,y) == ERR_FULL)) {
            var do_nothing = 0;
        }
        // IF SOMETHING IS WRONG WITH THE FORMATTING
        else if (curr_room.createConstructionSite(x, y, STRUCTURE_WALL) == ERR_INVALID_ARGS) {
            console.log("ERR_INVALID_ARGS The location is incorrect");
        }
        // IF THE LOCATION CANNOT WORK...note: first time this run will always give that result since it's the location of the Spawn
        // if there are no error then I think the construction site was successfully set up
        else if (curr_room.createConstructionSite(x, y, STRUCTURE_WALL) == ERR_INVALID_TARGET) {
            // Four conditions to try before trying 2 units aways
            // (null) x + 1, y
            // (2) x, y + 1
            // (3) x - 1, y
            // (4) x, y - 1
            // (5) repeat sequence with 2 digits
            var loop_x = x;
            var loop_y = y;

            // We want to check if it's getting too far away


            while (curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_WALL) == ERR_INVALID_TARGET &&
            loop_y < 49){
                loop_y ++;
                curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_WALL);
                //if (loop_y == 10 ||
                //    loop_y == 20 ||
                //    loop_y == 30 ||
                //    loop_y == 40
                //){
                //    curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_RAMPART)
                //}
                //else{
                //    curr_room.createConstructionSite(loop_x, loop_y, STRUCTURE_WALL)
                //}

            }
        }

    }
};