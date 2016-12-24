/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (curr_spawn, spaces_str) {
        var curr_room = curr_spawn.room;
        var con_site_towers = curr_room.find(STRUCTURE_TOWER);
        var debug_str = spaces_str + 'Current Structures => ';
        debug_str += ' || Towers: ' + con_site_towers.length+ ' || ';

        var con_site_spawns = curr_room.find(STRUCTURE_SPAWN);
        debug_str += 'Spawns: ' + con_site_spawns.length+ ' || ';

        var con_site_walls_ramparts = curr_room.find(STRUCTURE_WALL || STRUCTURE_RAMPART);
        debug_str += 'Walls/Ramparts: ' + con_site_walls_ramparts.length+ ' || ';
        var con_site_extensions = curr_room.find(STRUCTURE_EXTENSION);
        debug_str += 'Extensions: ' + con_site_extensions.length + ' || ';

        var con_site_roads = curr_room.find(STRUCTURE_ROAD);
        debug_str += 'Roads: ' + con_site_roads.length + ' || ';

        var con_site_rest = curr_room.find(FIND_MY_STRUCTURES);
        debug_str += 'Total Structures: ' + con_site_rest.length + ' || ';

        console.log(debug_str);

    }
};

