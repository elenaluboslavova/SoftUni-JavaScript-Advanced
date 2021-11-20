function solve() {
    let name;
    let hall;
    let ticketPrice;
    let ul = document.querySelector('#movies ul');
    document.querySelector('#container button').addEventListener('click', addOnScreen);
    document.querySelector('#archive button').addEventListener('click', deleteAllLi);

    function addOnScreen(e) {
        e.preventDefault();
        name = document.querySelector('input[placeholder="Name"').value;
        hall = document.querySelector('input[placeholder="Hall"').value;
        ticketPrice = Number(document.querySelector('input[placeholder="Ticket Price"').value);
        let isValid = name !== '' && hall !== '' && ticketPrice !== '' && !isNaN(ticketPrice);
        if (isValid) {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = name;
            li.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall}`;
            li.appendChild(strong);

            let div = document.createElement('div');
            let strong2 = document.createElement('strong');
            strong2.textContent = ticketPrice.toFixed(2);
            div.appendChild(strong2);

            let input = document.createElement('input');
            input.placeholder = 'Tickets sold';
            div.appendChild(input);

            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', archive);
            div.appendChild(button);

            li.appendChild(div);

            ul.appendChild(li);

            document.querySelector('input[placeholder="Name"').value = '';
            document.querySelector('input[placeholder="Hall"').value = '';
            document.querySelector('input[placeholder="Ticket Price"').value = '';
        }
    }

    function archive(e) {
        e.preventDefault();
        let value = e.target.parentElement.querySelector('input').value;
        if (value !== '' && !isNaN(value)) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            let name = e.target.parentNode.parentNode.querySelector('span').textContent;
            span.textContent = name;
            li.appendChild(span);

            let totalAmount = Number(value) * Number(e.target.parentNode.querySelector('strong').textContent);
            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${totalAmount}`;
            li.appendChild(strong);

            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', deleteLi);
            li.appendChild(button);
            document.querySelector('#archive ul').appendChild(li);
            console.log(li.children);
            e.target.parentNode.querySelector('input').value = '';
        }
    }

    function deleteLi(e) {
        e.preventDefault();
        let li = e.target.parentNode;
        document.querySelector('#archive ul').removeChild(li);
    }

    function deleteAllLi(e){
        e.preventDefault();
        let ul = e.target.parentNode.querySelector('ul');
        while(ul.childNodes.length > 0){
            ul.removeChild(ul.childNodes[0]);
        }
    }
}