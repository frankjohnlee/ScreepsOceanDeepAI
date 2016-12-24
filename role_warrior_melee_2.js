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

        var target_towers = creep.pos.findClosestByPath(STRUCTURE_TOWER);



        var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        if (target != undefined) {
            if (creep.attack(target) == ERR_NOT_IN_RANGE) { // try to harvest from source
                creep.moveTo(target); // if it's not in range then move to range
                creep.say("WM2Going");
            }
        }
        else if (creep.pos.roomName == 'W31S77') {
            require("function_go_to_room").run(creep, 'W32S77')

        }
        else if (creep.pos.roomName == 'W31S76') {
            require("function_go_to_room").run(creep, 'W31S77')
        }

        if (debug_module == true){
            console.log("______________________________________________________________________________");
            console.log("Debuging: role_warrior_melee_2.js");
            console.log("var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS): " + target);
            console.log("creep.pos.roomName: " + creep.pos.roomName);
            console.log("creep.pos.roomName == 'W31S77': ");
            console.log(creep.pos.roomName == 'W31S77');
            console.log("creep.pos.roomName == 'W32S77'");
            console.log(creep.pos.roomName == 'W32S77');

            console.log("______________________________________________________________________________");
        }

    }
};