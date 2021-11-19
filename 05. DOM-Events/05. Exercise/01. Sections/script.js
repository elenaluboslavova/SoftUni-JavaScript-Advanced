function create(words) {
   let content = document.getElementById('content');

   for (let word of words){
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      let div = document.createElement('div');
      div.appendChild(p);
      div.addEventListener('click', () => {p.style.display = ''});
      content.appendChild(div);
   }
}