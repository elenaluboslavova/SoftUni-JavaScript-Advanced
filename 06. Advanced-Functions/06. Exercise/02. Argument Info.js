function solve(...array){
    let dictionary = {};
    array = Array.from(array);
    for(let element of array){
        let type = typeof element;
        if(dictionary[type] == undefined){
            dictionary[type] = [];
        }
        dictionary[`${type}`].push(element);
    }

    for(let key in dictionary){
        for(let i = 0; i < dictionary[key].length; i++){
            console.log(`${key}: ${dictionary[key][i]}`);
        }
    }

    for(let key in dictionary){
        console.log(`${key} = ${dictionary[key].length}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999);