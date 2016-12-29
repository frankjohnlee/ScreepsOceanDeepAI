/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {
        const awayFromHome = creep.home_room != creep.room.name;
        let timeTillDying = 15;
        if (awayFromHome){
            timeTillDying = 40;
        }
        let shouldGoHome = creep.ticksToLive <= timeTillDying;


        if (shouldGoHome) {
            return true
        }
        else {
            return false
        }




    }
};
