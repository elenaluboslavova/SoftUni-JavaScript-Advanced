function isMatrixMagic(matrix) {
    let sumArray = [];

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let sum1 = 0;
        let sum2 = 0;
        for (let k = 0; k < currentRow.length; k++) {
            sum1 += currentRow[k];
            sum2 += matrix[k][i];
        }
        sumArray.push(sum1, sum2);
    }

    let isMagic = true;
    for (let i = 0; i < sumArray.length - 1; i++) {
        if (sumArray[i] != sumArray[i + 1]) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}

console.log(isMatrixMagic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));

console.log(isMatrixMagic([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));

console.log(isMatrixMagic([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));