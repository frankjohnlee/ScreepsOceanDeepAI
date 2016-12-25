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
        var debug_module = false;
        var debug_str = '';
        creep.say("bWorking");

        // Order to build: Towers, Spawns, Extensions, extensions, walls, rest
        var con_site_towers = creep.room.find(FIND_CONSTRUCTION_SITES, {
            filter: object =>
            object.structureType == STRUCTURE_TOWER
        });
        debug_str += 'con_site_towers: ' + con_site_towers.length+ ' || ';

        var con_site_spawns = creep.room.find(FIND_CONSTRUCTION_SITES, {
            filter: object =>
            object.structureType == STRUCTURE_SPAWN
        });
        debug_str += 'con_site_spawns: ' + con_site_spawns.length+ ' || ';

        var con_site_walls_ramparts = creep.room.find(FIND_CONSTRUCTION_SITES, {
            filter: object =>
            object.structureType == STRUCTURE_WALL ||
            object.structureType == STRUCTURE_RAMPART
        });
        debug_str += 'con_site_walls_ramparts: ' + con_site_walls_ramparts.length+ ' || ';
        var con_site_extensions = creep.room.find(FIND_CONSTRUCTION_SITES, {
            filter: object =>
            object.structureType == STRUCTURE_EXTENSION
        });
        debug_str += 'con_site_extensions: ' + con_site_extensions.length + ' || ';

        var con_site_roads = creep.room.find(FIND_CONSTRUCTION_SITES, {
            filter: object =>
            object.structureType == STRUCTURE_ROAD
        });
        debug_str += 'con_site_roads: ' + con_site_roads.length + ' || ';

        var con_site_rest = creep.room.find(FIND_CONSTRUCTION_SITES);
        debug_str += 'con_site_rest: ' + con_site_rest.length + ' || ';

        var target_array = [];
        var nested_array = [con_site_towers, con_site_spawns, con_site_walls_ramparts, con_site_extensions, con_site_roads, con_site_rest];

        if (nested_array[0].length > 0){
            target_array = nested_array[0]}

        else if (nested_array[1].length > 0){
            target_array = nested_array[1]}
        else if (nested_array[2].length > 0){
            target_array = nested_array[2]}
        else if (nested_array[3].length > 0){
            target_array = nested_array[3]}
        else if (nested_array[4].length > 0){
            target_array = nested_array[4]}
        else if (nested_array[5].length > 0){
            target_array = nested_array[5]}
        else { // else if (nested_array[6].length > 0){
            target_array = nested_array[6]}

        //target_array = con_site_rest;
        var con_target = creep.pos.findClosestByPath(target_array); // Just sends builder directly to closest

        if (con_target != undefined) {
            if (creep.build(con_target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(con_target);
                creep.say("bGoConSite");
                return true
            }
        }



        if (debug_module == true){
            console.log("______________________________________________________________________________");

            console.log("Debuging: function_build.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("Creep: " + creep);
            console.log(debug_str);
            console.log("con_target: " + con_target);
            console.log("______________________________________________________________________________");
        }
        return false
    }
};

