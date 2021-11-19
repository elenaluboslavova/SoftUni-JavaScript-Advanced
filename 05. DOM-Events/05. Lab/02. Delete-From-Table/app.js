function deleteByEmail() {
    let emailToDelete = document.getElementsByName('email')[0].value;

    let rows = document.querySelectorAll('table tbody tr td');
    let result = document.getElementById('result');
    let isDeleted = false;

    for(let row of Array.from(rows)) {
        if(row.textContent == emailToDelete){
            row.parentElement.parentElement.removeChild(row.parentElement);
            result.textContent = 'Deleted.';
            isDeleted = true;
        }
    }
    if(!isDeleted){
        result.textContent = 'Not found.';
    }
}