function sortBiggerHalf(array){
    array.sort((a, b) => a - b);
    return array.slice(array.length / 2);
}

console.log(sortBiggerHalf([4, 7, 2, 5]));
console.log(sortBiggerHalf([3, 19, 14, 7, 2, 19, 6]));