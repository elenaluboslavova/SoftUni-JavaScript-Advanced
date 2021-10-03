function computeGreatestDivisor(num1, num2){
    for(let i = Math.min(num1, num2); i > 0; i--){
        if(num1 % i == 0 && num2 % i == 0){
            console.log(i);
            return;
        }
    }
}

computeGreatestDivisor(15,5);
computeGreatestDivisor(2154, 458);