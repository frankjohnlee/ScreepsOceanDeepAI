/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep, module_str) {


        console.log("______________________________________________________________________________");
        console.log("Debuging: " +  module_str);
        console.log("creep.room.name: " + creep.room.name);
        console.log("Creep: " + creep);
        console.log("Creep Role: " + creep.memory.role);
        console.log("Working: " + creep.memory.working);
        console.log("Creep Energy: " + creep.carry.energy + " | Creep Storage Capacity: " +  creep.carry.carryCapacity);
        console.log("Creep Home Room: " + creep.memory.home_room + " | Creep Target Room: " + creep.memory.target_room);

    }
};
