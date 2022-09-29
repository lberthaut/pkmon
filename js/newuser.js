import { Choosestart } from "./starter.js";
import { startmap } from "./map.js";

export function Newuser() {
  if (!localStorage.getItem("pseudo")) {
    document.querySelector(".container").innerHTML = `
    <div class="form_container">
    <form>
    <label for="pseudo">Pseudo:</label><br>
    <input type="text" id="pseudo"><br><br>
    <label for="photo">URL de l'image:</label><br>
    <input type="text" id="photo"><br><br>
    <input type="submit" value="Enregistrer" class="submit_button buttons">
  </form>
  </div>
    `;
  } else
    document.querySelector(
      ".container"
    ).innerHTML = `<button class="playbutton buttons">Let's play a game</button>`;

  //bouton submit formulaire
  if (!localStorage.getItem("pseudo")) {
    let submitbutton = document.querySelector(".submit_button");
    function Submituser(e) {
      let namevalue = document.querySelector("#pseudo").value;
      let photovalue = document.querySelector("#photo").value;
      localStorage.setItem("pseudo", namevalue);
      localStorage.setItem("URLphoto", photovalue);
      document.querySelector(".profilepic").src =
        localStorage.getItem("URLphoto");
      document.querySelector(".subtitle").textContent =
        localStorage.getItem("pseudo");
      document.querySelector(
        ".container"
      ).innerHTML = `<button class="playbutton buttons">Let's play a game</button>`;
    }
    submitbutton.addEventListener("click", Submituser);
  }

  //Choix starter
  let choosestarter = document.querySelector(".playbutton");
  if (!localStorage.getItem("starter")) {
    choosestarter.addEventListener("click", Choosestart);
  } else {
    startmap();
  }
}
