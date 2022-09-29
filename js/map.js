import { Character } from "./character.js";

export function startmap() {
	const container = document.querySelector(".container");
	container.innerHTML = "";
	const tableElement = document.createElement("table");
	tableElement.className = "map";
	for (let c = 0; c < 10; c++) {
		const row = document.createElement("tr");
		tableElement.appendChild(row);
		for (let t = 0; t < 10; t++) {
			const cases = document.createElement("td");
			cases.setAttribute("id", `${c == 0 ? '' : c}${t}`);
			cases.className = "cases";
			cases.style.backgroundImage = "url(../assets/ground.png)";
			row.appendChild(cases);
		}
	}
	container.appendChild(tableElement);

	Character();
}
