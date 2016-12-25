/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {
        /* Harvester Check 01a_check_harvester.js
         Returns True
         (1) if the current creep's room is it's home room and there's no harvesters in that room

         Returns False
         (1) if the current creep's room is not in home room
         or
         (2) if the current creep's room is in it's home room but there is at least one harvester in the room

         @type creep: Creep Object
         @rtype: bool

         */
        var creep_role = creep.memory.role;
        var creep_room_str = creep.memory.home_room;
        var creep_in_home_room = creep.room.name == creep.memory.home_room;
        var curr_room = Game.rooms[creep_room_str];
        var current_number_of_harvesters = _.sum(curr_room.find(FIND_MY_CREEPS), (c) => c.memory.role == 'Harvester');
        var return_value = false;

        if (creep_in_home_room && current_number_of_harvesters == 0){
            return_value = true;
            if (creep_role == 'Harvester' ||
                creep_role == 'Builder' ||
                creep_role == 'Repairer' ||
                creep_role == 'Energizer' ||
                creep_role == 'Towerer' ||
                creep_role == 'Builder' ||
                creep_role == 'Waller' ||
                creep_role == 'storer' || creep_role == 'Storer') {
                require('role_harvester').run(creep);
            }

        }
        return return_value


    }
};

