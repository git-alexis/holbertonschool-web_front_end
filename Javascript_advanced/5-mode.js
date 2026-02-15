function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = size + "px";
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	};
}

function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	const container = document.body;

	const paragraph = document.createElement("p");
	const buttonSpooky = document.createElement("button");
	const buttonDarkMode = document.createElement("button");
	const buttonScreamMode = document.createElement("button");

	paragraph.textContent = "Welcome Holberton!";
	buttonSpooky.textContent = "Spooky";
	buttonDarkMode.textContent = "Dark mode";
	buttonScreamMode.textContent = "Scream mode";

	container.appendChild(paragraph);
	container.appendChild(buttonSpooky);
	container.appendChild(buttonDarkMode);
	container.appendChild(buttonScreamMode);

	buttonSpooky.addEventListener("click", spooky);
	buttonDarkMode.addEventListener("click", darkMode);
	buttonScreamMode.addEventListener("click", screamMode);
}
