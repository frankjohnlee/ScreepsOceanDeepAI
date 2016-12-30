module.exports = {
    run: function (creep) {
        //console.log('                    role_repairer.js');

        require('function_working_status').run(creep);
        require('function_working_false_then_mine').run(creep);

        if (creep.memory.working == true) { // If creep is currently set to working
            creep.say("rWorking");
            else {

                creep.say("rNoJobs");
                require('role_builder').run(creep);
            }
        }
    }
};
