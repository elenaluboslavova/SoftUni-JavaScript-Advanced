function diagonalAttack(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let numbers = currentRow.split(' ').map(x => Number(x));

        for (let k = 0; k < numbers.length; k++) {
            if (i == k) {
                leftDiagonalSum += Number(numbers[k]);
            }
            if (i + k == numbers.length - 1) {
                rightDiagonalSum += Number(numbers[k]);
            }
        }
    }

    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let numbers = currentRow.split(' ').map(x => Number(x));

        if (leftDiagonalSum == rightDiagonalSum) {
            for (let k = 0; k < numbers.length; k++) {
                let isInLeft = i == k;
                let isInRight = i + k == matrix.length - 1;
                if (!isInLeft && !isInRight) {
                    numbers[k] = leftDiagonalSum;
                }
            }
        }
        result.push(numbers.join(' '));
    }

    console.log(result.join('\n'));
}

// diagonalAttack(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);