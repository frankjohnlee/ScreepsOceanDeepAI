module.exports = {
    run: function (creep) {
        const debugModule = false;

        // CASE 1: WARRIORS ARE IN TARGET ROOM
        if (creep.room.name == creep.memory.target_room) {
            creep.moveTo(21, 15);

            //let target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
            //    filter: o => o.structureType === STRUCTURE_TOWER
            //});
            //if(!target) {
            //    target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            //}
            //if(!target) target = creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS);
            //if(!target) target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);
            //if(target){
            //    creep.moveTo(21, 15);
            //    var ret = creep.attack(target);
            //    if(ret === ERR_NOT_IN_RANGE){
            //        ret = creep.moveTo(target);
            //        console.log(creep, "moves to", target);
            //    }
            //    console.log(creep, "returns", ret);
            //}

        }

        // CASE 2: WARRIORS ARE IN HOME ROOM
        else
            if (creep.memory.home_room == creep.room.name) {
                const armySizeBeforeAttack = 99;
                const armySizeWhenAttacking = armySizeBeforeAttack + 1;
                const currentNumberOfWarriors1 = _.sum(Game.creeps, (c) => c.memory.role == 'WarriorMelee1');


                // IF THERE IS ENOUGH WARRIORS PRESENT THEN GO INTO ENEMY ROOM
                if (currentNumberOfWarriors1 > armySizeWhenAttacking) {
                    creep.say("ATTACK");
                    require('function_go_to_target_room').run(creep);
                    Memory.attackBool = true;
                }

                // IF THE ATTACK HAS BEGAN THEN JOIN THE BATTLE
                else if (Memory.attackBool){
                    require('function_go_to_target_room').run(creep);
                }

                // IF NOT THEN GATHER AT A SPECIFIC LOCATION
                else if (!Memory.attackBool) {
                    const locX = 17;
                    const locY = 4;
                    creep.moveTo(locX, locY);
                    //creep.say(currentNumberOfWarriors1 + " | " + armySizeWhenAttacking);
                }



            }

            if (debugModule) {
                console.log("______________________________________________________________________________");
                console.log("Debuging: role_warrior_melee_1.js");
                console.log("creep.room.name: " + creep.room.name);
                console.log("creep.room.name == 'W31S76': ");
                console.log(creep.room.name == 'W31S76');

                console.log("______________________________________________________________________________");
            }
        }

    };