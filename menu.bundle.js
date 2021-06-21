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
		const para = document.createElement("para");
		const heading = document.createElement("h1");
		heading.innerText = "Menu";
		para.innerText =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis architecto atque dolorum vel? Aspernatur ea animi temporibus laborum, deleniti impedit mollitia. Veritatis velit, non fugit voluptatum explicabo nihil voluptates earum aut quia cupiditate ducimus id unde doloribus neque quasi est eaque maxime quos necessitatibus minus animi? Iste odit rerum tempore quia mollitia sunt, natus dolor doloremque magni eos debitis nulla totam, fugit dolorem animi repellendus optio, quis quo labore voluptatum nisi repudiandae placeat eaque minus! Debitis quod enim porro! Quas consequatur culpa facere vel voluptas nemo laboriosam optio similique corrupti nisi unde pariatur aspernatur harum odio, deleniti magnam iure vero ratione asperiores. Rerum illo unde a tempora corporis similique earum alias exercitationem impedit molestiae voluptas placeat modi iusto numquam perspiciatis, facere, quasi velit qui? Ab dignissimos ipsam quod atque mollitia id! Vero odio pariatur laboriosam at voluptate iusto magni suscipit incidunt eveniet, perspiciatis id quam nisi veritatis fugit doloremque molestiae dolores hic ullam sequi dicta perferendis voluptas! Minus dignissimos ut soluta reiciendis eveniet repellat quo eaque odit deserunt maxime ipsum quaerat amet eum rerum error harum quae porro, esse, nesciunt aperiam at! Explicabo optio commodi deserunt exercitationem perspiciatis, corporis ipsa quos numquam ex architecto, aspernatur dolorem doloremque nobis velit!";
		node.append(heading, para);
	}

	return { render };
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxDQUFDOztBQUVlIiwiZmlsZSI6Im1lbnUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBtZW51ID0gKGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gcmVuZGVyKG5vZGUpIHtcblx0XHRjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFcIik7XG5cdFx0Y29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRoZWFkaW5nLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXHRcdHBhcmEuaW5uZXJUZXh0ID1cblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXVtIHZlcml0YXRpcyBhcmNoaXRlY3RvIGF0cXVlIGRvbG9ydW0gdmVsPyBBc3Blcm5hdHVyIGVhIGFuaW1pIHRlbXBvcmlidXMgbGFib3J1bSwgZGVsZW5pdGkgaW1wZWRpdCBtb2xsaXRpYS4gVmVyaXRhdGlzIHZlbGl0LCBub24gZnVnaXQgdm9sdXB0YXR1bSBleHBsaWNhYm8gbmloaWwgdm9sdXB0YXRlcyBlYXJ1bSBhdXQgcXVpYSBjdXBpZGl0YXRlIGR1Y2ltdXMgaWQgdW5kZSBkb2xvcmlidXMgbmVxdWUgcXVhc2kgZXN0IGVhcXVlIG1heGltZSBxdW9zIG5lY2Vzc2l0YXRpYnVzIG1pbnVzIGFuaW1pPyBJc3RlIG9kaXQgcmVydW0gdGVtcG9yZSBxdWlhIG1vbGxpdGlhIHN1bnQsIG5hdHVzIGRvbG9yIGRvbG9yZW1xdWUgbWFnbmkgZW9zIGRlYml0aXMgbnVsbGEgdG90YW0sIGZ1Z2l0IGRvbG9yZW0gYW5pbWkgcmVwZWxsZW5kdXMgb3B0aW8sIHF1aXMgcXVvIGxhYm9yZSB2b2x1cHRhdHVtIG5pc2kgcmVwdWRpYW5kYWUgcGxhY2VhdCBlYXF1ZSBtaW51cyEgRGViaXRpcyBxdW9kIGVuaW0gcG9ycm8hIFF1YXMgY29uc2VxdWF0dXIgY3VscGEgZmFjZXJlIHZlbCB2b2x1cHRhcyBuZW1vIGxhYm9yaW9zYW0gb3B0aW8gc2ltaWxpcXVlIGNvcnJ1cHRpIG5pc2kgdW5kZSBwYXJpYXR1ciBhc3Blcm5hdHVyIGhhcnVtIG9kaW8sIGRlbGVuaXRpIG1hZ25hbSBpdXJlIHZlcm8gcmF0aW9uZSBhc3BlcmlvcmVzLiBSZXJ1bSBpbGxvIHVuZGUgYSB0ZW1wb3JhIGNvcnBvcmlzIHNpbWlsaXF1ZSBlYXJ1bSBhbGlhcyBleGVyY2l0YXRpb25lbSBpbXBlZGl0IG1vbGVzdGlhZSB2b2x1cHRhcyBwbGFjZWF0IG1vZGkgaXVzdG8gbnVtcXVhbSBwZXJzcGljaWF0aXMsIGZhY2VyZSwgcXVhc2kgdmVsaXQgcXVpPyBBYiBkaWduaXNzaW1vcyBpcHNhbSBxdW9kIGF0cXVlIG1vbGxpdGlhIGlkISBWZXJvIG9kaW8gcGFyaWF0dXIgbGFib3Jpb3NhbSBhdCB2b2x1cHRhdGUgaXVzdG8gbWFnbmkgc3VzY2lwaXQgaW5jaWR1bnQgZXZlbmlldCwgcGVyc3BpY2lhdGlzIGlkIHF1YW0gbmlzaSB2ZXJpdGF0aXMgZnVnaXQgZG9sb3JlbXF1ZSBtb2xlc3RpYWUgZG9sb3JlcyBoaWMgdWxsYW0gc2VxdWkgZGljdGEgcGVyZmVyZW5kaXMgdm9sdXB0YXMhIE1pbnVzIGRpZ25pc3NpbW9zIHV0IHNvbHV0YSByZWljaWVuZGlzIGV2ZW5pZXQgcmVwZWxsYXQgcXVvIGVhcXVlIG9kaXQgZGVzZXJ1bnQgbWF4aW1lIGlwc3VtIHF1YWVyYXQgYW1ldCBldW0gcmVydW0gZXJyb3IgaGFydW0gcXVhZSBwb3JybywgZXNzZSwgbmVzY2l1bnQgYXBlcmlhbSBhdCEgRXhwbGljYWJvIG9wdGlvIGNvbW1vZGkgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0gcGVyc3BpY2lhdGlzLCBjb3Jwb3JpcyBpcHNhIHF1b3MgbnVtcXVhbSBleCBhcmNoaXRlY3RvLCBhc3Blcm5hdHVyIGRvbG9yZW0gZG9sb3JlbXF1ZSBub2JpcyB2ZWxpdCFcIjtcblx0XHRub2RlLmFwcGVuZChoZWFkaW5nLCBwYXJhKTtcblx0fVxuXG5cdHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==