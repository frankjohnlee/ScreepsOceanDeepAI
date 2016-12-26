/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {

        var use_reserve = true;
        //console.log(use_reserve && creep.memory.role == 'Harvester' || creep.memory.role == 'Energizer');
        //Memory.attackBool === false &&
        if (use_reserve && creep.memory.home_room == 'W31S77' && creep.memory.role == 'Harvester' || creep.memory.role == 'Energizer' ){
            require('function_mine_storage').run(creep);
        }
        else if (creep.memory.working == false) {
            require('function_mine_energy').run(creep);
        }

    }
};

