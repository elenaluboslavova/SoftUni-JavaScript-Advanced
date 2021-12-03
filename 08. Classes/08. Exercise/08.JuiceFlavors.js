function produceJuice(juiceArray){
    let juiceBottles = {};
    let result = {};
    for(let i = 0; i < juiceArray.length; i++){
        let juiceType = juiceArray[i].split(' => ')[0];
        let juiceQty = Number(juiceArray[i].split(' => ')[1]);
        if(juiceBottles[juiceType] == undefined){
            juiceBottles[juiceType] = 0;
        }
        juiceBottles[juiceType] += juiceQty;
        if(juiceBottles[juiceType] > 1000){
            if(result[juiceType] == undefined){
                result[juiceType] = 0;
            }
            result[juiceType] += Math.floor(juiceBottles[juiceType] / 1000);
            juiceBottles[juiceType] -= Math.floor(juiceBottles[juiceType] / 1000) * 1000;
        }
    }
    for(let juice in result){
        console.log(`${juice} => ${result[juice]}`);
    }
}

produceJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);