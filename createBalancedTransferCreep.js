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
            // Apparently based on the resource math more than 6 work parts will be inefficient
            var numberofParts = Math.floor(energy/200);
            var work = [];
            var carry = [];
            var move = [];
            var body = [];

            for (let i = 0; i < numberofParts; i++){
                body.push(CARRY);
            }
            for (let i = 0; i < numberofParts; i++){
                body.push(MOVE);
            }


            return body
        }
    };
