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
        require('01_tasker').run();
        require('02_spawn_controller').run();






        //require('auto.room.initialise').run();
        //Game.user.attack_targets = true;

        /*
        Frank's Coding Log

        Issues to solve
        (1) fix issue with warrior1 seems like the problem is in function_go_to_room.js
        (2) issue with construction site. Posted on Reddit to ask about it
        https://www.reddit.com/r/screeps/comments/5j91t2/trouble_filtering_construction_sites/

        Monday December 19, 2016
        - Currently have an issue with my warrior1, seems like the problem is in function_go_to_room.js
        - Also issue with construction site. Posted on Reddit to ask about it https://www.reddit.com/r/screeps/comments/5j91t2/trouble_filtering_construction_sites/
        */ ////
    }
};
