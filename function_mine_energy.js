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
        var first_letter_role = creep.memory.role.slice(0,1);
        creep.say(first_letter_role + "GetE");
        var source = require('function_find_closest_source').run(creep);
        if (source != undefined){
            require('function_move_in_range_harvest').run(creep, source);
        }
        else if (creep.energy > 40){
            creep.memory.working = true
        }
    }
};

