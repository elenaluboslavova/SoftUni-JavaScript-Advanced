function townsToJSON(inputArray) {
    const cols = [];
    const columns = inputArray[0].split('|');
    for(let c of columns){
        if(c){
            cols.push(c.trimStart().trimEnd());
        }
    }
    const town = cols[0];
    const latitude = Number[cols[1]];
    const longitude = Number[cols[2]];

    const towns = [];
    for(let i = 1; i < inputArray.length; i++){
        let line = inputArray[i].split('|');
        let data = [];
        for(let l of line){
            if(l){
                data.push(l);
            }
        }
        let currentTown = {Town:data[0].trimStart().trimEnd(), 
                        Latitude:Number(Number(data[1].trimStart().trimEnd()).toFixed(2)), 
                        Longitude:Number(Number(data[2].trimStart().trimEnd()).toFixed(2))};
        towns.push(currentTown);
    }
    return JSON.stringify(towns);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));