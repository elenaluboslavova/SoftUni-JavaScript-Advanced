function printDays(input1, input2){
    let month = Number(input1);
    let year = Number(input2);
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}

printDays(2, 2021);