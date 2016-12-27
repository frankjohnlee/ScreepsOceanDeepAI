module.exports = {

    run: function(){
        console.log("===================================================================================== START =================================================================");
        var spaces = "    ";
        console.log("0_main.js");
        console.log(spaces + "CPU Usage: " + Game.cpu.tickLimit);
        console.log(spaces + "Global Control Level: " + Game.gcl.level);
        console.log(spaces +
            "Global Control Progress: " + Game.gcl.progress +
            "  ||  Total Needed: " + Math.round(Game.gcl.progressTotal) +
            "  ||  Percentage: " + Math.round(Game.gcl.progress/Game.gcl.progressTotal * 100) + "%"
        );
        var hours = Math.round(Game.time/60/60/60);
        var days = Math.round(hours/24);
        console.log(spaces + "Game Time: " + hours  + " hrs" + "  ||  day: " + days );

        require('garbage_cleanup').run();
        require('1.0.tasker').run();
        require('2.0.spawnController').run();

        if (Memory.attackBool == undefined) {
            Memory.attackBool = false;
        }
        Memory.attackBool = true;
        //if (Memory.warrior1Parts == undefined) {
        //    Memory.warrior1Parts = [ATTACK, MOVE];
        //}
        //
        //if (Game.creeps.John.ticksToLive == 400){
        //    Memory.attackBool = true;}
        //else{
        //    Memory.attackBool = false;
        //}
        //Memory.attackBool = true;
        //
        //
        //Memory.warrior1Parts = [MOVE, ATTACK];










        //require('auto.room.initialise').run();
        //Game.user.attack_targets = true;

        /*
        Frank's Coding Log

        Issues to solve
        (1) fix issue with warrior1 seems like the problem is in function_go_to_room.js
        (2) issue with construction site. Posted on Reddit to ask about it
        https://www.reddit.com/r/screeps/comments/5j91t2/trouble_filtering_construction_sites/

        Sunday Dec 25, 2016
        How to run per a certain amount of ticks
         oh... simple math... well... modulo will give the result of a devision... the... ah... how its called in english.. decimal places
         10 % 2 == 0 because 10 / 2 = 5 with no decimal places


        Monday December 19, 2016
        - Currently have an issue with my warrior1, seems like the problem is in function_go_to_room.js
        - Also issue with construction site. Posted on Reddit to ask about it https://www.reddit.com/r/screeps/comments/5j91t2/trouble_filtering_construction_sites/
        */ ////
    }
};
