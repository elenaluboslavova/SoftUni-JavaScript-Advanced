function orderInput(array) {
    const result = array.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    });

    console.log(result.join('\n'))
}

orderInput(['alpha',
    'beta',
    'gamma']);