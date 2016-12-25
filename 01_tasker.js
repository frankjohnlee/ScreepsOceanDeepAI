/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function () {
        var spaces = "    ";
        console.log(spaces + "01_tasker.js");
        var all_creeps = Game.creeps;
        var count_all_creeps = _.sum(all_creeps, (c) => c != undefined);
        console.log(spaces + spaces + "Total Number of Creeps: " + count_all_creeps);
        var build_roads = spaces + spaces + "Creating Roads b/c con_site_length < 10: false";

        for (let name in all_creeps) { // for names in my list of str for   creeps ['creep1, creep2, ...]

            var creep = Game.creeps[name]; // access the actual object of my creep with str key
            if (creep != undefined){
                var con_site_length = creep.room.find(FIND_CONSTRUCTION_SITES).length;
                var con_side_less_than_10 = con_site_length < 99;
                if (con_side_less_than_10 && creep.memory.role != 'Builder' &&  creep.memory.role != 'Waller'){
                    build_roads = spaces + spaces + "Creating Roads b/c con_site_length < 10: true";
                    creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);
                }


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
                var no_harvesters = false;
                no_harvesters = require('01a_check_harvester').run(creep);


                if (no_harvesters == false){
                    require('01b_normal_run').run(creep);
                }

            }

        }
        console.log(spaces + spaces + "No Harvester Check (false means running normal): " + no_harvesters);
    }
};

