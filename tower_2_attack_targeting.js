module.exports = {
    run: function(tower){
        var towers = curr_room.find(FIND_STRUCTURES,
            {filter: (structure) => structure.structureType == STRUCTURE_TOWER});

        //// get a list of targets that I can attack
        //for (let tower of towers) {
        //    var targets = tower.pos.find(FIND_HOSTILE_CREEPS,
        //        {filter: (enemy) => towers.pos.getDirectionTo(enemy) <= 20});
        //}

    }
};