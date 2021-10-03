function printSmallestNumber(array){
    const result = array.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(' '));
}

printSmallestNumber([30, 15, 50, 5]);
printSmallestNumber([3, 0, 10, 4, 7, 3]);