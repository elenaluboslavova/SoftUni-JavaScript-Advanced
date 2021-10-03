function calculatePreviousDate(year, month, day){
    let dateString = year + '-' + month + '-' + day;
    let date = new Date(dateString);
    date.setDate(day-1);
    console.log(`${date.getFullYear()}-${Number(date.getMonth())+1}-${date.getDate()}`);
}

calculatePreviousDate(2016, 9, 30);
calculatePreviousDate(2016, 10, 1);