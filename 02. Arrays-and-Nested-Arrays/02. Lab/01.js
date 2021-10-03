function findEvenElements(array){
    let result = '';
    for(let i = 0; i< array.length; i += 2){
        result += `${array[i]} `;
    }
    console.log(result);
}

findEvenElements(['20', '30', '40', '50', '60']);