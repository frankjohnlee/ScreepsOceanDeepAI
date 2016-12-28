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
        if (creep.memory.role != 'Storer' &&
            creep.memory.working == false &&
            creep.room.storage != undefined &&
            creep.memory.homeRoomLevel > 4){
            require('function_mine_storage').run(creep);
        }
        else if (creep.memory.working == false) {
            require('function_mine_energy').run(creep);
        }

    }
};

