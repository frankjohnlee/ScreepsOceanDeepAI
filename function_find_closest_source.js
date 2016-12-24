/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role_harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function (creep) {
        var source = creep.pos.findClosestByPath(FIND_SOURCES,
            {filter: object => object.energy > 0}
        );
        return source;


    }
};

