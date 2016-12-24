module.exports = {
    run: function(curr_room){

        // TOWERS
        var towers = curr_room.find(FIND_STRUCTURES,
            {filter: (structure) => structure.structureType == STRUCTURE_TOWER});

        for (let tower of towers) {
            require('tower_1').run(tower)
        }

    }
};