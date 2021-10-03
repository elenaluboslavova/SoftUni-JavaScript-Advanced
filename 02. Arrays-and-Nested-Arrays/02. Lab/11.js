function checkNeighbors(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        for (let k = 0; k < currentRow.length; k++) {
            let currentHouse = currentRow[k];
            if (currentHouse == matrix[i][k - 1]) {
                counter++;
            }
            if(currentHouse == matrix[i][k+1]){
                counter++;
            }
            if(currentHouse == matrix[i+1][k]){
                counter++;
            }
            if(currentHouse == matrix[i-1][k]){
                counter++;
            }
        }
    }

    return counter;
}

console.log(checkNeighbors([['2', '3', '4', '7', '0'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '3', '5', '4', '2'],
                            ['9', '8', '7', '5', '4']]));