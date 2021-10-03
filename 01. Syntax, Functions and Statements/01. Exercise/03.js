function checkForSameNumber(number){
    let num = number.toString();
    let sum = 0;
    let isSame = true;

    for(let i = 1; i < num.length; i++){
        if(num[i] != num[i-1]){
            isSame = false;
        }
        sum += Number(num[i-1]);
    }
    sum += Number(num[num.length - 1]);
    console.log(isSame)
    console.log(sum);
}

checkForSameNumber(2222);