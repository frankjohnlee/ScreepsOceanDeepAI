module.exports = {
    run: function(){

        // Creep Types
        const creepTypesMemory = true;
        if (creepTypesMemory){
            const creepTypes_array = ['Harvester', 'Upgrader', 'Builder', 'Repairer', 'Energizer',
                'Towerer', 'WarriorMelee2', 'LongDistanceHarvester', 'LongDistanceUpgraders',
                'Waller', 'WarriorMelee1', 'Expander','LongDistanceBuilder', 'CannonFodder',
                'Storer', 'Transferer', 'smallTransferer'];
            if (Memory['globalConstants'] == undefined) {
                Memory['globalConstants'] = {}
            }
            if (Memory['globalConstants']['creepTypes'] != creepTypes_array){
                Memory['globalConstants']['creepTypes'] = creepTypes_array
            }
        }

        // Time Estimation
        if (Memory['timeEstimation'] == undefined) {
            Memory['timeEstimation'] = {};
        }

        else if (Memory['timeEstimation']['globalControl'] == undefined){
            Memory['timeEstimation']['globalControl'] = {}
        }


        // VARIABLE: COUNT
        if (Memory['timeEstimation']['globalControl']['count'] == undefined){
            Memory['timeEstimation']['globalControl']['count'] = 0
        }
        else if (Memory['timeEstimation']['globalControl']['count'] > 60){
            Memory['timeEstimation']['globalControl']['count'] = 0
        }
        else {
            Memory['timeEstimation']['globalControl']['count'] = Memory['timeEstimation']['globalControl']['count'] + 1
        }


        // VARIABLE: gclInititalValue
        if (Memory['timeEstimation']['globalControl']['gclInitialValue'] == undefined){
            Memory['timeEstimation']['globalControl']['gclInitialValue'] = Game.gcl.progress
        }
        else if (Memory['timeEstimation']['globalControl']['count'] == 0){
            Memory['timeEstimation']['globalControl']['gclInitialValue'] = Game.gcl.progress
        }

        // ARRAY: increaseIn60Ticks
        if (Memory['timeEstimation']['globalControl']['increaseIn60Ticks'] == undefined){
            Memory['timeEstimation']['globalControl']['increaseIn60Ticks'] = [];
        }
        else if (Memory['timeEstimation']['globalControl']['count'] == 60){
            var changeIn60Ticks = Game.gcl.progress - Memory['timeEstimation']['globalControl']['gclInitialValue'];
            Memory['timeEstimation']['globalControl']['increaseIn60Ticks'].push(changeIn60Ticks);
            Memory['timeEstimation']['globalControl']['avgChangePerTick'].push(changeIn60Ticks/60);
        }
        else if (Memory['timeEstimation']['globalControl']['increaseIn60Ticks'].length > 30){
            Memory['timeEstimation']['globalControl']['increaseIn60Ticks'].shift()
        }

        // ARRAY: avgChangePerTick
        if (Memory['timeEstimation']['globalControl']['avgChangePerTick'] == undefined){
            Memory['timeEstimation']['globalControl']['avgChangePerTick'] = [];
        }
        else if (Memory['timeEstimation']['globalControl']['avgChangePerTick'].length > 30){
            Memory['timeEstimation']['globalControl']['avgChangePerTick'].shift()
        }


        // Variable: projectedAvgChangePerTick
        if (Memory['timeEstimation']['globalControl']['projectedAvgChangePerTick'] == undefined){
            Memory['timeEstimation']['globalControl']['projectedAvgChangePerTick'] = 0;
        }
        else if (Memory['timeEstimation']['globalControl']['count'] == 0){
            var avgValue = 0;
            var avgChangePerTick = Memory['timeEstimation']['globalControl']['avgChangePerTick'];
            for (let i in avgChangePerTick){
                let changeNumber = avgChangePerTick[i];
                avgValue = avgValue + changeNumber;
            }
            avgValue = avgValue / avgChangePerTick.length
            Memory['timeEstimation']['globalControl']['projectedAvgChangePerTick'] = avgValue;
        }

        // Variable: ticksTillNextLevel
        if (Memory['timeEstimation']['globalControl']['ticksTillNextLevel'] == undefined){
            Memory['timeEstimation']['globalControl']['ticksTillNextLevel'] = 'dataError';
        }
        else if (Memory['timeEstimation']['globalControl']['count'] == 0 &&
                Memory['timeEstimation']['globalControl']['projectedAvgChangePerTick'] != 0){
            Memory['timeEstimation']['globalControl']['ticksTillNextLevel'] =
                Game.gcl.progressTotal / Memory['timeEstimation']['globalControl']['projectedAvgChangePerTick'];
        }


        // Variable: hoursTillNextLevel 3.45 second per tick
        if (Memory['timeEstimation']['globalControl']['hoursTillNextLevel'] == undefined){
            Memory['timeEstimation']['globalControl']['hoursTillNextLevel'] = 'dataError';
        }
        else if (Memory['timeEstimation']['globalControl']['count'] == 0 &&
            Memory['timeEstimation']['globalControl']['ticksTillNextLevel'] != 'dataError'){
            var seconds = Memory['timeEstimation']['globalControl']['ticksTillNextLevel']*3.50;
            var hours = seconds/60/60;
            hours = Math.round(hours);
            Memory['timeEstimation']['globalControl']['hoursTillNextLevel'] = hours
        }










        //    Global Control Progress: " + Game.gcl.progress +
        //    Total Needed: " + Math.round(Game.gcl.progressTotal) +
        //    Percentage: " + Math.round(Game.gcl.progress/Game.gcl.progressTotal * 100)
        //







    }
};
