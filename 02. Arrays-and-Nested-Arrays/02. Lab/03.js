function sumFirstLast(array){
    let first = Number(array.shift());
    let second = Number(array.pop());
    return first + second;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));