function solve() {
  document.querySelectorAll('#exercise button')[0].addEventListener('click', generate);

  function generate() {
    let list = document.querySelectorAll('#exercise textarea')[0].value;
    list = list.replaceAll('[', '');
    list = list.replaceAll('{', '');
    list = list.replaceAll(']', '');
    list = list.replaceAll('}', '');

    list = list.split(',');
    console.log(list);

    let tr = document.createElement('tr');
    for(let pair of list){
      pair = pair.split(':');
      let column = pair[0].replaceAll('"', '').trim();
      let value = pair[1].replaceAll('"', '').trim();

      if(column == 'img'){
        let img = document.createElement('img').src = value;
        let td = document.createElement('td');
        td.appendChild(img);
      }
      else if(column == 'name'){
        let p = document.createElement('p');
        p.textContent = value;
      }
    }
  }
}