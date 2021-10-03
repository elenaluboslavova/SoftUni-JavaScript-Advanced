function solve(array) {
    let currentNum = 0;
    let result = [];

    for (let input of array) {
        currentNum++;
        if (input == 'add') {
            result.push(currentNum);
        }
        else if (input == 'remove') {
            result.pop();
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }
}

// solve(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']);

solve(['remove',
    'remove',
    'remove']);