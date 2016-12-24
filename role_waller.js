module.exports = {
    run: function (creep) {

        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);
        require('function_fortify_walls').run(creep);

        }
    };