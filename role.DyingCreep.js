module.exports = {
    run: function (creep) {
        var first_letter_role = creep.memory.role.slice(0,1);
        creep.say(first_letter_role + ": Dying");

        if (creep.carry != 0) {
            require('functionGoHome').run(creep);
            creep.memory.working = true;
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: object =>
                object.energy < object.energyCapacity
            });
            require('function_move_in_range_transfer').run(creep, structure);
        }
        }
};
