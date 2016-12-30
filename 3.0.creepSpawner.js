module.exports = {
    run: function (curr_spawn, creep_list, current_spawn_level) {
        const curr_room = curr_spawn.room;
        const spaces = "    ";
        
        // All Creep Types
        let min_number_transferer = 0;
        let min_number_storer = 0;
        let min_number_repairers = 0;
        let min_number_harvesters = 3;
        let min_number_long_distance_harvesters = 0;
        let min_number_energizers = 0;
        let min_number_towerers = 0;
        let min_number_upgraders = 4;
        let min_number_builders = 0;
        let min_number_warriors = 0;
        let min_number_expanders = 0;
        let min_number_long_distance_upgraders = 0;
        let min_number_wallers = 0;
        let min_number_warriors1 = 0;
        let min_number_long_distance_builders = 0;
        let min_number_cannon_fodder = 0;
        let min_number_small_transferer = 2;
        
        if (current_spawn_level == 1) {
            min_number_transferer = 0;
            min_number_storer = 0;
            min_number_repairers = 0;
            min_number_harvesters = 3;
            min_number_long_distance_harvesters = 0;
            min_number_energizers = 0;
            min_number_towerers = 0;
            min_number_upgraders = 4;
            min_number_builders = 0;
            min_number_warriors = 0;
            min_number_expanders = 0;
            min_number_long_distance_upgraders = 0;
            min_number_wallers = 0;
            min_number_warriors1 = 0;
            min_number_long_distance_builders = 0;
        }
        else if (current_spawn_level == 2) {
             min_number_transferer = 0;
             min_number_storer = 0;
             min_number_repairers = 1;
             min_number_harvesters = 3;
             min_number_long_distance_harvesters = 0;
             min_number_energizers = 0;
             min_number_towerers = 0;
             min_number_upgraders = 2;
             min_number_builders = 3;
             min_number_warriors = 0;
             min_number_expanders = 0;
             min_number_long_distance_upgraders = 0;
             min_number_wallers = 1;
             min_number_warriors1 = 0;
             min_number_long_distance_builders = 0;
        }
        else if (current_spawn_level == 3) {
             min_number_transferer = 0;
             min_number_storer = 0;
             min_number_repairers = 1;
             min_number_harvesters = 3;
             min_number_long_distance_harvesters = 0;
             min_number_energizers = 0;
             min_number_towerers = 0;
             min_number_upgraders = 1;
             min_number_builders = 2;
             min_number_warriors = 0;
             min_number_expanders = 0;
             min_number_long_distance_upgraders = 0;
             min_number_wallers = 2;
             min_number_warriors1 = 0;
             min_number_long_distance_builders = 0;
        }
        else if (current_spawn_level == 4) {
             min_number_transferer = 0;
             min_number_storer = 0;
             min_number_repairers = 1;
             min_number_harvesters = 3;
             min_number_long_distance_harvesters = 0;
             min_number_energizers = 0;
             min_number_towerers = 0;
             min_number_upgraders = 1;
             min_number_builders = 2;
             min_number_warriors = 0;
             min_number_expanders = 0;
             min_number_long_distance_upgraders = 0;
             min_number_wallers = 2;
             min_number_warriors1 = 0;
             min_number_long_distance_builders = 0;
        }
        else { // if (current_spawn_level == 5)
             min_number_transferer = 1;
             min_number_storer = 3;
             min_number_repairers = 1;
             min_number_harvesters = 0;
             min_number_long_distance_harvesters = 0;
             min_number_energizers = 0;
             min_number_towerers = 0;
             min_number_upgraders = 0;
             min_number_builders = 1;
             min_number_warriors = 0;
             min_number_expanders = 0;
             min_number_long_distance_upgraders = 0;
             min_number_wallers = 1;
             min_number_warriors1 = 0;
             min_number_long_distance_builders = 0;
        }

        let custom_design = false;

        custom_design = false;
        if (curr_spawn.name == 'Spawn1' && custom_design) {
             min_number_cannon_fodder = 0;
             min_number_warriors1 = 0;
             min_number_upgraders = 1;
             min_number_harvesters = 0;
             min_number_storer = 3;
             min_number_transferer = 1;
        }
        custom_design = true;
        if (curr_spawn.name == 'Spawn2' && custom_design) {
             min_number_repairers = 1;
             min_number_harvesters = 0;
             min_number_long_distance_harvesters = 4;
             min_number_energizers = 0;
             min_number_towerers = 0;
             min_number_upgraders = 1;
             min_number_builders = 1;
             min_number_warriors = 0;
             min_number_expanders = 0;
             min_number_long_distance_upgraders = 0;
             min_number_wallers = 1;
             min_number_warriors1 = 0;
             min_number_long_distance_builders = 0;
             min_number_storer = 2;
             min_number_transferer = 1;
        }

        const countCreepByRole = true;
        if (countCreepByRole) {
            var current_number_of_harvesters = _.sum(creep_list, (c) => c.memory.role == 'Harvester');
            var current_number_of_upgraders = _.sum(creep_list, (c) => c.memory.role == 'Upgrader');
            var current_number_of_builders = _.sum(creep_list, (c) => c.memory.role == 'Builder');
            var current_number_of_repairers = _.sum(creep_list, (c) => c.memory.role == 'Repairer');
            var current_number_of_energizers = _.sum(creep_list, (c) => c.memory.role == 'Energizer');
            var current_number_of_towerers = _.sum(creep_list, (c) => c.memory.role == 'Towerer');
            var current_number_of_warriors = _.sum(Game.creeps, (c) => c.memory.role == 'WarriorMelee2');
            var current_number_of_long_distance_harvesters = _.sum(Game.creeps, (c) => c.memory.role == 'LongDistanceHarvester');
            var current_number_of_long_distance_upgraders = _.sum(Game.creeps, (c) => c.memory.role == 'LongDistanceUpgraders');
            var current_number_of_wallers = _.sum(creep_list, (c) => c.memory.role == 'Waller' || c.memory.role == 'waller');
            var current_number_of_warriors1 = _.sum(Game.creeps, (c) => c.memory.role == 'WarriorMelee1');
            var current_number_of_expanders = _.sum(Game.creeps, (c) => c.memory.role == 'Expander');
            var current_number_of_long_distance_builders = _.sum(Game.creeps, (c) => c.memory.role == 'LongDistanceBuilder');
            var current_number_of_cannon_fodder = _.sum(creep_list, (c) => c.memory.role == 'CannonFodder');
            var current_number_of_storer = _.sum(creep_list, (c) => c.memory.role == 'Storer');
            var current_number_of_transferer = _.sum(creep_list, (c) => c.memory.role == 'Transferer');
            var current_number_of_smalltransferer = _.sum(creep_list, (c) => c.memory.role == 'smallTransferer');
        }
        let energy = curr_spawn.room.energyCapacityAvailable;
        if (energy > 1000) {
            energy = 1000
        }
        let avail_energy = curr_spawn.room.energyAvailable;


        const consoleSpawnInfo = true;



        if (consoleSpawnInfo) {
            var creep_count_txt = 'Current Count => ';
            creep_count_txt += 'Harvesters: ' + current_number_of_harvesters + " || ";
            creep_count_txt += 'Energizers: ' + current_number_of_energizers + " || ";
            creep_count_txt += 'Builders: ' + current_number_of_builders + " || ";
            creep_count_txt += 'Repairers: ' + current_number_of_repairers + " || ";
            creep_count_txt += 'Upgraders: ' + current_number_of_upgraders + " || ";
            creep_count_txt += 'Warriors: ' + current_number_of_warriors + " || ";
            creep_count_txt += 'LDHarvesters: ' + current_number_of_long_distance_harvesters + " || ";
            creep_count_txt += 'LDUpgraders: ' + current_number_of_long_distance_upgraders + " || ";
            creep_count_txt += 'LDBuilders: ' + current_number_of_long_distance_builders + " || ";
            creep_count_txt += 'Wallers: ' + current_number_of_wallers + " || ";
            creep_count_txt += 'Warriors1: ' + current_number_of_warriors1 + " || ";
            creep_count_txt += 'Expander: ' + current_number_of_expanders + " || ";
            creep_count_txt += 'Storer: ' + current_number_of_storer + " || ";
            creep_count_txt += 'transferer: ' + current_number_of_transferer + " || ";

            var ideal_count_text = 'Ideal Count   => ';
            ideal_count_text += 'Harvesters: ' + min_number_harvesters + " || ";
            ideal_count_text += 'Energizers: ' + min_number_energizers + " || ";
            ideal_count_text += 'Builders: ' + min_number_builders + " || ";
            ideal_count_text += 'Repairers: ' + min_number_repairers + " || ";
            ideal_count_text += 'Upgraders: ' + min_number_upgraders + " || ";
            ideal_count_text += 'Warriors: ' + min_number_warriors + " || ";
            ideal_count_text += 'LDHarvesters: ' + min_number_long_distance_harvesters + " || ";
            ideal_count_text += 'LDUpgraders: ' + min_number_long_distance_upgraders + " || ";
            ideal_count_text += 'LDBuilders: ' + min_number_long_distance_builders + " || ";
            ideal_count_text += 'Wallers: ' + min_number_wallers + " || ";
            ideal_count_text += 'Warriors1: ' + min_number_warriors1 + " || ";
            ideal_count_text += 'Expander: ' + min_number_expanders + " || ";
            ideal_count_text += 'Storer: ' + min_number_storer + " || ";
            ideal_count_text += 'transferer: ' + min_number_expanders + " || ";


            // OUTPUT MESSAGE HERE
            var total_creep_in_room = _.sum(creep_list, (c) => c != undefined);
            const spaces = "    ";
            console.log(spaces + spaces + spaces + "03_creep_spawner.js");
            console.log(spaces + spaces + spaces + spaces + "Current Spawn: " + curr_spawn +
            " || Energy Capacity: " + curr_spawn.room.energyCapacityAvailable +
            " || Current Energy: " + avail_energy);
            console.log(spaces + spaces + spaces + spaces + spaces + "Current Room: " + curr_spawn.room);
            console.log(spaces + spaces + spaces + spaces + spaces + "Controller: " + curr_spawn.room.controller +
                "  ||  Controller Level: " + curr_spawn.room.controller.level +
                "  ||  Progress: " + curr_spawn.room.controller.progress +
                "  ||  Total Needed: " + curr_spawn.room.controller.progressTotal +
                "  ||  Percentage: " + Math.round(curr_spawn.room.controller.progress / curr_spawn.room.controller.progressTotal * 100) + "%"
            );
            console.log(spaces + spaces + spaces + spaces + spaces + 'Storage Energy: ' + curr_spawn.room.storage.store[RESOURCE_ENERGY]) +
                        ' || Percentage Filled: ' +
                        Math.round(curr_spawn.room.storage.store[RESOURCE_ENERGY]/ curr_spawn.room.storage.storeCapacity* 100) + '%'
            //require('function_print_structure_count').run(curr_spawn, (spaces + spaces + spaces + spaces + spaces));
            console.log(spaces + spaces + spaces + spaces + spaces + "Total creep in room: " + total_creep_in_room);
            console.log(spaces + spaces + spaces + spaces + spaces +  creep_count_txt);
            console.log(spaces + spaces + spaces + spaces + spaces + ideal_count_text);
        }


        const spawnTurnedOn = true;
        if (spawnTurnedOn) {
            if (current_number_of_harvesters < min_number_harvesters) {
                let energyForCreep = energy;
                let body_parts_list = require('createBalancedCreep').run(energyForCreep);


                while ((curr_spawn.canCreateCreep(body_parts_list, undefined) != OK) && (energyForCreep > 50)) {
                    energyForCreep = energyForCreep - 50;
                    body_parts_list = require('createBalancedCreep').run(energyForCreep);
                }

                console.log(spaces + spaces + spaces + spaces + spaces + "Need more harvesters. Will create with energy: " + energyForCreep + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);

                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Harvester',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_upgraders < min_number_upgraders) {
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more upgraders. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Upgrader',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });


            }
            else if (current_number_of_transferer < min_number_transferer) {

                let energyForCreep = energy;
                let transfererBodyParts = require('createBalancedTransferCreep').run(energyForCreep);

                const noTransferers = current_number_of_transferer == 0;
                if (noTransferers){
                    while ((curr_spawn.canCreateCreep(transfererBodyParts, undefined) != OK) && (energyForCreep > 50)) {
                        energyForCreep = energyForCreep - 50;
                        transfererBodyParts = require('createBalancedTransferCreep').run(energyForCreep);
                    }
                    if (energyForCreep > 700){
                        console.log(spaces + spaces + spaces + spaces + spaces + "Need more Transferer. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                        console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + transfererBodyParts);
                        curr_spawn.createCreep(transfererBodyParts, undefined, {
                            role: 'Transferer',
                            working: false,
                            home_room: curr_spawn.room.name,
                            home_spawn: curr_spawn,
                            homeRoomLevel: current_spawn_level
                        });
                    }
                    else if (current_number_of_smalltransferer < min_number_small_transferer) {
                        console.log(spaces + spaces + spaces + spaces + spaces + "Need more smallTransferer. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                        console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + transfererBodyParts);
                        curr_spawn.createCreep([MOVE, CARRY], undefined, {
                            role: 'smallTransferer',
                            working: false,
                            home_room: curr_spawn.room.name,
                            home_spawn: curr_spawn,
                            homeRoomLevel: current_spawn_level
                        });
                    }
                }
                else {
                    console.log(spaces + spaces + spaces + spaces + spaces + "Need more Transferer. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                    console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + transfererBodyParts);
                    curr_spawn.createCreep(transfererBodyParts, undefined, {
                        role: 'Transferer',
                        working: false,
                        home_room: curr_spawn.room.name,
                        home_spawn: curr_spawn,
                        homeRoomLevel: current_spawn_level
                    });

                }




            }
            else if (current_number_of_storer < min_number_storer) {
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more Storers. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Storer',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });
            }
            else if (current_number_of_warriors1 < min_number_warriors1) {
                let body_parts_list_MW1 = require('createBalancedMeleeWarrior').run(energy);
                body_parts_list_MW1 = Memory.warrior1Parts;
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more warriors1. Will create with energy: depends " + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + Memory.warrior1Parts);
                curr_spawn.createCreep(Memory.warrior1Parts, undefined, {
                    role: 'WarriorMelee1',
                    working: false,
                    target_room: 'W31S76',
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });
            }
            else if (current_number_of_warriors < min_number_warriors) {
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more warrior2. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list_MW1);


                curr_spawn.createCreep(body_parts_list_MW1, undefined, {
                    role: 'WarriorMelee2',
                    working: false,
                    target_room: 'W32S77',
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_builders < min_number_builders) {
                if (energy > 700){
                    energy = 700
                }
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more builders. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Builder',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });


            }
            else if (current_number_of_long_distance_builders < min_number_long_distance_builders) {
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more Long Distance Builders. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                let rooms_array = ['W33S77', 'W32S77', 'W31S77'];
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'LongDistanceBuilder',
                    working: false,
                    home_room: curr_spawn.room.name,
                    target_rooms: rooms_array,
                    target_room: false,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_long_distance_harvesters < min_number_long_distance_harvesters) {
                let energyForCreep = energy;
                let body_parts_list = require('createBalancedCreep').run(energyForCreep);
                var targetRoom = require('3.3.determineTargetRoom').run(curr_room, creep_list);

                console.log(spaces + spaces + spaces + spaces + spaces + "Need more Long Distance Harvester, target: " + targetRoom + ". Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'LongDistanceHarvester',
                    working: false,
                    target_room: targetRoom,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });


            }
            else if (current_number_of_long_distance_upgraders < min_number_long_distance_upgraders) {
                let body_parts_list = require('createBalancedCreep').run(energy);

                console.log(spaces + spaces + spaces + spaces + spaces + "Need more Long Distance Upgraders. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'LongDistanceUpgrader',
                    working: false,
                    target_room: Game.rooms['W32S77'],
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_energizers < min_number_energizers) {
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more energizers. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Energizer',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level

                });

            }
            else if (current_number_of_towerers < min_number_towerers) {
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more towerers. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Towerer',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_repairers < min_number_repairers) {
                if (energy > 700){
                    energy = 700
                }
                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more repairers. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Repairer',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_wallers < min_number_wallers) {
                if (energy > 700){
                    energy = 700
                }

                let body_parts_list = require('createBalancedCreep').run(energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more wallers. Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + body_parts_list);
                curr_spawn.createCreep(body_parts_list, undefined, {
                    role: 'Waller',
                    working: false,
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });
            }
            else if (current_number_of_expanders < min_number_expanders) {
                let body_parts_list_expander = require('createFastestExpander').run(energy); // [CLAIM, MOVE, MOVE, MOVE, MOVE]

                console.log(spaces + spaces + spaces + spaces + spaces + "Need more expander. Will create with energy: Undefined" + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + [CLAIM, MOVE]);


                curr_spawn.createCreep(body_parts_list_expander, undefined, {
                    role: 'Expander',
                    working: false,
                    target_room: 'W78N73',
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });

            }
            else if (current_number_of_cannon_fodder < min_number_cannon_fodder) {
                console.log(spaces + spaces + spaces + spaces + spaces + "Need more CannonFodder. Will create with energy: " + 50 + ", Current Available energy: " + avail_energy);
                console.log(spaces + spaces + spaces + spaces + spaces + "Creep will contain body parts: " + [MOVE]);


                curr_spawn.createCreep([MOVE], undefined, {
                    role: 'CannonFodder',
                    working: false,
                    target_room: 'W31S76',
                    home_room: curr_spawn.room.name,
                    home_spawn: curr_spawn,
                    homeRoomLevel: current_spawn_level
                });
            }
        }

    }
};
