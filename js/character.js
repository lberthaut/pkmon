export function Character() {
  let chara = document.createElement("img");
  chara.src = "../assets/eva.png";
  chara.className = "chara";
  let cases = document.getElementsByClassName("cases");
  var arr = Array.prototype.slice.call(cases);
  let characase_start = arr[0];
  characase_start.appendChild(chara);

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        Moveleft();
        break;
      case "ArrowRight":
        Moveright();
        break;
      case "ArrowDown":
        Movedown();
        break;
      case "ArrowUp":
        Moveup();
        break;
    }
  });

  function Moveright() {
    let chara = document.querySelector(".chara");
    chara.parentElement.nextElementSibling.appendChild(chara);
  }

  function Moveleft() {
    let chara = document.querySelector(".chara");
    chara.parentElement.previousElementSibling.appendChild(chara);
  }

  function Movedown(){
    let chara = document.querySelector(".chara");
    let n= chara.parentElement.getAttribute("id");
    let m = Number(n) + 10;
    let down_case = document.getElementById(`${m}`);
    down_case.appendChild(chara);
  }

  function Moveup (){
    let chara = document.querySelector(".chara");
    let n= chara.parentElement.getAttribute("id");
    let m = Number(n) - 10;
    console.log(n, m)
    let down_case = document.getElementById(`${m}`);
    down_case.appendChild(chara);
  }
}