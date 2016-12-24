module.exports = {
    run: function (curr_room, role_name) {
        // @type curr_room: Room Type Object
        // @type role_name: str
            // This is the string name of a role for example 'Harvester'
        // @rtype: int
            // What is returned is an int which represents the number used

        room_creeps = curr_room.find(FIND_MY_CREEPS);
        var current_number_of_harvesters = _.sum(room_creeps, (c) => c.memory.role == 'Harvester');
        return current_number_of_harvesters
    }

};