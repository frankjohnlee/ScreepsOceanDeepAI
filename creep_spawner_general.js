module.exports = {
    run: function (curr_room,
                   body_parts_list,
                   energy,
                   avail_energy,
                   name,
                   role,
                   working,
                   target_room) {
        console.log('                creep_spawner_general.js');
        console.log("                    Need more + " + role + ". Will create with energy: " + energy + ", Current Available energy: " + avail_energy);
        console.log("                    Creep will contain body parts: " + body_parts_list);

        var spawn = require('creep_spawner_get_avail_spanws').run(curr_room, body_parts_list);
        if (spawn != undefined) {
            creep = Game.spawns[spawn_name].createCreep(body_parts_list, name, {
                role: role,
                working: working,
                target_room: target_room,
                home_room: home_room

            });
            console.log("                    successfully spawned")
        }
        else {
            console.log("                    no spawns are availabile at this moment")
        }




    }
};