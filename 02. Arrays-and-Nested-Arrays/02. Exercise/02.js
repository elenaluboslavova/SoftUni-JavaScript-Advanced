function print(array, step){
    let result= [];
    for(let i = 0; i< array.length; i+= step){
        result.push(array[i]);
    }
    return result;
}

console.log(print(['5', 
'20', 
'31', 
'4', 
'20'], 
2));

console.log(print(['dsa',
'asd', 
'test', 
'tset'], 
2));