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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = (function () {
	function render(node) {
		const content = document.createElement("section");
		content.classList.add("content");
		const contactContainer = document.createElement("div");
		const contactText = document.createElement("div");
		const contactDetails = function () {
			const node = document.createElement("div");
			const sec1 = document.createElement("div");
			const sec2 = document.createElement("div");
			const mainTitle = document.createElement("h2");
			const title1 = document.createElement("h3");
			const title2 = document.createElement("h3");
			const list1 = document.createElement("ul");
			const list2 = document.createElement("ul");
			mainTitle.innerText = "Reach out to us";
			title1.innerText = "Phone:";
			title2.innerText = "E-mail:";

			list1.innerHTML = `<li>012-4231123</li><li>334-786800079</li>`;
			list2.innerHTML = `<li>notrealemail@arancione.com</li>`;

			sec1.append(title1, list1);
			sec2.append(title2, list2);

			node.append(mainTitle, sec1, sec2);
			return node;
		};
		const timing = function () {
			const node = document.createElement("div");
			const sec1 = document.createElement("div");
			const sec2 = document.createElement("div");
			const title1 = document.createElement("h3");
			const title2 = document.createElement("h3");
			const list1 = document.createElement("ul");
			const list2 = document.createElement("ul");
			const mainTitle = document.createElement("h2");

			mainTitle.innerText = "Our Timings";
			title1.innerText = "Mon-Thu:";
			title2.innerText = "Fri-Sun:";

			list1.innerHTML = `<li>08:00-20:00</li>`;
			list2.innerHTML = `<li>09:30-23:30</li>`;

			sec1.append(title1, list1);
			sec2.append(title2, list2);

			node.append(mainTitle, sec1, sec2);
			return node;
		};
		const map = document.createElement("div");

		map.innerHTML = `<h2>Our Location</h2><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47521.091420278055!2d12.508865803302825!3d41.89139005365572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23ff6a5cad4f94d1!2sBistrot%20L&#39;Arancione!5e0!3m2!1sen!2sin!4v1624284895501!5m2!1sen!2sin" width=100% height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

		contactContainer.classList.add("contact-container");
		contactText.classList.add("text-contacts");

		contactText.append(contactDetails(), timing());
		contactContainer.append(contactText, map);
		const heading = document.createElement("h1");
		heading.innerText = "Contact us";
		content.append(heading, contactContainer);
		node.append(content);
	}

	return { render };
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvUUFBb1EsbUdBQW1HOztBQUV2VztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxDQUFDOztBQUVrQiIsImZpbGUiOiJjb250YWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY29udGFjdCA9IChmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIHJlbmRlcihub2RlKSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRcdGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cdFx0Y29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGNvbnRhY3REZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBzZWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IHNlYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRcdFx0Y29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdFx0Y29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdFx0Y29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdFx0XHRjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0XHRcdG1haW5UaXRsZS5pbm5lclRleHQgPSBcIlJlYWNoIG91dCB0byB1c1wiO1xuXHRcdFx0dGl0bGUxLmlubmVyVGV4dCA9IFwiUGhvbmU6XCI7XG5cdFx0XHR0aXRsZTIuaW5uZXJUZXh0ID0gXCJFLW1haWw6XCI7XG5cblx0XHRcdGxpc3QxLmlubmVySFRNTCA9IGA8bGk+MDEyLTQyMzExMjM8L2xpPjxsaT4zMzQtNzg2ODAwMDc5PC9saT5gO1xuXHRcdFx0bGlzdDIuaW5uZXJIVE1MID0gYDxsaT5ub3RyZWFsZW1haWxAYXJhbmNpb25lLmNvbTwvbGk+YDtcblxuXHRcdFx0c2VjMS5hcHBlbmQodGl0bGUxLCBsaXN0MSk7XG5cdFx0XHRzZWMyLmFwcGVuZCh0aXRsZTIsIGxpc3QyKTtcblxuXHRcdFx0bm9kZS5hcHBlbmQobWFpblRpdGxlLCBzZWMxLCBzZWMyKTtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH07XG5cdFx0Y29uc3QgdGltaW5nID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBzZWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IHNlYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdFx0Y29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdFx0Y29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdFx0XHRjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0XHRcdGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuXHRcdFx0bWFpblRpdGxlLmlubmVyVGV4dCA9IFwiT3VyIFRpbWluZ3NcIjtcblx0XHRcdHRpdGxlMS5pbm5lclRleHQgPSBcIk1vbi1UaHU6XCI7XG5cdFx0XHR0aXRsZTIuaW5uZXJUZXh0ID0gXCJGcmktU3VuOlwiO1xuXG5cdFx0XHRsaXN0MS5pbm5lckhUTUwgPSBgPGxpPjA4OjAwLTIwOjAwPC9saT5gO1xuXHRcdFx0bGlzdDIuaW5uZXJIVE1MID0gYDxsaT4wOTozMC0yMzozMDwvbGk+YDtcblxuXHRcdFx0c2VjMS5hcHBlbmQodGl0bGUxLCBsaXN0MSk7XG5cdFx0XHRzZWMyLmFwcGVuZCh0aXRsZTIsIGxpc3QyKTtcblxuXHRcdFx0bm9kZS5hcHBlbmQobWFpblRpdGxlLCBzZWMxLCBzZWMyKTtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH07XG5cdFx0Y29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdG1hcC5pbm5lckhUTUwgPSBgPGgyPk91ciBMb2NhdGlvbjwvaDI+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ0NzUyMS4wOTE0MjAyNzgwNTUhMmQxMi41MDg4NjU4MDMzMDI4MjUhM2Q0MS44OTEzOTAwNTM2NTU3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4MjNmZjZhNWNhZDRmOTRkMSEyc0Jpc3Ryb3QlMjBMJiMzOTtBcmFuY2lvbmUhNWUwITNtMiExc2VuITJzaW4hNHYxNjI0Mjg0ODk1NTAxITVtMiExc2VuITJzaW5cIiB3aWR0aD0xMDAlIGhlaWdodD1cIjM1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIj48L2lmcmFtZT5gO1xuXG5cdFx0Y29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cdFx0Y29udGFjdFRleHQuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGFjdHNcIik7XG5cblx0XHRjb250YWN0VGV4dC5hcHBlbmQoY29udGFjdERldGFpbHMoKSwgdGltaW5nKCkpO1xuXHRcdGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RUZXh0LCBtYXApO1xuXHRcdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0aGVhZGluZy5pbm5lclRleHQgPSBcIkNvbnRhY3QgdXNcIjtcblx0XHRjb250ZW50LmFwcGVuZChoZWFkaW5nLCBjb250YWN0Q29udGFpbmVyKTtcblx0XHRub2RlLmFwcGVuZChjb250ZW50KTtcblx0fVxuXG5cdHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29udGFjdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==