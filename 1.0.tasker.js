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
        var spaces = "    ";
        console.log(spaces + "01_tasker.js");
        var all_creeps = Game.creeps;
        var count_all_creeps = _.sum(all_creeps, (c) => c != undefined);
        console.log(spaces + spaces + "Total Number of Creeps: " + count_all_creeps);
        var build_roads = spaces + spaces + "Creating Roads b/c con_site_length < 10: false";

        for (let name in all_creeps) { // for names in my list of str for   creeps ['creep1, creep2, ...]

            var creep = Game.creeps[name]; // access the actual object of my creep with str key

                var no_harvesters = false;
                //no_harvesters = require('1.1.checkHarvester').run(creep);

                // if not ran then every creep will perform whatever role they have in their memory
                if (no_harvesters == false){
                    require('1.2.normalRun').run(creep);
                }

            }

        }

    };
