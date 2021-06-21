/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = (function () {
	function render(node) {
		const content = document.createElement("section");

		const heading = document.createElement("h1");
		const menuSection = document.createElement("section");
		const menuArray = [];
		const menuList = [
			"Appetizers",
			"Antipasto",
			"Entree",
			"Pasta",
			"Pizza",
			"Beverages",
		];

		function menuGenerator(itemName, itemDescription, price, type) {
			const menuItemContainer = document.createElement("div");
			const itemTitlePart = document.createElement("div");
			const menuItemName = document.createElement("h3");
			const menuItemDescription = document.createElement("p");
			const seperator = document.createElement("span");
			const menuItemPrice = document.createElement("p");

			menuItemContainer.classList.add("menu-item-container");

			menuItemName.textContent = itemName;
			menuItemPrice.textContent = price;
			menuItemDescription.textContent = itemDescription;

			itemTitlePart.append(menuItemName, seperator, menuItemPrice);
			menuItemContainer.append(itemTitlePart, menuItemDescription);

			menuArray[type].append(menuItemContainer);
		}
		function beverageGenerator(itemName, price, type) {
			const menuItemContainer = document.createElement("div");
			const itemTitlePart = document.createElement("div");
			const menuItemName = document.createElement("h3");
			const seperator = document.createElement("span");
			const menuItemPrice = document.createElement("p");

			menuItemContainer.classList.add("menu-item-container");

			menuItemName.textContent = itemName;
			menuItemPrice.textContent = price;

			itemTitlePart.append(menuItemName, seperator, menuItemPrice);
			menuItemContainer.append(itemTitlePart);

			menuArray[type].append(menuItemContainer);
		}

		for (let i = 0; i < 6; i++) {
			const node = document.createElement("div");
			const nodeTitle = document.createElement("h2");
			nodeTitle.innerText = menuList[i];
			node.classList.add("menuTypes");
			node.append(nodeTitle);
			menuArray.push(node);
		}

		menuSection.classList.add("menu-section");

		content.classList.add("content");

		heading.innerText = "Our Menu";

		content.append(heading, menuSection);
		menuArray.forEach((item) => menuSection.append(item));
		node.append(content);
		(function () {
			menuGenerator(
				"Garlic Bread",
				"With melted parmesan cheese and a special blend of herbs and spices",
				4,
				0
			);
			menuGenerator(
				"Caprese",
				"Fresh vine ripened tomato slices with mozzarella cheese and basil leaves, douse with balsamic vinegar and olive oil",
				6,
				0
			);
			menuGenerator(
				"Stuffed Mushroom",
				"Parmesan, Romano and Mozzarella cheese, clams and herb breadcrumns baked in mushroom caps",
				7,
				0
			);
			menuGenerator(
				"Calamari",
				"Lightly breaded and fried. Served with lemon wedges and marinara sauce",
				8,
				0
			);
			menuGenerator(
				"Bruschetta",
				"Heirloom tomato, pickled garlic, parmisan",
				11,
				1
			);
			menuGenerator("Bacon-wrapped Figs", "balsamic reduction", 9, 1);
			menuGenerator(
				"Beef Carapccio",
				"Pickled shallot, aruguia, grana padano",
				16,
				1
			);
			menuGenerator(
				"Steamed Mussels",
				"Slow-roasted tomato, fennel, calabarian chilli oil, grilled bread",
				18,
				1
			);
			menuGenerator(
				"Pollo Piccata",
				"Tender chicken breast poinded thin and braised in a garlic-lemon sauce, with white wine and capers served over roasted red potatoes",
				15,
				2
			);
			menuGenerator(
				"Fritto Misto",
				"Tempura battered shrimp, calamari, zucchini and eggplant, served with marinara sauce",
				15,
				2
			);
			menuGenerator(
				"Pollo Alla Romana",
				"Half a roasted chicken with garlic, shallots, rosemary and broccolini, served over mashed potatoes",
				18,
				2
			);
			menuGenerator(
				"Salmon Siciliano",
				"Grilled Chinook salmon served with artichoke heart, kalamata olices, capers and garlic sauce over corn polenta",
				21,
				2
			);
			menuGenerator(
				"Spaghetti Pomodoro",
				"Simple and deliciours, with house-made tomato-basil marinara drizzled with Tuscan olice oil",
				11,
				3
			);
			menuGenerator(
				"Fettuccine Carbonara",
				"Pancetta bacon with shallots in a parmesan cream sauce over fettucine",
				13,
				3
			);
			menuGenerator(
				"Squash Ravioli",
				"House-made ravioli stuffed with butternut squash in a browned-butter sage sauce",
				16,
				3
			);
			menuGenerator(
				"Paglia E Reno",
				"Handmade spinach tagliatella, peas, prosciutto di Parma, Parmeggiano Reggiano",
				14,
				3
			);
			menuGenerator(
				"Potato Gnocchi",
				"Hand-made potato dumplings with sage, browned butter, fontina and gorgonzola cheese",
				14,
				3
			);
			menuGenerator(
				"Margherita",
				"San Marzano tomato sauce with fresh mozzarella and basil",
				10,
				4
			);
			menuGenerator(
				"Margherita",
				"San Marzano tomato sauce with fresh mozzarella and basil",
				10,
				4
			);
			menuGenerator(
				"Funghi",
				"Three types of mushrooms with tomato, fresh mozzarella and parsley",
				10,
				4
			);
			menuGenerator(
				"Bologna",
				"Spicy salami wiht Bolognese meat sauce, roasted garlic and frest mozzarella",
				12,
				4
			);
			menuGenerator(
				"Sicilian",
				"Sweet Italian sausage, spicy Capicola ham, fontina, mozzarella and basil",
				14,
				4
			);
			beverageGenerator("Soda", 2.75, 5);
			beverageGenerator("Coffee/Tea", 1.75, 5);
			beverageGenerator("Bottled Water", 2.75, 5);
			beverageGenerator("Fresh Lemonade", 1.75, 5);
		})();
	}

	return { render };
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsU0FBUztBQUNULENBQUM7O0FBRWUiLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IG1lbnUgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiByZW5kZXIobm9kZSkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuXHRcdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0Y29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjb25zdCBtZW51QXJyYXkgPSBbXTtcblx0XHRjb25zdCBtZW51TGlzdCA9IFtcblx0XHRcdFwiQXBwZXRpemVyc1wiLFxuXHRcdFx0XCJBbnRpcGFzdG9cIixcblx0XHRcdFwiRW50cmVlXCIsXG5cdFx0XHRcIlBhc3RhXCIsXG5cdFx0XHRcIlBpenphXCIsXG5cdFx0XHRcIkJldmVyYWdlc1wiLFxuXHRcdF07XG5cblx0XHRmdW5jdGlvbiBtZW51R2VuZXJhdG9yKGl0ZW1OYW1lLCBpdGVtRGVzY3JpcHRpb24sIHByaWNlLCB0eXBlKSB7XG5cdFx0XHRjb25zdCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBpdGVtVGl0bGVQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdGNvbnN0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0Y29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcblxuXHRcdFx0bWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG5cdFx0XHRtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cdFx0XHRtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbURlc2NyaXB0aW9uO1xuXG5cdFx0XHRpdGVtVGl0bGVQYXJ0LmFwcGVuZChtZW51SXRlbU5hbWUsIHNlcGVyYXRvciwgbWVudUl0ZW1QcmljZSk7XG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbVRpdGxlUGFydCwgbWVudUl0ZW1EZXNjcmlwdGlvbik7XG5cblx0XHRcdG1lbnVBcnJheVt0eXBlXS5hcHBlbmQobWVudUl0ZW1Db250YWluZXIpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBiZXZlcmFnZUdlbmVyYXRvcihpdGVtTmFtZSwgcHJpY2UsIHR5cGUpIHtcblx0XHRcdGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IGl0ZW1UaXRsZVBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdFx0Y29uc3Qgc2VwZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0XHRcdG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tY29udGFpbmVyXCIpO1xuXG5cdFx0XHRtZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcblx0XHRcdG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuXHRcdFx0aXRlbVRpdGxlUGFydC5hcHBlbmQobWVudUl0ZW1OYW1lLCBzZXBlcmF0b3IsIG1lbnVJdGVtUHJpY2UpO1xuXHRcdFx0bWVudUl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1UaXRsZVBhcnQpO1xuXG5cdFx0XHRtZW51QXJyYXlbdHlwZV0uYXBwZW5kKG1lbnVJdGVtQ29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdFx0XHRub2RlVGl0bGUuaW5uZXJUZXh0ID0gbWVudUxpc3RbaV07XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQoXCJtZW51VHlwZXNcIik7XG5cdFx0XHRub2RlLmFwcGVuZChub2RlVGl0bGUpO1xuXHRcdFx0bWVudUFycmF5LnB1c2gobm9kZSk7XG5cdFx0fVxuXG5cdFx0bWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcblxuXHRcdGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cblx0XHRoZWFkaW5nLmlubmVyVGV4dCA9IFwiT3VyIE1lbnVcIjtcblxuXHRcdGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIG1lbnVTZWN0aW9uKTtcblx0XHRtZW51QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gbWVudVNlY3Rpb24uYXBwZW5kKGl0ZW0pKTtcblx0XHRub2RlLmFwcGVuZChjb250ZW50KTtcblx0XHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJHYXJsaWMgQnJlYWRcIixcblx0XHRcdFx0XCJXaXRoIG1lbHRlZCBwYXJtZXNhbiBjaGVlc2UgYW5kIGEgc3BlY2lhbCBibGVuZCBvZiBoZXJicyBhbmQgc3BpY2VzXCIsXG5cdFx0XHRcdDQsXG5cdFx0XHRcdDBcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIkNhcHJlc2VcIixcblx0XHRcdFx0XCJGcmVzaCB2aW5lIHJpcGVuZWQgdG9tYXRvIHNsaWNlcyB3aXRoIG1venphcmVsbGEgY2hlZXNlIGFuZCBiYXNpbCBsZWF2ZXMsIGRvdXNlIHdpdGggYmFsc2FtaWMgdmluZWdhciBhbmQgb2xpdmUgb2lsXCIsXG5cdFx0XHRcdDYsXG5cdFx0XHRcdDBcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlN0dWZmZWQgTXVzaHJvb21cIixcblx0XHRcdFx0XCJQYXJtZXNhbiwgUm9tYW5vIGFuZCBNb3p6YXJlbGxhIGNoZWVzZSwgY2xhbXMgYW5kIGhlcmIgYnJlYWRjcnVtbnMgYmFrZWQgaW4gbXVzaHJvb20gY2Fwc1wiLFxuXHRcdFx0XHQ3LFxuXHRcdFx0XHQwXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJDYWxhbWFyaVwiLFxuXHRcdFx0XHRcIkxpZ2h0bHkgYnJlYWRlZCBhbmQgZnJpZWQuIFNlcnZlZCB3aXRoIGxlbW9uIHdlZGdlcyBhbmQgbWFyaW5hcmEgc2F1Y2VcIixcblx0XHRcdFx0OCxcblx0XHRcdFx0MFxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiQnJ1c2NoZXR0YVwiLFxuXHRcdFx0XHRcIkhlaXJsb29tIHRvbWF0bywgcGlja2xlZCBnYXJsaWMsIHBhcm1pc2FuXCIsXG5cdFx0XHRcdDExLFxuXHRcdFx0XHQxXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcIkJhY29uLXdyYXBwZWQgRmlnc1wiLCBcImJhbHNhbWljIHJlZHVjdGlvblwiLCA5LCAxKTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiQmVlZiBDYXJhcGNjaW9cIixcblx0XHRcdFx0XCJQaWNrbGVkIHNoYWxsb3QsIGFydWd1aWEsIGdyYW5hIHBhZGFub1wiLFxuXHRcdFx0XHQxNixcblx0XHRcdFx0MVxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiU3RlYW1lZCBNdXNzZWxzXCIsXG5cdFx0XHRcdFwiU2xvdy1yb2FzdGVkIHRvbWF0bywgZmVubmVsLCBjYWxhYmFyaWFuIGNoaWxsaSBvaWwsIGdyaWxsZWQgYnJlYWRcIixcblx0XHRcdFx0MTgsXG5cdFx0XHRcdDFcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlBvbGxvIFBpY2NhdGFcIixcblx0XHRcdFx0XCJUZW5kZXIgY2hpY2tlbiBicmVhc3QgcG9pbmRlZCB0aGluIGFuZCBicmFpc2VkIGluIGEgZ2FybGljLWxlbW9uIHNhdWNlLCB3aXRoIHdoaXRlIHdpbmUgYW5kIGNhcGVycyBzZXJ2ZWQgb3ZlciByb2FzdGVkIHJlZCBwb3RhdG9lc1wiLFxuXHRcdFx0XHQxNSxcblx0XHRcdFx0MlxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiRnJpdHRvIE1pc3RvXCIsXG5cdFx0XHRcdFwiVGVtcHVyYSBiYXR0ZXJlZCBzaHJpbXAsIGNhbGFtYXJpLCB6dWNjaGluaSBhbmQgZWdncGxhbnQsIHNlcnZlZCB3aXRoIG1hcmluYXJhIHNhdWNlXCIsXG5cdFx0XHRcdDE1LFxuXHRcdFx0XHQyXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJQb2xsbyBBbGxhIFJvbWFuYVwiLFxuXHRcdFx0XHRcIkhhbGYgYSByb2FzdGVkIGNoaWNrZW4gd2l0aCBnYXJsaWMsIHNoYWxsb3RzLCByb3NlbWFyeSBhbmQgYnJvY2NvbGluaSwgc2VydmVkIG92ZXIgbWFzaGVkIHBvdGF0b2VzXCIsXG5cdFx0XHRcdDE4LFxuXHRcdFx0XHQyXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJTYWxtb24gU2ljaWxpYW5vXCIsXG5cdFx0XHRcdFwiR3JpbGxlZCBDaGlub29rIHNhbG1vbiBzZXJ2ZWQgd2l0aCBhcnRpY2hva2UgaGVhcnQsIGthbGFtYXRhIG9saWNlcywgY2FwZXJzIGFuZCBnYXJsaWMgc2F1Y2Ugb3ZlciBjb3JuIHBvbGVudGFcIixcblx0XHRcdFx0MjEsXG5cdFx0XHRcdDJcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlNwYWdoZXR0aSBQb21vZG9yb1wiLFxuXHRcdFx0XHRcIlNpbXBsZSBhbmQgZGVsaWNpb3Vycywgd2l0aCBob3VzZS1tYWRlIHRvbWF0by1iYXNpbCBtYXJpbmFyYSBkcml6emxlZCB3aXRoIFR1c2NhbiBvbGljZSBvaWxcIixcblx0XHRcdFx0MTEsXG5cdFx0XHRcdDNcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIkZldHR1Y2NpbmUgQ2FyYm9uYXJhXCIsXG5cdFx0XHRcdFwiUGFuY2V0dGEgYmFjb24gd2l0aCBzaGFsbG90cyBpbiBhIHBhcm1lc2FuIGNyZWFtIHNhdWNlIG92ZXIgZmV0dHVjaW5lXCIsXG5cdFx0XHRcdDEzLFxuXHRcdFx0XHQzXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJTcXVhc2ggUmF2aW9saVwiLFxuXHRcdFx0XHRcIkhvdXNlLW1hZGUgcmF2aW9saSBzdHVmZmVkIHdpdGggYnV0dGVybnV0IHNxdWFzaCBpbiBhIGJyb3duZWQtYnV0dGVyIHNhZ2Ugc2F1Y2VcIixcblx0XHRcdFx0MTYsXG5cdFx0XHRcdDNcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlBhZ2xpYSBFIFJlbm9cIixcblx0XHRcdFx0XCJIYW5kbWFkZSBzcGluYWNoIHRhZ2xpYXRlbGxhLCBwZWFzLCBwcm9zY2l1dHRvIGRpIFBhcm1hLCBQYXJtZWdnaWFubyBSZWdnaWFub1wiLFxuXHRcdFx0XHQxNCxcblx0XHRcdFx0M1xuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiUG90YXRvIEdub2NjaGlcIixcblx0XHRcdFx0XCJIYW5kLW1hZGUgcG90YXRvIGR1bXBsaW5ncyB3aXRoIHNhZ2UsIGJyb3duZWQgYnV0dGVyLCBmb250aW5hIGFuZCBnb3Jnb256b2xhIGNoZWVzZVwiLFxuXHRcdFx0XHQxNCxcblx0XHRcdFx0M1xuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiTWFyZ2hlcml0YVwiLFxuXHRcdFx0XHRcIlNhbiBNYXJ6YW5vIHRvbWF0byBzYXVjZSB3aXRoIGZyZXNoIG1venphcmVsbGEgYW5kIGJhc2lsXCIsXG5cdFx0XHRcdDEwLFxuXHRcdFx0XHQ0XG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJNYXJnaGVyaXRhXCIsXG5cdFx0XHRcdFwiU2FuIE1hcnphbm8gdG9tYXRvIHNhdWNlIHdpdGggZnJlc2ggbW96emFyZWxsYSBhbmQgYmFzaWxcIixcblx0XHRcdFx0MTAsXG5cdFx0XHRcdDRcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIkZ1bmdoaVwiLFxuXHRcdFx0XHRcIlRocmVlIHR5cGVzIG9mIG11c2hyb29tcyB3aXRoIHRvbWF0bywgZnJlc2ggbW96emFyZWxsYSBhbmQgcGFyc2xleVwiLFxuXHRcdFx0XHQxMCxcblx0XHRcdFx0NFxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiQm9sb2duYVwiLFxuXHRcdFx0XHRcIlNwaWN5IHNhbGFtaSB3aWh0IEJvbG9nbmVzZSBtZWF0IHNhdWNlLCByb2FzdGVkIGdhcmxpYyBhbmQgZnJlc3QgbW96emFyZWxsYVwiLFxuXHRcdFx0XHQxMixcblx0XHRcdFx0NFxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiU2ljaWxpYW5cIixcblx0XHRcdFx0XCJTd2VldCBJdGFsaWFuIHNhdXNhZ2UsIHNwaWN5IENhcGljb2xhIGhhbSwgZm9udGluYSwgbW96emFyZWxsYSBhbmQgYmFzaWxcIixcblx0XHRcdFx0MTQsXG5cdFx0XHRcdDRcblx0XHRcdCk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIlNvZGFcIiwgMi43NSwgNSk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIkNvZmZlZS9UZWFcIiwgMS43NSwgNSk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIkJvdHRsZWQgV2F0ZXJcIiwgMi43NSwgNSk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIkZyZXNoIExlbW9uYWRlXCIsIDEuNzUsIDUpO1xuXHRcdH0pKCk7XG5cdH1cblxuXHRyZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=