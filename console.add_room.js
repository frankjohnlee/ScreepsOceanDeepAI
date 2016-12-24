module.exports = {
    run: function(kingdom_str, room_str){
        /** Add a room to a kingdom

        @type kingdom_str: str
            Name of the kingdom
        @type room_str: str
            Name of the room, ie "E31N77"
        @rtype: null
        **/

        if(Memory.user.kingdom[kingdom_str] == null){
            console.log("Invalid kingdom name");
        }else if(Memory.user.room[room_str] == null){
            console.log("Invalid room name. Profile room first");
        }else{
            Memory.user.kingdom[kingdom_str].room[room_str] = {};

            var room_structures = Memory.user.room[room_str].structure;
            var controller = null;
            for(i in room_structures){
                structure = Game.getObjectById(i);
                if(structure.structureType == STRUCTURE_CONTROLLER){
                    controller = structure;
                    break;
                }
            }

            if(controller == null){
                console.log("Error, controller not found in " + room_str);
            }else{
                if(controller.my){
                    Memory.user.kingdom[kingdom_str].room[room_str].type = "Capital";
                }else{
                    Memory.user.kingdom[kingdom_str].room[room_str].type = "Subsidiary";
                }
                console.log("Added " + room_str + " to " + kingdom_str);
            }
        }
    }
};
