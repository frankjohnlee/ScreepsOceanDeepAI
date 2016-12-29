module.exports = {
    run: function(){
        const creepTypes_array = ['Harvester', 'Upgrader', 'Builder', 'Repairer', 'Energizer',
            'Towerer', 'WarriorMelee2', 'LongDistanceHarvester', 'LongDistanceUpgraders',
            'Waller', 'WarriorMelee1', 'Expander','LongDistanceBuilder', 'CannonFodder',
            'Storer', 'Transferer', 'smallTransferer'];

        if (Memory['globalConstants'] == undefined) {
            Memory['globalConstants'] = {};
        }

        if (Memory['globalConstants']['creepTypes'] != creepTypes_array){
            Memory['globalConstants']['creepTypes'] = creepTypes_array
        }







    }
};
