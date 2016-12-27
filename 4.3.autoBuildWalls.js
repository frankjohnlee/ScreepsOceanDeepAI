/**
 * Created by Frank2 on 12/10/2016.
 */
module.exports = {

    run: function(curr_room) {
        require('auto_build_walls_left').run(curr_room);
        require('auto_build_walls_right').run(curr_room);
        require('auto_build_walls_bottom').run(curr_room);
        require('auto_build_walls_top').run(curr_room);

    }
};
