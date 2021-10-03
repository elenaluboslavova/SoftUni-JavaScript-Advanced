function processElements(array) {
    const result = [];

    for (let num of array) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}

processElements([7, -2, 8, 9]);
processElements([3, -2, 0, -1]);