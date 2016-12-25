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

            /*
             - a normal source will have 3000 energy and regenerate with a defined speed
             - a bigger creep would be done quicker but would have to do nothing after that and more expensive and time consuming to produce
             - you actually "need" 5 work-parts and will have time to spare
             - but if you add 1 carry, and repair your container you will need more time repairing then you had time to spare
             so you lose some resources that you can not get done mining before it renews itself. so you add another WORK-part 6 WORK,
             mostly 2 MOVE and 1 CARRY
             - a function that is only called every 5. tick because repair takes 5 times what it can collect in 1 tick
             */
            var work_count = work.length;
            var carry_count = carry.length;
            var move_count = work.length;

            var body = work + carry + move;
            return body
        }
    };
