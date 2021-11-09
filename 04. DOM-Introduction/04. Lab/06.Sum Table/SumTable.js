function sumTable() {
    let table = document.querySelectorAll('table tr');
    let sum = 0;
    
    for(let i = 1; i < table.length; i++){
        sum += Number(table[i].lastChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}