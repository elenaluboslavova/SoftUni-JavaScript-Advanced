function findBiggestElement(inputArray){
    let middleArray = [];

    for (i = 0; i < inputArray.length; i++) {
        let middleMaxNumber = Math.max(...inputArray[i]);
        middleArray.push(middleMaxNumber);
    }

    let maxNumber = Math.max(...middleArray);
    return maxNumber;
}

console.log(findBiggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log(findBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));