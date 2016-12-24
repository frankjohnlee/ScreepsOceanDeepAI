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
        // Order to build: Towers, Spawns, Extensions, extensions, walls, rest

        // Returns True if build site is not undefined else returns nothing (undefined)


        var con_site_walls_ramparts = creep.room.find(FIND_CONSTRUCTION_SITES, {
            filter: object =>
            object.structureType == STRUCTURE_WALL ||
            object.structureType == STRUCTURE_RAMPART
        });
        if (con_site_walls_ramparts != undefined) {
            var debug_module = false;
            var debug_str = '';
            creep.say("WbWorking");
            debug_str += 'con_site_walls_ramparts: ' + con_site_walls_ramparts.length+ ' || ';


            //target_array = con_site_rest;
            var con_target = creep.pos.findClosestByPath(con_site_walls_ramparts); // Just sends builder directly to closest

            if (creep.build(con_target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(con_target);
                creep.say("WbGoConSite");
                }
            }
        else {
            return false
        }

        if (debug_module == true){
            console.log("______________________________________________________________________________");

            console.log("Debuging: function_build_wall.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("Creep: " + creep);
            console.log(debug_str);
            console.log("con_target: " + con_target);
            console.log("______________________________________________________________________________");
        }
    }
};

