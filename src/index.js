import "./style.css";

createdDOMElements = (function () {
	const main = document.createElement("main");
	document.body.append(main);
	return { main };
})();
