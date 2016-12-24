/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */




module.exports = {
    run: function(min_number_harvesters,       // 0
                  min_number_energizers,       // [1]
                  min_number_toweres,          // [2]
                  min_number_builders,         // [3]
                  min_number_repairers,        // [4]
                  min_number_upgraders,        // [5]
                  current_number_of_harvesters,// [6]
                  current_number_of_energizers,// [7[
                  current_number_of_towerers,  // [8]
                  current_number_of_builders,  // [9]
                  current_number_of_repairers, // [10]
                  current_number_of_upgraders  // [11]
    ){
        // STEP 1: Check for extra creep
        var list_str = [];
        if (current_number_of_harvesters > min_number_harvesters && current_number_of_harvesters >= 3) {
            var extra_creep = current_number_of_harvesters - min_number_harvesters;
            //for (i in )
            list_str.append('harvester');
        }
        else if (current_number_of_energizers > min_number_energizers){
            list_str.append('energizer');
        }
        else if (current_number_of_towerers > min_number_toweres){
            list_str.append('towerer');


        }
        else if  (current_number_of_builders > min_number_builders) {
            list_str.append('builder');


        }
        else if (current_number_of_repairers > min_number_repairers){
            list_str.append('repairer');


        }
        else if  (current_number_of_upgraders > min_number_upgraders) {
            list_str.append('upgrader');
        }

        // STEP 2: Check for missing creep
    }
};
