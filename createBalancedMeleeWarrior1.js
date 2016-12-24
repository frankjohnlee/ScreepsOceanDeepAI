/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep_spawner');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
        run: function(energy) {
            var numberofParts = Math.floor(energy/200);
            var body = [];
            for (let i = 0; i < numberofParts; i++){
                body.push(MOVE);
            }
            for (let i = 0; i < numberofParts; i++){
                body.push(ATTACK);
            }
            for (let i = 0; i < numberofParts; i++){
                body.push(TOUGH);
            }

            return body
        }
    };
