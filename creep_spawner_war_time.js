/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */




module.exports = {
    run: function () {
        console.log("Enemy Creep Detected Attempting to Spawn Defender Creep");
        Game.spawns['Spawn1'].createCreep([ATTACK, MOVE], undefined, {
            role: 'WarriorMelee1',
            working: false,
            home_room: Game.roomName
        });
    }
};
