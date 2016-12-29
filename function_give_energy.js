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
        const debugModule = false;
        var closest_creep = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
            filter : object =>
            object.carry != object.energyCapacity &&
            object.memory.role == 'Upgrader' &&
            object.name != creep.name
        });
        require('function_move_in_range_transfer').run(creep, closest_creep);

        if (debugModule){
            console.log('__________function_give_energy.js_________');
            require('print_module_creep').run(creep);
            console.log("my name: " + creep.name);
            console.log('closest_creep.name: ' + closest_creep.name);
        }
    }
};

