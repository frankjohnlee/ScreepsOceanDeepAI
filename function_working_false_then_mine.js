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

        const debug_mode = false;
        var storageHasEnough = false;

        if (creep.room.storage != undefined){
            storageHasEnough = creep.room.storage.store[RESOURCE_ENERGY] > 10000
        }
        const isNotStorer = creep.memory.role != 'Storer';
        const isNotWorking = creep.memory.working == false;
        const isNotLDharvester = creep.memory.role != 'LongDistanceHarvester';
        const fromStorage =
            isNotStorer &&
            isNotWorking &&
            storageHasEnough &&
            isNotLDharvester;


        const fromMining = creep.memory.working == false;
        if (fromStorage){
            require('function_mine_storage').run(creep);
        }
        else if (fromMining) {
            require('function_mine_energy').run(creep);
        }
        if (debug_mode){
            console.log("_______function_working_then_mine.js________");
            console.log('Creep Name: ' + creep.name);
            console.log('Creep Role: ' + creep.memory.role);
            console.log('Creep Room: ' + creep.room);
            console.log('Working: ' + creep.memory.working + '  (if true then has energy)');
            console.log('Storage Energy: ' +   creep.room.storage.store[RESOURCE_ENERGY]);

            console.log("fromStorage: " + fromStorage);
            console.log('     isNotStorer: ' +isNotStorer);
            console.log('     isNotWorking: ' + isNotWorking);
            console.log('     storageHasEnough: ' + storageHasEnough + " (false if no storage in room or if storage energy < 10000");
            console.log('fromMining: ' + fromMining);
        }

    }
};

