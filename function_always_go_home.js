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
        creep.say(first_letter_role + "GoHome");
        if (creep.roomName != creep.memory.home_room){
            require('function_go_to_room').run(creep, creep.memory.home_room);
        }
    }
};

