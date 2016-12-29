module.exports = {
    run: function (curr_room, creep_list) {
        const longHarvesters = Memory.rooms[curr_room.name]['creepInfo']['LongDistanceHarvesters'];
        const fourDirectionsArray = ['TOP', 'RIGHT', 'LEFT', 'BOTTOM'];

        for (let direction in fourDirectionsArray){
            const directonStr = fourDirectionsArray[direction];
            const Room = longHarvesters[directonStr];
            const RoomName = Room['roomName'];
            const wantedAmount = Room['minerNumber'];
            const countMiners =  _.sum(creep_list, (c) => c.memory.target_room == RoomName);
            const lessThanWanted = countMiners < wantedAmount;
            if (lessThanWanted){
                return RoomName
            }
        }

    }
};
