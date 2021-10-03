function solve(array){
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i+1]){
            array.splice(i+1, 1);
            i--;
        }
    }
    return array;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));