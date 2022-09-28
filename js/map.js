export function startmap(){
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const tableElement = document.createElement("table");
  tableElement.className = "map";
  for (let c = 0; c < 10; c++) {
    const row = document.createElement("tr");
    tableElement.appendChild(row);
    for (let t = 0; t < 10; t++) {
      const cases = document.createElement("td");
      cases.setAttribute("index", `${c}${t}`);
      cases.className = "cases";
      cases.style.backgroundImage = "url(../assets/ground.png)";
      row.appendChild(cases);
    }
  }
  container.appendChild(tableElement);

  let chara = document.createElement('img');
  chara.src = '../assets/eva.png';
  let cases = document.getElementsByClassName('cases');
  var arr = Array.prototype.slice.call( cases )
  let characase_start = arr[0]
  console.log(characase_start);
  characase_start.appendChild(chara);
}