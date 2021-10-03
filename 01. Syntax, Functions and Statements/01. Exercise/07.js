function cooking(numberAsString, op1, op2, op3, op4, op5){
    let number = parseInt(numberAsString);
    let operations = new Array(op1, op2, op3, op4, op5);

    for(let i = 0; i < operations.length; i++){
        switch(operations[i]){
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
        }
        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');