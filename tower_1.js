module.exports = {
    run: function(tower){

        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS,
            {filter: (enemy) => tower.pos.getDirectionTo(enemy) <= 20});

        if (target != undefined) {
            tower.attack(target)
        }

    }
};
