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
        var debug_module = false;
        if (creep.room.name == 'W31S76') {
            var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (target != undefined) {
                if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                    creep.moveTo(target); // if it's not in range then move to range
                    creep.say("WM1Going");
                }
            }
        }
        //else {
        //    require('function_go_to_room').run(creep, 'W31S76');
        //}

        if (debug_module == true){
            console.log("______________________________________________________________________________");

            console.log("Debuging: role_warrior_melee_1.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("creep.room.name == 'W31S76': ");
            console.log(creep.room.name == 'W31S76');

            console.log("______________________________________________________________________________");
        }

    }
};