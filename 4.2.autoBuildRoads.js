/**
 * Created by Frank2 on 12/10/2016.
 */
module.exports = {

    run: function (room) {
        var creep_in_room = room.find(FIND_MY_CREEPS);


            for (let creep in creep_in_room) {
                    room.createConstructionSite(creep.pos, STRUCTURE_ROAD);
            }
        }
    };
