module.exports = {
    run: function(room_str){
        /** Initialise a room object. A room object is accessed through
        Memory.user.room[room_str];

        @type room_str: str
            Name of room. ie: "E31N77"
            Game.rooms[room_str] should exist.
        @rtype: null
        **/
        if(Memory.user == null){
            Memory.user = {}
        }
        if(Memory.user.room == null){
            Memory.user.room = {}
        }
        if (Memory.user.attack_targets == null) {
            Memory.user.attack_targets = false
        }
        if(Game.rooms[room_str] != null){
            if(Memory.user.room[room_str] == null){
                Memory.user.room[room_str] = {};
            }

            Memory.user.room[room_str]['structure'] = {};
            var structure = Game.rooms[room_str].find(FIND_STRUCTURES);
            for(i in structure){
                Memory.user.room[room_str].structure[structure[i].pos] = {};
            }

            Memory.user.room[room_str]['source'] = {};
            var sources = Game.rooms[room_str].find(FIND_SOURCES);
            for(i in sources){
                Memory.user.room[room_str].source[sources[i].pos] = {};
            }

            Memory.user.room[room_str]['mineral'] = {};
            var minerals = Game.rooms[room_str].find(FIND_MINERALS);
            for(i in minerals){
                Memory.user.room[room_str].mineral[minerals[i].pos] = {};
            }

            //console.log("Successfully profiled " + room_str);
        }else{
            //console.log("Room " + room_str + " is not accessible");
        }
    }
};
