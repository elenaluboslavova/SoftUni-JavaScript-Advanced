function printSquareOfStars(size = 5){
    let line = '';
    for(let i = 1; i <= size; i++){
        line = '';
        for(let k = 1; k <= size; k++){
            line += '* ';
        }
        console.log(line);
    }
}

printSquareOfStars();