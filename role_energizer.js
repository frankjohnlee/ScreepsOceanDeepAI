module.exports = {
    run: function (creep, structre_rec = false) {

        require('function_working_status').run(creep);

        if (creep.memory.working == false){
            require('function_mine_energy').run(creep);
        }

        else { // else if (creep.memory.working == true){
            if (structre_rec == false){
                var towers = creep.room.find(FIND_MY_STRUCTURES, {
                    filters: object =>
                    object.energy < object.energyCapacity &&
                    object.structureType == STRUCTURE_TOWER
                });
                var extensions = creep.room.find(FIND_MY_STRUCTURES, {
                    filters: object =>
                    object.energy < object.energyCapacity
                    && object.structureType == STRUCTURE_EXTENSION
                });
                var containers = creep.room.find(FIND_MY_STRUCTURES, {
                    filters: object =>
                    object.structureType == STRUCTURE_CONTAINER
                });
                var storage = creep.room.storage;

                towers.sort((b,a) => a.energy - b.energy);
                require('function_math_shuffle').run(extensions);
                var structure = towers;
                structure.concat(extensions);
            }
            else {
                structure = structre_rec;
            }
            creep.say("eLen:" + structure.length);

            if (structure.length == 0){
                require('role_builder').run(creep);
            }

            while (structure[0].energy == structure[0].energyCapacity && structure.length > 1){
                structure.shift();
            }
            const isTransferer = creep.memory.role == 'Transferer';
            const lastStructureFull = structure[0].energy == structure[0].energyCapacity;

            if (isTransferer && lastStructureFull){
                require('function_give_energy').run(creep);
            }
            else if (lastStructureFull){
                require('role_storer').run(creep);
            }
            else {
                require('function_move_in_range_transfer').run(creep, structure[0]);
            }
        }
    }
};