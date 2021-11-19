function encodeAndDecodeMessages() {
    document.getElementsByTagName('button')[0].addEventListener('click', encode);
    document.getElementsByTagName('button')[1].addEventListener('click', decode);

    function encode(event){
        let text = event.target.parentNode.querySelector('textarea').value;
        let newText = '';
        for (let i = 0; i < text.length; i++){
            newText += String.fromCharCode(text[i].charCodeAt(0)+1);
        }
        let secondTextArea = document.querySelector('div:nth-child(2) textarea');
        secondTextArea.textContent = newText;
        event.target.parentNode.querySelector('textarea').value = '';
    }

    function decode(event){
        let text = event.target.parentNode.querySelector('textarea').value;
        let newText = '';
        for (let i = 0; i < text.length; i++){
            newText += String.fromCharCode(text[i].charCodeAt(0)-1);
        }
        let secondTextArea = document.querySelector('div:nth-child(2) textarea');
        secondTextArea.textContent = newText;
    }
}