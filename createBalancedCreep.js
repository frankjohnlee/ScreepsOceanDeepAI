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
            for (let i = 0; i < numberofParts; i++){
                work.push(WORK);
            }
            for (let i = 0; i < numberofParts; i++){
                carry.push(CARRY);
            }
            for (let i = 0; i < numberofParts; i++){
                move.push(MOVE);
            }

            // Set up for later when creeps get so big that they mine resources completely and have nothing to do
            var work_count = work.length;
            var carry_count = carry.length;
            var move_count = work.length;

            var body = work + carry + move;
            return body
        }
    };
