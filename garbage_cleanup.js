/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('garbage_cleanup');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(){
        for (let name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }

        }
    }

};