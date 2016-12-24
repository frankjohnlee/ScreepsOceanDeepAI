module.exports = {
    run: function(kingdom_str, creep){
        /** Add a creep to the kingdom's memory

        @type kingdom_str: str
            Kingdom name
        @type creep: str
            Creep name to be added
        @rtype: null
        **/
        if(Memory.user.kingdom[kingdom_str] == null){
            console.log("Invalid kingdom name");
        }else if(Game.creeps[creep] == null){
            console.log("Invalid creep");
        }else{
            Memory.user.kingdom[kingdom_str].creep[creep] = {};
        }
    }
};
