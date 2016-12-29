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

        var creep_role = creep.memory.role;

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
        else if (creep_role == 'LongDistanceBuilder') {
            require('role_long_distance_builder').run(creep);
        }
        else if (creep_role == 'CannonFodder') {
            require('role_cannon_fodder').run(creep);
        }
        else if (creep_role == 'Transferer' || 'smallTransferer') {
            require('role_transferer').run(creep);
        }
    }

};
