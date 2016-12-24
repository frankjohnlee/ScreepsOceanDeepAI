/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (curr_room, body_parts_list) {
        console.log("                    creep_spawner_get_avail_spawns.js");
        spawns_array = curr_room.find(FIND_MY_SPAWNS);
        console.log(spawns_array);

        while (spawns_array != undefined) {
            if (spawns_array[0].canCreateCreep(body_parts_list) == 0) {
                return spawns_array[0]
            }
            else {
                spawns_array.pop()
            }
        }
        return undefined
    }
};

