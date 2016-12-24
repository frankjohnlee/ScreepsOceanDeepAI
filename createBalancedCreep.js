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
            if (energy > 1000){
                energy = 1000
            }
            var numberofParts = Math.floor(energy/200);
            var body = [];
            for (let i = 0; i < numberofParts; i++){
                body.push(WORK);
            }
            for (let i = 0; i < numberofParts; i++){
                body.push(CARRY);
            }
            for (let i = 0; i < numberofParts; i++){
                body.push(MOVE);
            }

            return body
        }
    };
