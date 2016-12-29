module.exports = {
    run: function(curr_room, creep_list){
        const roomName = curr_room.name;
        const updateCount = 'updateCount';

        if (Memory.rooms == undefined) {
            Memory.rooms = {};
        }
        // MEMORY
            // ROOMS

            if (Memory.rooms[curr_room.name] == undefined){
                Memory.rooms[curr_room.name] = {}
            }
        // MEMORY
            // ROOMS
                // 'W331SW'

                if (Memory.rooms[curr_room.name]['updateCount'] == undefined){
                    Memory.rooms[curr_room.name]['updateCount'] = 0;
                }
        // MEMORY
            // ROOMS
                // 'W331SW'
                    // Creep Info
                if (Memory.rooms[curr_room.name]['creepInfo'] == undefined){
                    Memory.rooms[curr_room.name]['creepInfo'] = {}
                }
        // MEMORY
            // ROOMS
                // 'W331SW'
                    // Creep Info
                        // currentCreepByRole

                    if (Memory.rooms[curr_room.name]['creepInfo']['currentCreepByRole'] == undefined){
                        Memory.rooms[curr_room.name]['creepInfo']['currentCreepByRole']  = {}
                    }

        // MEMORY
            // ROOMS
                // 'W331SW'
                    // Creep Info
                        // currentCreepByRole
                            // Harvester: 0
                            const creepTypes_array = ['Harvester', 'Upgrader', 'Builder', 'Repairer', 'Energizer',
                                'Towerer', 'WarriorMelee2', 'LongDistanceHarvester', 'LongDistanceUpgraders',
                                'Waller', 'WarriorMelee1', 'Expander','LongDistanceBuilder', 'CannonFodder',
                                'Storer', 'Transferer', 'smallTransferer'];

                            const currentCreepByRole = Memory.rooms[curr_room.name]['creepInfo']['currentCreepByRole'];
                            for (let creepType in creepTypes_array){
                                const creepStr =  creepTypes_array[creepType];
                                currentCreepByRole[creepStr]  = _.sum(creep_list, (c) => c.memory.role == creepStr);
                            }



    }
};
