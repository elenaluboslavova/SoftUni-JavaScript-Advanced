function solve() {
  let text = document.getElementById("input").value;
  let output = document.getElementById("output");

  let splitted = Array.from(text.split('.').filter((x) => x !== ""));
  let result = '';
  output.innerHTML += `<p>`;
  let counter = 0;

  for (let i = 0; i < splitted.length; i++) {
    output.innerHTML += `${splitted[i].trimStart()}.`;
    counter++;
    if (counter % 3 == 0 || i == splitted.length - 1) {
      output.innerHTML += `</p>`;
    }
  }
}