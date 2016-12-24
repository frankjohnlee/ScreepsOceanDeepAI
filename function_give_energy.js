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
        var closest_creep = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
            filters: object =>
            object.energy != object.energyCapacity
        });
        require('function_move_in_range_transfer').run(creep, closest_creep);
    }
};

