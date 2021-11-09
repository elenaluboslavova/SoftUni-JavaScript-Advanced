function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searched = document.getElementById('searchField').value;
      let rows = document.querySelectorAll('table tbody tr');

      for (let row of Array.from(rows)) {
         for (let col of Array.from(row.children)) {
            row.className = '';
         }
      }

      for (let row of Array.from(rows)) {
         for (let col of Array.from(row.children)) {
            if (col.textContent.includes(searched)) {
               row.className = 'select';
            }
         }
      }
      document.getElementById('searchField').value = '';
   }
}