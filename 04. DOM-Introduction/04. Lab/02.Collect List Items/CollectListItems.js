function extractText() {
    let items = document.querySelectorAll("ul#items li");
    let result = '';
    for(let item of items){
        result+= item.textContent;
        result+='\n';
    }
    document.getElementById('result').textContent = result;
}