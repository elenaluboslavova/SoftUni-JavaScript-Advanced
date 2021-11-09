function search() {
   let searched = document.getElementById("searchText").value;
   
   let towns = Array.from(document.getElementById("towns").children);
   let counter = 0;

   for(let town of towns){
      if(town.textContent.includes(searched)){
         counter++;
         let style = 'font-weight : bold;' + '\n' + 'text-decoration : underline;';
         town.style = style;
      }
   }

   document.getElementById("result").textContent = `${counter} matches found`
}
