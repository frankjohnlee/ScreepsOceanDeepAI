module.exports = {
    run: function (creep) {
        var debug_module = false;
        creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);;

        if (creep.room.name == creep.memory.target_room){
            creep.moveTo(creep.room.controller);
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) { // try to transfer
                //creep.say("EXTakeRoom");
                creep.moveTo(creep.room.controller);
            }
            else { // otherwise transfer energy to spawn
                creep.say("EXTakeRoom");
                var claim_check = creep.claimController(creep.room.controller);

                if (claim_check != 0) {
                    var reserve_check = creep.reserveController(creep.room.controller);
                }
            }
        }
        else {
            require('function_go_to_room').run(creep, creep.memory.target_room);
        }

        if (debug_module == true){
            console.log("______________________________________________________________________________");

            var str_controller = 'Has not reached the room yet or is not created';
            if (claim_check == 0){
                str_controller = 'OK'
            }
            else if (claim_check == -4) {
                str_controller = 'Creep is still being spawned'
            }
            else if (claim_check == -7) {
                str_controller = 'The target is not a valid neutral controller object.'
            }
            else if (claim_check == -8) {
                str_controller = 'You cannot claim more than 3 rooms in the Novice Area.'
            }
            else if (claim_check == -9) {
                str_controller = 'The target is not a valid neutral controller object.'
            }
            else if (claim_check == -7) {
                str_controller = 'The target is too far away.'
            }
            else if (claim_check == -15) {
                str_controller = 'Your Global Control Level is not enough.'
            }



            console.log("Debuging: role_expander.js");
            console.log("creep.room.name: " + creep.room.name);
            console.log("Creep: " + creep);
            console.log("Claim Controller Status: " + str_controller);





            console.log("______________________________________________________________________________");
        }
    }
};

/*
 OK	0	The operation has been scheduled successfully.
 ERR_NOT_OWNER	-1	You are not the owner of this creep.
 ERR_BUSY	-4	The creep is still being spawned.
 ERR_INVALID_TARGET	-7	The target is not a valid neutral controller object.
 ERR_FULL	-8	You cannot claim more than 3 rooms in the Novice Area.
 ERR_NOT_IN_RANGE	-9	The target is too far away.
 ERR_NO_BODYPART	-12	There are no CLAIM body parts in this creep’s body.
 ERR_GCL_NOT_ENOUGH	-15	Your Global Control Level is not enough.
 */
