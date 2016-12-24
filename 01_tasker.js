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
                var creep_role = creep.memory.role;
                var con_site_length = creep.room.find(FIND_CONSTRUCTION_SITES).length;
                var con_side_less_than_10 = con_site_length < 50;
                if (con_side_less_than_10 && creep.memory.role != 'role_builder'){
                    build_roads = spaces + spaces + "Creating Roads b/c con_site_length < 10: true";
                    creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);
                }


                if (creep_role == 'Harvester') {
                    require('role_harvester').run(creep);
                }
                else if (creep_role == 'Upgrader') {
                    require('role_upgrader').run(creep);
                }

                else if (creep_role == 'Builder') {
                    require('role_builder').run(creep);
                }
                else if (creep_role == 'Repairer') {
                    require('role_repairer').run(creep);
                }
                else if (creep_role == 'Energizer') {
                    require('role_energizer').run(creep);
                }
                else if (creep_role == 'Towerer') {
                    require('role_towerer').run(creep);
                }
                else if (creep_role == 'WarriorMelee1') {
                    require('role_warrior_melee_1').run(creep);
                }
                else if (creep_role == 'WarriorMelee1') {
                    require('role_warrior_melee_1').run(creep);
                }
                else if (creep_role == 'WarriorMelee2') {
                    require('role_warrior_melee_2').run(creep);
                }
                else if (creep_role == 'TownGuard') {
                    require('role_warrior_melee_1').run(creep);
                }
                else if (creep_role == 'Expander') {
                    require('role_expander').run(creep);
                }
                else if (creep_role == 'LongDistanceHarvester') {
                    require('role_long_distance_harvester').run(creep);
                }
                else if (creep_role == 'Waller' || creep_role == 'waller') {
                    require('role_waller').run(creep);
                }
                else if (creep_role == 'storer' || creep_role == 'Storer') {
                    require('role_storer').run(creep);
                }
                else if (creep_role == 'LongDistanceBuilder'){
                    require('role_long_distance_builder').run(creep);
                }
            }

        }
        console.log(build_roads);
    }
};

