module.exports = {
    run: function(kingdom_str){
        /** Initialise a kingdom object. Kingdom is accessed through
        Memory.user.kingdom[kingdom_str];

        @type kingdom_str: str
            Kingdom name
        @rtype: None
        **/

        if(Memory.user == null){
            Memory.user = {}
        }
        if(Memory.user.kingdom == null){
            Memory.user.kingdom = {}
        }

        if(Memory.user.kingdom[kingdom_str] == null){
            Memory.user.kingdom[kingdom_str] = {};
        }
        Memory.user.kingdom[kingdom_str].job = {};
        Memory.user.kingdom[kingdom_str].room = {};
        Memory.user.kingdom[kingdom_str].creep = {};

        return "Successfully initialised " + kingdom_str;
    }
};
