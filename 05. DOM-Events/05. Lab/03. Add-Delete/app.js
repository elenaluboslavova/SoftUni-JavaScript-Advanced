function addItem() {
    let items = document.getElementById('items');
    let newItem = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = newItem;
    let a = document.createElement('a');
    let text = document.createTextNode('[Delete]');
    a.appendChild(text);
    a.href = '#';    
    a.addEventListener('click', removeItem);

    li.appendChild(a);
    items.appendChild(li);

    function removeItem(event) {
        let target = event.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
}