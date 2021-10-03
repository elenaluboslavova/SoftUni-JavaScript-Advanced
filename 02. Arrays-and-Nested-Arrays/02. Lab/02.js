function generateSequence(n, k){
    let result = [];

    result.push(1);
    for(let i = 0; i < n - 1; i++){
        let next = 0;
        for(let m = 0; m < k; m++){
            if(m >= result.length){
                continue;
            }
            next += result[result.length - 1 - m];
        }
        result.push(next);
    }

    return result;
}

console.log(generateSequence(6, 3));
console.log(generateSequence(8, 2));