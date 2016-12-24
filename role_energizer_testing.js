module.exports = {
    run: function (creep) {

        var debug_module = true;
        var debug_str = '';

        require('function_working_status').run(creep);
        creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);

        if (creep.memory.working == true) { // If creep is currently set to working
            var towers = creep.room.find(FIND_MY_STRUCTURES, {
                filters: object =>
                object.energy < object.energyCapacity
                && object.structureType == STRUCTURE_TOWER
            });
            var structures = towers.sort((b, a) => a.energy - b.energy);
            debug_str += "Towers: " + require('function_length_or_0').run(towers) + " || ";
            if (structures == undefined){
                var extensions = creep.room.find(FIND_MY_STRUCTURES, {
                    filters: object =>
                    object.structureType == STRUCTURE_EXTENSION
                });
                structures = extensions;
            }
            debug_str += "Extensions: " + require('function_length_or_0').run(structures) + " || ";
            if (structures == undefined){
                var storages = creep.room.find(FIND_MY_STRUCTURES, {
                    filters: object =>
                    object.energy < object.energyCapacity
                    && object.structureType == STRUCTURE_STORAGE
                });
                structures = storages;
            }
            debug_str += "Storages: " + require('function_length_or_0').run(storages) + " || ";

            var target_structure = creep.pos.findClosestByPath(structures);

            if (target_structure != undefined ){
                target_structure
            }
            else {
                require('role_builder').run(creep);
            }

        }
        else { // else if (creep.memory.working == true) {
            creep.say("eGetEnergy");
            var source = require('function_find_closest_source').run(creep);
            if (source != undefined){
                require('function_move_in_range_harvest').run(creep, source);
            }
            else if (creep.energy > 40){ //  else if (creep.energy > 40 && source == undefined) {
                creep.memory.working == true
            }
        }


        if (debug_module == true) {
            console.log("______________________________________________________________________________");

            console.log("Debuging: role_energizer.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("Working: ");
            console.log(creep.memory.working);

            console.log("Creep: " + creep);
            console.log(debug_str);
            console.log("target_structure: " + target_structure);

            console.log("______________________________________________________________________________");
        }
    }
};