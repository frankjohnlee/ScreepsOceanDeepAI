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
        if (creep.memory.working == true) { // If creep is currently set to working

            // NO WALL LEFT BEHIND POLICY
            // This will change the structure ceiling ensuring all walls reach a certain standard before next level
            // levels of hits are 100, 1000, 2500, ....
            // MAX OF RAMPARTS IS CURRENTLY SET TO => 1000000

            var structure = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < 100 &&
                (object.structureType != STRUCTURE_CONTROLLER &&
                object.structureType != STRUCTURE_TOWER &&
                object.structureType != STRUCTURE_EXTENSION &&
                object.structureType != STRUCTURE_ROAD &&
                object.structureType != STRUCTURE_STORAGE)
            });

            if (structure == undefined || structure.length == 0) {
                structure = creep.room.find(FIND_STRUCTURES, {
                        filter: object => object.hits < 1000 &&
                        (object.structureType == STRUCTURE_WALL ||
                        object.structureType == STRUCTURE_RAMPART)
                    }
                )
            }

            if (structure == undefined || structure.length == 0)
                structure = creep.room.find(FIND_STRUCTURES, {
                    filter: object => object.hits < 5000 &&
                    (object.structureType == STRUCTURE_WALL ||
                    object.structureType == STRUCTURE_RAMPART)
                });


            if (structure == undefined) {
                structure = creep.room.find(FIND_STRUCTURES, {
                    filter: object => object.hits < 10000 &&
                    (object.structureType == STRUCTURE_WALL ||
                    object.structureType == STRUCTURE_RAMPART)
                });
            }

            if (structure == undefined || structure.length == 0) {
                structure = creep.room.find(FIND_STRUCTURES, {
                    filter: object => object.hits < 50000 &&
                    (object.structureType == STRUCTURE_WALL ||
                    object.structureType == STRUCTURE_RAMPART)
                });
            }

            if (structure == undefined || structure.length == 0) {
                structure = creep.room.find(FIND_STRUCTURES, {
                    filter: object => object.hits < 100000 &&
                    (object.structureType == STRUCTURE_WALL ||
                    object.structureType == STRUCTURE_RAMPART)
                });
            }
            if (structure == undefined || structure.length == 0) {
                structure = creep.room.find(FIND_STRUCTURES, {
                    filter: object => object.hits < 500000 &&
                    (object.structureType == STRUCTURE_WALL ||
                    object.structureType == STRUCTURE_RAMPART)
                });
            }
            if (structure == undefined || structure.length == 0) {
                structure = creep.room.find(FIND_STRUCTURES, {
                    filter: object => object.hits < 3000000000 &&
                    (object.structureType == STRUCTURE_WALL ||
                    object.structureType == STRUCTURE_RAMPART)
                });
            }
            structure.sort((a, b) => a.hits - b.hits);
            //console.log(structure);


            if (structure != undefined) {
                if (creep.repair(structure[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) { // it's index 1 b/c the first will always be controller
                    creep.say("wGoWall");
                    creep.moveTo(structure[0]);
                }
                else {
                    creep.say("wWK");
                    creep.repair(structure[0], RESOURCE_ENERGY);
                }
            }
            else {
                return false
            }

        }
    }
};

