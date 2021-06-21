/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nanum+Gothic&family=Rochester&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--orange-accent: #d7942d;\n\t--black: #1d1d1d;\n\t--black-transparent: #1d1d1d75;\n\t--white: #f8fdff;\n\t--white-transparent: #f8fdff75;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3rem;\n\theight: 0.3rem;\n}\n\n::-webkit-scrollbar-thumb {\n\tbackground: #c9c9c921;\n\tbackdrop-filter: blur(12px);\n\t/* border-radius: 50vh; */\n}\n\nbody {\n\tdisplay: grid;\n\tgrid-template: repeat(3, auto) / 1fr;\n\tbackground-color: var(--black);\n\tfont-family: \"DM Serif Display\", serif;\n\tcolor: var(--white);\n\toverflow: overlay;\n}\n\n.header-image {\n\tmin-height: 500px;\n\tbackground-image: url(https://images.unsplash.com/photo-1503767849114-976b67568b02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-blend-mode: luminosity;\n\tbackground-size: cover;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-bottom: solid 2px var(--orange-accent);\n}\n\n.header-image h1 {\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tdisplay: flex;\n\tbackground-color: rgba(0, 0, 0, 0.534);\n\tline-height: 1;\n\tfont-size: 10rem;\n\tcolor: var(--orange-accent);\n\tfont-family: \"Rochester\", cursive;\n\t/* font-family: \"Herr Von Muellerhoff\", cursive; */\n\tfont-weight: 100;\n\t/* filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.55)); */\n}\n\nnav {\n\tposition: fixed;\n\ttop: 2rem;\n\tleft: 10%;\n\tbackground-color: var(--black-transparent);\n\t--transparent-border: var(--white-transparent);\n\tbackdrop-filter: blur(20px);\n\tpadding: 0rem 2rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 80%;\n\tbox-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);\n\tborder-radius: 99vh;\n\ttransition: all 0.5s ease, border-radius 0.3s;\n\toverflow: hidden;\n\tuser-select: none;\n}\n\nnav ul {\n\tdisplay: flex;\n\tlist-style: none;\n}\n\nnav ul li {\n\tposition: relative;\n\tcursor: pointer;\n\tpadding: 1.5rem 0rem;\n\twidth: 8rem;\n\tfont-size: 1.4rem;\n\ttext-align: center;\n}\n\n.fullspread {\n\tbackground-color: var(--black);\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tborder-radius: 0;\n}\n\n.underline {\n\tposition: absolute;\n\tbottom: 0;\n\theight: 4px;\n\twidth: 8rem;\n\tbackground-color: var(--orange-accent);\n\tright: calc(16rem + 2rem);\n\ttransition: all 0.3s ease;\n}\n\n.underline.menu {\n\tright: calc(8rem + 2rem);\n}\n.underline.contact {\n\tright: calc(0rem + 2rem);\n}\n\n.logo {\n\tfont-size: 1.2rem;\n}\n\n.logo-text {\n\tdisplay: inline-block;\n\tfont-family: \"Rochester\", cursive;\n\tfont-size: 3rem;\n\tcolor: var(--orange-accent);\n\ttext-align: center;\n\tuser-select: none;\n}\n\n.main-section {\n\tmargin: 0 auto;\n\tcolor: var(--orange-accent);\n\tpadding: 5rem 0;\n\twidth: 100%;\n\twidth: clamp(250px, 90%, 900px);\n}\n\nfooter {\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-blend-mode: luminosity;\n\tbackground-size: cover;\n\tpadding: 2rem;\n\ttext-align: center;\n\tuser-select: none;\n\tfont-weight: 100;\n\tborder-top: solid 2px var(--orange-accent);\n}\n\nfooter a {\n\tcolor: var(--orange-accent);\n\ttext-decoration: none;\n}\n\nfooter a:hover {\n\ttext-decoration: underline;\n}\n\n.content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\t/* padding: 0 4rem; */\n\tfont-family: \"Nanum Gothic\", sans-serif;\n\tcolor: var(--white);\n\twidth: 100%;\n\ttext-align: justify;\n}\n\n.content h1 {\n\tfont-weight: 100;\n\tfont-size: 2.5rem;\n\tmargin-bottom: 2rem;\n\tfont-family: \"DM Serif Display\", serif;\n\tcolor: var(--orange-accent);\n\ttext-align: center;\n}\n\n.content h2 {\n\ttext-align: center;\n\tfont-weight: 100;\n}\n\n.content-image {\n\tbackground-color: var(--black);\n\tbackground-image: var(--url);\n\twidth: 500px;\n\theight: 300px;\n\tmargin: 2rem 0;\n\tbackground-position: center;\n\tbackground-size: cover;\n\talign-self: center;\n}\n\n.heading-image:nth-of-type(2n) {\n\talign-self: flex-end;\n}\n\n.menu-section {\n\tdisplay: grid;\n\tgrid-template: repeat(3, auto) / repeat(2, auto);\n\tgap: 1rem 2.5rem;\n}\n\n.menu-section h2 {\n\ttext-align: left;\n\tmargin-bottom: 1rem;\n\tcolor: var(--orange-accent);\n}\n\n.menu-item-container > div {\n\tdisplay: grid;\n\tgap: 1rem;\n\tgrid-template: auto / auto 1fr auto;\n\tmargin-bottom: 0.3rem;\n}\n\n.menu-item-container h3 {\n\tfont-size: 1rem;\n}\n\n.menu-item-container span {\n\twidth: 100%;\n\theight: 1px;\n\talign-self: flex-end;\n\tbackground-color: var(--white-transparent);\n}\n\n.menu-item-container > p {\n\tfont-size: 0.8rem;\n}\n\n.menuTypes > div {\n\tmargin-bottom: 1rem;\n}\n\n.contact-container {\n\tdisplay: grid;\n\tgap: 2rem;\n\tgrid-template: repeat(2, auto) / 1fr;\n}\n\n.text-contacts {\n\tdisplay: grid;\n\tgrid-template: 1fr / 1fr 1fr;\n\tgap: 2rem;\n}\n\n.contact-container h2 {\n\ttext-align: left;\n\tmargin-bottom: 1rem;\n\tcolor: var(--orange-accent);\n}\n\n.text-contacts > div > div {\n\ttext-align: left;\n\tdisplay: grid;\n\tgap: 1rem;\n\tgrid-template: 1fr / 1fr 1fr;\n\tmargin-bottom: 1rem;\n}\n\n.text-contacts li {\n\tlist-style: none;\n\tmargin-bottom: 0.5rem;\n\ttext-align: right;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nanum+Gothic&family=Rochester&display=swap\");\n\n:root {\n\t--orange-accent: #d7942d;\n\t--black: #1d1d1d;\n\t--black-transparent: #1d1d1d75;\n\t--white: #f8fdff;\n\t--white-transparent: #f8fdff75;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3rem;\n\theight: 0.3rem;\n}\n\n::-webkit-scrollbar-thumb {\n\tbackground: #c9c9c921;\n\tbackdrop-filter: blur(12px);\n\t/* border-radius: 50vh; */\n}\n\nbody {\n\tdisplay: grid;\n\tgrid-template: repeat(3, auto) / 1fr;\n\tbackground-color: var(--black);\n\tfont-family: \"DM Serif Display\", serif;\n\tcolor: var(--white);\n\toverflow: overlay;\n}\n\n.header-image {\n\tmin-height: 500px;\n\tbackground-image: url(https://images.unsplash.com/photo-1503767849114-976b67568b02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-blend-mode: luminosity;\n\tbackground-size: cover;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-bottom: solid 2px var(--orange-accent);\n}\n\n.header-image h1 {\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tdisplay: flex;\n\tbackground-color: rgba(0, 0, 0, 0.534);\n\tline-height: 1;\n\tfont-size: 10rem;\n\tcolor: var(--orange-accent);\n\tfont-family: \"Rochester\", cursive;\n\t/* font-family: \"Herr Von Muellerhoff\", cursive; */\n\tfont-weight: 100;\n\t/* filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.55)); */\n}\n\nnav {\n\tposition: fixed;\n\ttop: 2rem;\n\tleft: 10%;\n\tbackground-color: var(--black-transparent);\n\t--transparent-border: var(--white-transparent);\n\tbackdrop-filter: blur(20px);\n\tpadding: 0rem 2rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 80%;\n\tbox-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);\n\tborder-radius: 99vh;\n\ttransition: all 0.5s ease, border-radius 0.3s;\n\toverflow: hidden;\n\tuser-select: none;\n}\n\nnav ul {\n\tdisplay: flex;\n\tlist-style: none;\n}\n\nnav ul li {\n\tposition: relative;\n\tcursor: pointer;\n\tpadding: 1.5rem 0rem;\n\twidth: 8rem;\n\tfont-size: 1.4rem;\n\ttext-align: center;\n}\n\n.fullspread {\n\tbackground-color: var(--black);\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tborder-radius: 0;\n}\n\n.underline {\n\tposition: absolute;\n\tbottom: 0;\n\theight: 4px;\n\twidth: 8rem;\n\tbackground-color: var(--orange-accent);\n\tright: calc(16rem + 2rem);\n\ttransition: all 0.3s ease;\n}\n\n.underline.menu {\n\tright: calc(8rem + 2rem);\n}\n.underline.contact {\n\tright: calc(0rem + 2rem);\n}\n\n.logo {\n\tfont-size: 1.2rem;\n}\n\n.logo-text {\n\tdisplay: inline-block;\n\tfont-family: \"Rochester\", cursive;\n\tfont-size: 3rem;\n\tcolor: var(--orange-accent);\n\ttext-align: center;\n\tuser-select: none;\n}\n\n.main-section {\n\tmargin: 0 auto;\n\tcolor: var(--orange-accent);\n\tpadding: 5rem 0;\n\twidth: 100%;\n\twidth: clamp(250px, 90%, 900px);\n}\n\nfooter {\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-blend-mode: luminosity;\n\tbackground-size: cover;\n\tpadding: 2rem;\n\ttext-align: center;\n\tuser-select: none;\n\tfont-weight: 100;\n\tborder-top: solid 2px var(--orange-accent);\n}\n\nfooter a {\n\tcolor: var(--orange-accent);\n\ttext-decoration: none;\n}\n\nfooter a:hover {\n\ttext-decoration: underline;\n}\n\n.content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\t/* padding: 0 4rem; */\n\tfont-family: \"Nanum Gothic\", sans-serif;\n\tcolor: var(--white);\n\twidth: 100%;\n\ttext-align: justify;\n}\n\n.content h1 {\n\tfont-weight: 100;\n\tfont-size: 2.5rem;\n\tmargin-bottom: 2rem;\n\tfont-family: \"DM Serif Display\", serif;\n\tcolor: var(--orange-accent);\n\ttext-align: center;\n}\n\n.content h2 {\n\ttext-align: center;\n\tfont-weight: 100;\n}\n\n.content-image {\n\tbackground-color: var(--black);\n\tbackground-image: var(--url);\n\twidth: 500px;\n\theight: 300px;\n\tmargin: 2rem 0;\n\tbackground-position: center;\n\tbackground-size: cover;\n\talign-self: center;\n}\n\n.heading-image:nth-of-type(2n) {\n\talign-self: flex-end;\n}\n\n.menu-section {\n\tdisplay: grid;\n\tgrid-template: repeat(3, auto) / repeat(2, auto);\n\tgap: 1rem 2.5rem;\n}\n\n.menu-section h2 {\n\ttext-align: left;\n\tmargin-bottom: 1rem;\n\tcolor: var(--orange-accent);\n}\n\n.menu-item-container > div {\n\tdisplay: grid;\n\tgap: 1rem;\n\tgrid-template: auto / auto 1fr auto;\n\tmargin-bottom: 0.3rem;\n}\n\n.menu-item-container h3 {\n\tfont-size: 1rem;\n}\n\n.menu-item-container span {\n\twidth: 100%;\n\theight: 1px;\n\talign-self: flex-end;\n\tbackground-color: var(--white-transparent);\n}\n\n.menu-item-container > p {\n\tfont-size: 0.8rem;\n}\n\n.menuTypes > div {\n\tmargin-bottom: 1rem;\n}\n\n.contact-container {\n\tdisplay: grid;\n\tgap: 2rem;\n\tgrid-template: repeat(2, auto) / 1fr;\n}\n\n.text-contacts {\n\tdisplay: grid;\n\tgrid-template: 1fr / 1fr 1fr;\n\tgap: 2rem;\n}\n\n.contact-container h2 {\n\ttext-align: left;\n\tmargin-bottom: 1rem;\n\tcolor: var(--orange-accent);\n}\n\n.text-contacts > div > div {\n\ttext-align: left;\n\tdisplay: grid;\n\tgap: 1rem;\n\tgrid-template: 1fr / 1fr 1fr;\n\tmargin-bottom: 1rem;\n}\n\n.text-contacts li {\n\tlist-style: none;\n\tmargin-bottom: 0.5rem;\n\ttext-align: right;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const home = (function () {
	function render(node) {
		const content = document.createElement("section");
		const heading = document.createElement("h1");
		const subHeading = document.createElement("h2");
		const contentImage = document.createElement("div");
		const paragraph = document.createElement("p");

		paragraph.innerText =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis architecto atque dolorum vel? Aspernatur ea animi temporibus laborum, deleniti impedit mollitia. Veritatis velit, non fugit voluptatum explicabo nihil voluptates earum aut quia cupiditate ducimus id unde doloribus neque quasi est eaque maxime quos necessitatibus minus animi?";

		contentImage.style.setProperty(
			"--url",
			"url(https://images.unsplash.com/photo-1552644329-8f92449c1c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80)"
		);

		heading.innerText = "Experience Fine Italian Dining";
		subHeading.innerText = "Great Food, Greater Wine";

		content.classList.add("content");
		contentImage.classList.add("content-image");

		content.append(heading, subHeading, contentImage, paragraph);

		node.append(content);
	}

	return { render };
})();

const universalSkeleton = (function () {
	const navigation = document.createElement("nav");
	const header = document.createElement("section");
	const navLogo = document.createElement("div");
	const logoText = document.createElement("span");
	const underline = document.createElement("div");
	const navElements = document.createElement("ul");
	const homeNav = document.createElement("li");
	const menuNav = document.createElement("li");
	const aboutNav = document.createElement("li");
	const main = document.createElement("section");
	const headerMainText = document.createElement("h1");
	const footer = document.createElement("footer");
	const footerLink = document.createElement("a");

	headerMainText.innerText = "arancione";
	homeNav.innerText = "Home";
	menuNav.innerText = "Menu";
	aboutNav.innerText = "Contact";
	logoText.innerText = "arancione";
	footer.innerText = "Designed and developed by ";
	footerLink.innerText = "berserkwal";

	logoText.classList.add("logo-text");
	navLogo.classList.add("logo");
	header.classList.add("header-image");
	underline.classList.add("underline");
	main.classList.add("main-section");

	footerLink.setAttribute("href", "https://berserkwal.github.io");

	navLogo.append(logoText);
	navElements.append(homeNav, menuNav, aboutNav);
	navigation.append(navLogo, underline, navElements);
	header.append(headerMainText);
	footer.append(footerLink);

	document.body.append(header, main, navigation, footer);

	function clearMain() {
		const everything = main.querySelector(".content");
		everything.remove();
	}

	const options = { root: null, threshold: 0, rootMargin: "-200px" };
	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				navigation.classList.remove("fullspread");
			} else {
				navigation.classList.add("fullspread");
			}
		});
	}, options);
	observer.observe(header);
	home.render(main);

	homeNav.addEventListener("click", () => {
		underline.classList.remove("menu", "contact");
		clearMain();
		home.render(main);
	});
	menuNav.addEventListener("click", () => {
		underline.classList.remove("contact");
		underline.classList.add("menu");
		clearMain();
		_menu__WEBPACK_IMPORTED_MODULE_1__.menu.render(main);
	});
	aboutNav.addEventListener("click", () => {
		underline.classList.remove("menu");
		underline.classList.add("contact");
		clearMain();
		_contact__WEBPACK_IMPORTED_MODULE_2__.contact.render(main);
	});

	// clearMain();
	return { header, main, homeNav, menuNav, aboutNav };
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1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WUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8s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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsU0FBUztBQUNULENBQUM7O0FBRWU7Ozs7Ozs7VUNqTmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNTO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNULENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhDQUFXO0FBQ2IsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBYztBQUNoQixFQUFFOztBQUVGO0FBQ0EsU0FBUztBQUNULENBQUMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTZXJpZitEaXNwbGF5JmZhbWlseT1OYW51bStHb3RoaWMmZmFtaWx5PVJvY2hlc3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0LS1vcmFuZ2UtYWNjZW50OiAjZDc5NDJkO1xcblxcdC0tYmxhY2s6ICMxZDFkMWQ7XFxuXFx0LS1ibGFjay10cmFuc3BhcmVudDogIzFkMWQxZDc1O1xcblxcdC0td2hpdGU6ICNmOGZkZmY7XFxuXFx0LS13aGl0ZS10cmFuc3BhcmVudDogI2Y4ZmRmZjc1O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDAuM3JlbTtcXG5cXHRoZWlnaHQ6IDAuM3JlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZDogI2M5YzljOTIxO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcXG5cXHQvKiBib3JkZXItcmFkaXVzOiA1MHZoOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKSAvIDFmcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJETSBTZXJpZiBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRvdmVyZmxvdzogb3ZlcmxheTtcXG59XFxuXFxuLmhlYWRlci1pbWFnZSB7XFxuXFx0bWluLWhlaWdodDogNTAwcHg7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAzNzY3ODQ5MTE0LTk3NmI2NzU2OGIwMj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTUwMCZxPTgwKTtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxufVxcblxcbi5oZWFkZXItaW1hZ2UgaDEge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUzNCk7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0Zm9udC1zaXplOiAxMHJlbTtcXG5cXHRjb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2NoZXN0ZXJcXFwiLCBjdXJzaXZlO1xcblxcdC8qIGZvbnQtZmFtaWx5OiBcXFwiSGVyciBWb24gTXVlbGxlcmhvZmZcXFwiLCBjdXJzaXZlOyAqL1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0LyogZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC41NSkpOyAqL1xcbn1cXG5cXG5uYXYge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDJyZW07XFxuXFx0bGVmdDogMTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcXG5cXHQtLXRyYW5zcGFyZW50LWJvcmRlcjogdmFyKC0td2hpdGUtdHJhbnNwYXJlbnQpO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG5cXHRwYWRkaW5nOiAwcmVtIDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogODAlO1xcblxcdGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDk5dmg7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSwgYm9yZGVyLXJhZGl1cyAwLjNzO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbm5hdiB1bCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cGFkZGluZzogMS41cmVtIDByZW07XFxuXFx0d2lkdGg6IDhyZW07XFxuXFx0Zm9udC1zaXplOiAxLjRyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnVsbHNwcmVhZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi51bmRlcmxpbmUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDA7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0d2lkdGg6IDhyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0cmlnaHQ6IGNhbGMoMTZyZW0gKyAycmVtKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4udW5kZXJsaW5lLm1lbnUge1xcblxcdHJpZ2h0OiBjYWxjKDhyZW0gKyAycmVtKTtcXG59XFxuLnVuZGVybGluZS5jb250YWN0IHtcXG5cXHRyaWdodDogY2FsYygwcmVtICsgMnJlbSk7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9jaGVzdGVyXFxcIiwgY3Vyc2l2ZTtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdHBhZGRpbmc6IDVyZW0gMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR3aWR0aDogY2xhbXAoMjUwcHgsIDkwJSwgOTAwcHgpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdHBhZGRpbmc6IDJyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0Ym9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcblxcdC8qIHBhZGRpbmc6IDAgNHJlbTsgKi9cXG5cXHRmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4uY29udGVudCBoMSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiRE0gU2VyaWYgRGlzcGxheVxcXCIsIHNlcmlmO1xcblxcdGNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmNvbnRlbnQtaW1hZ2Uge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS11cmwpO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdG1hcmdpbjogMnJlbSAwO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRpbmctaW1hZ2U6bnRoLW9mLXR5cGUoMm4pIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykgLyByZXBlYXQoMiwgYXV0byk7XFxuXFx0Z2FwOiAxcmVtIDIuNXJlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiBoMiB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgPiBkaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGdyaWQtdGVtcGxhdGU6IGF1dG8gLyBhdXRvIDFmciBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgaDMge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgc3BhbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxcHg7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IHAge1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ubWVudVR5cGVzID4gZGl2IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAycmVtO1xcblxcdGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCBhdXRvKSAvIDFmcjtcXG59XFxuXFxuLnRleHQtY29udGFjdHMge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciBoMiB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG59XFxuXFxuLnRleHQtY29udGFjdHMgPiBkaXYgPiBkaXYge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1jb250YWN0cyBsaSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLDhCQUE4QjtDQUM5QixnQkFBZ0I7Q0FDaEIsOEJBQThCO0FBQy9COztBQUVBOzs7Q0FHQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsMkJBQTJCO0NBQzNCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixvQ0FBb0M7Q0FDcEMsOEJBQThCO0NBQzlCLHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHFMQUFxTDtDQUNyTCwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLGlDQUFpQztDQUNqQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQiw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHNDQUFzQztDQUN0QyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixpQ0FBaUM7Q0FDakMsa0RBQWtEO0NBQ2xELGdCQUFnQjtDQUNoQixzREFBc0Q7QUFDdkQ7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULFNBQVM7Q0FDVCwwQ0FBMEM7Q0FDMUMsOENBQThDO0NBQzlDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLHlDQUF5QztDQUN6QyxtQkFBbUI7Q0FDbkIsNkNBQTZDO0NBQzdDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLE1BQU07Q0FDTixPQUFPO0NBQ1AsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsV0FBVztDQUNYLHNDQUFzQztDQUN0Qyx5QkFBeUI7Q0FDekIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCwyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLFdBQVc7Q0FDWCwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLGlDQUFpQztDQUNqQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLDBDQUEwQztBQUMzQzs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsdUNBQXVDO0NBQ3ZDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsc0NBQXNDO0NBQ3RDLDJCQUEyQjtDQUMzQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osYUFBYTtDQUNiLGNBQWM7Q0FDZCwyQkFBMkI7Q0FDM0Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnREFBZ0Q7Q0FDaEQsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztDQUNULG1DQUFtQztDQUNuQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsMENBQTBDO0FBQzNDOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7Q0FDVCxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNEJBQTRCO0NBQzVCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixTQUFTO0NBQ1QsNEJBQTRCO0NBQzVCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NlcmlmK0Rpc3BsYXkmZmFtaWx5PU5hbnVtK0dvdGhpYyZmYW1pbHk9Um9jaGVzdGVyJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG5cXHQtLW9yYW5nZS1hY2NlbnQ6ICNkNzk0MmQ7XFxuXFx0LS1ibGFjazogIzFkMWQxZDtcXG5cXHQtLWJsYWNrLXRyYW5zcGFyZW50OiAjMWQxZDFkNzU7XFxuXFx0LS13aGl0ZTogI2Y4ZmRmZjtcXG5cXHQtLXdoaXRlLXRyYW5zcGFyZW50OiAjZjhmZGZmNzU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMC4zcmVtO1xcblxcdGhlaWdodDogMC4zcmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiAjYzljOWM5MjE7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcblxcdC8qIGJvcmRlci1yYWRpdXM6IDUwdmg7ICovXFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pIC8gMWZyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXHRmb250LWZhbWlseTogXFxcIkRNIFNlcmlmIERpc3BsYXlcXFwiLCBzZXJpZjtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdG92ZXJmbG93OiBvdmVybGF5O1xcbn1cXG5cXG4uaGVhZGVyLWltYWdlIHtcXG5cXHRtaW4taGVpZ2h0OiA1MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDM3Njc4NDkxMTQtOTc2YjY3NTY4YjAyP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNTAwJnE9ODApO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG59XFxuXFxuLmhlYWRlci1pbWFnZSBoMSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTM0KTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXHRmb250LXNpemU6IDEwcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG5cXHRmb250LWZhbWlseTogXFxcIlJvY2hlc3RlclxcXCIsIGN1cnNpdmU7XFxuXFx0LyogZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7ICovXFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHQvKiBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjU1KSk7ICovXFxufVxcblxcbm5hdiB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMnJlbTtcXG5cXHRsZWZ0OiAxMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xcblxcdC0tdHJhbnNwYXJlbnQtYm9yZGVyOiB2YXIoLS13aGl0ZS10cmFuc3BhcmVudCk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcblxcdHBhZGRpbmc6IDByZW0gMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogOTl2aDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLCBib3JkZXItcmFkaXVzIDAuM3M7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubmF2IHVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gMHJlbTtcXG5cXHR3aWR0aDogOHJlbTtcXG5cXHRmb250LXNpemU6IDEuNHJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsc3ByZWFkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMDtcXG5cXHRoZWlnaHQ6IDRweDtcXG5cXHR3aWR0aDogOHJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG5cXHRyaWdodDogY2FsYygxNnJlbSArIDJyZW0pO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi51bmRlcmxpbmUubWVudSB7XFxuXFx0cmlnaHQ6IGNhbGMoOHJlbSArIDJyZW0pO1xcbn1cXG4udW5kZXJsaW5lLmNvbnRhY3Qge1xcblxcdHJpZ2h0OiBjYWxjKDByZW0gKyAycmVtKTtcXG59XFxuXFxuLmxvZ28ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2NoZXN0ZXJcXFwiLCBjdXJzaXZlO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRjb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRjb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0cGFkZGluZzogNXJlbSAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHdpZHRoOiBjbGFtcCgyNTBweCwgOTAlLCA5MDBweCk7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHRib3JkZXItdG9wOiBzb2xpZCAycHggdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxufVxcblxcbmZvb3RlciBhIHtcXG5cXHRjb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5jb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0LyogcGFkZGluZzogMCA0cmVtOyAqL1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5jb250ZW50IGgxIHtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJETSBTZXJpZiBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgaDIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uY29udGVudC1pbWFnZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXVybCk7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0bWFyZ2luOiAycmVtIDA7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGluZy1pbWFnZTpudGgtb2YtdHlwZSgybikge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCBhdXRvKSAvIHJlcGVhdCgyLCBhdXRvKTtcXG5cXHRnYXA6IDFyZW0gMi41cmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IGRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG8gMWZyIGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBoMyB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBzcGFuIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDFweDtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gcCB7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5tZW51VHlwZXMgPiBkaXYge1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDJyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIGF1dG8pIC8gMWZyO1xcbn1cXG5cXG4udGV4dC1jb250YWN0cyB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcbn1cXG5cXG4udGV4dC1jb250YWN0cyA+IGRpdiA+IGRpdiB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdhcDogMXJlbTtcXG5cXHRncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50ZXh0LWNvbnRhY3RzIGxpIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGNvbnRhY3QgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiByZW5kZXIobm9kZSkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXHRcdGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCBjb250YWN0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3Qgc2VjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBzZWMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0XHRcdGNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRcdFx0Y29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdFx0XHRtYWluVGl0bGUuaW5uZXJUZXh0ID0gXCJSZWFjaCBvdXQgdG8gdXNcIjtcblx0XHRcdHRpdGxlMS5pbm5lclRleHQgPSBcIlBob25lOlwiO1xuXHRcdFx0dGl0bGUyLmlubmVyVGV4dCA9IFwiRS1tYWlsOlwiO1xuXG5cdFx0XHRsaXN0MS5pbm5lckhUTUwgPSBgPGxpPjAxMi00MjMxMTIzPC9saT48bGk+MzM0LTc4NjgwMDA3OTwvbGk+YDtcblx0XHRcdGxpc3QyLmlubmVySFRNTCA9IGA8bGk+bm90cmVhbGVtYWlsQGFyYW5jaW9uZS5jb208L2xpPmA7XG5cblx0XHRcdHNlYzEuYXBwZW5kKHRpdGxlMSwgbGlzdDEpO1xuXHRcdFx0c2VjMi5hcHBlbmQodGl0bGUyLCBsaXN0Mik7XG5cblx0XHRcdG5vZGUuYXBwZW5kKG1haW5UaXRsZSwgc2VjMSwgc2VjMik7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9O1xuXHRcdGNvbnN0IHRpbWluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3Qgc2VjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBzZWMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRcdFx0Y29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdFx0XHRjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cblx0XHRcdG1haW5UaXRsZS5pbm5lclRleHQgPSBcIk91ciBUaW1pbmdzXCI7XG5cdFx0XHR0aXRsZTEuaW5uZXJUZXh0ID0gXCJNb24tVGh1OlwiO1xuXHRcdFx0dGl0bGUyLmlubmVyVGV4dCA9IFwiRnJpLVN1bjpcIjtcblxuXHRcdFx0bGlzdDEuaW5uZXJIVE1MID0gYDxsaT4wODowMC0yMDowMDwvbGk+YDtcblx0XHRcdGxpc3QyLmlubmVySFRNTCA9IGA8bGk+MDk6MzAtMjM6MzA8L2xpPmA7XG5cblx0XHRcdHNlYzEuYXBwZW5kKHRpdGxlMSwgbGlzdDEpO1xuXHRcdFx0c2VjMi5hcHBlbmQodGl0bGUyLCBsaXN0Mik7XG5cblx0XHRcdG5vZGUuYXBwZW5kKG1haW5UaXRsZSwgc2VjMSwgc2VjMik7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9O1xuXHRcdGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRtYXAuaW5uZXJIVE1MID0gYDxoMj5PdXIgTG9jYXRpb248L2gyPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNDc1MjEuMDkxNDIwMjc4MDU1ITJkMTIuNTA4ODY1ODAzMzAyODI1ITNkNDEuODkxMzkwMDUzNjU1NzIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweDIzZmY2YTVjYWQ0Zjk0ZDEhMnNCaXN0cm90JTIwTCYjMzk7QXJhbmNpb25lITVlMCEzbTIhMXNlbiEyc2luITR2MTYyNDI4NDg5NTUwMSE1bTIhMXNlbiEyc2luXCIgd2lkdGg9MTAwJSBoZWlnaHQ9XCIzNTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+YDtcblxuXHRcdGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuXHRcdGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhY3RzXCIpO1xuXG5cdFx0Y29udGFjdFRleHQuYXBwZW5kKGNvbnRhY3REZXRhaWxzKCksIHRpbWluZygpKTtcblx0XHRjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0VGV4dCwgbWFwKTtcblx0XHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJDb250YWN0IHVzXCI7XG5cdFx0Y29udGVudC5hcHBlbmQoaGVhZGluZywgY29udGFjdENvbnRhaW5lcik7XG5cdFx0bm9kZS5hcHBlbmQoY29udGVudCk7XG5cdH1cblxuXHRyZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbnRhY3QgfTtcbiIsImNvbnN0IG1lbnUgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiByZW5kZXIobm9kZSkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuXHRcdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0Y29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjb25zdCBtZW51QXJyYXkgPSBbXTtcblx0XHRjb25zdCBtZW51TGlzdCA9IFtcblx0XHRcdFwiQXBwZXRpemVyc1wiLFxuXHRcdFx0XCJBbnRpcGFzdG9cIixcblx0XHRcdFwiRW50cmVlXCIsXG5cdFx0XHRcIlBhc3RhXCIsXG5cdFx0XHRcIlBpenphXCIsXG5cdFx0XHRcIkJldmVyYWdlc1wiLFxuXHRcdF07XG5cblx0XHRmdW5jdGlvbiBtZW51R2VuZXJhdG9yKGl0ZW1OYW1lLCBpdGVtRGVzY3JpcHRpb24sIHByaWNlLCB0eXBlKSB7XG5cdFx0XHRjb25zdCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBpdGVtVGl0bGVQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRcdGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdGNvbnN0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0Y29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcblxuXHRcdFx0bWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG5cdFx0XHRtZW51SXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cdFx0XHRtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbURlc2NyaXB0aW9uO1xuXG5cdFx0XHRpdGVtVGl0bGVQYXJ0LmFwcGVuZChtZW51SXRlbU5hbWUsIHNlcGVyYXRvciwgbWVudUl0ZW1QcmljZSk7XG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbVRpdGxlUGFydCwgbWVudUl0ZW1EZXNjcmlwdGlvbik7XG5cblx0XHRcdG1lbnVBcnJheVt0eXBlXS5hcHBlbmQobWVudUl0ZW1Db250YWluZXIpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBiZXZlcmFnZUdlbmVyYXRvcihpdGVtTmFtZSwgcHJpY2UsIHR5cGUpIHtcblx0XHRcdGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IGl0ZW1UaXRsZVBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRcdFx0Y29uc3Qgc2VwZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHRjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0XHRcdG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tY29udGFpbmVyXCIpO1xuXG5cdFx0XHRtZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcblx0XHRcdG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuXHRcdFx0aXRlbVRpdGxlUGFydC5hcHBlbmQobWVudUl0ZW1OYW1lLCBzZXBlcmF0b3IsIG1lbnVJdGVtUHJpY2UpO1xuXHRcdFx0bWVudUl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1UaXRsZVBhcnQpO1xuXG5cdFx0XHRtZW51QXJyYXlbdHlwZV0uYXBwZW5kKG1lbnVJdGVtQ29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdFx0XHRub2RlVGl0bGUuaW5uZXJUZXh0ID0gbWVudUxpc3RbaV07XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQoXCJtZW51VHlwZXNcIik7XG5cdFx0XHRub2RlLmFwcGVuZChub2RlVGl0bGUpO1xuXHRcdFx0bWVudUFycmF5LnB1c2gobm9kZSk7XG5cdFx0fVxuXG5cdFx0bWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcblxuXHRcdGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cblx0XHRoZWFkaW5nLmlubmVyVGV4dCA9IFwiT3VyIE1lbnVcIjtcblxuXHRcdGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIG1lbnVTZWN0aW9uKTtcblx0XHRtZW51QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gbWVudVNlY3Rpb24uYXBwZW5kKGl0ZW0pKTtcblx0XHRub2RlLmFwcGVuZChjb250ZW50KTtcblx0XHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJHYXJsaWMgQnJlYWRcIixcblx0XHRcdFx0XCJXaXRoIG1lbHRlZCBwYXJtZXNhbiBjaGVlc2UgYW5kIGEgc3BlY2lhbCBibGVuZCBvZiBoZXJicyBhbmQgc3BpY2VzXCIsXG5cdFx0XHRcdDQsXG5cdFx0XHRcdDBcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIkNhcHJlc2VcIixcblx0XHRcdFx0XCJGcmVzaCB2aW5lIHJpcGVuZWQgdG9tYXRvIHNsaWNlcyB3aXRoIG1venphcmVsbGEgY2hlZXNlIGFuZCBiYXNpbCBsZWF2ZXMsIGRvdXNlIHdpdGggYmFsc2FtaWMgdmluZWdhciBhbmQgb2xpdmUgb2lsXCIsXG5cdFx0XHRcdDYsXG5cdFx0XHRcdDBcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlN0dWZmZWQgTXVzaHJvb21cIixcblx0XHRcdFx0XCJQYXJtZXNhbiwgUm9tYW5vIGFuZCBNb3p6YXJlbGxhIGNoZWVzZSwgY2xhbXMgYW5kIGhlcmIgYnJlYWRjcnVtbnMgYmFrZWQgaW4gbXVzaHJvb20gY2Fwc1wiLFxuXHRcdFx0XHQ3LFxuXHRcdFx0XHQwXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJDYWxhbWFyaVwiLFxuXHRcdFx0XHRcIkxpZ2h0bHkgYnJlYWRlZCBhbmQgZnJpZWQuIFNlcnZlZCB3aXRoIGxlbW9uIHdlZGdlcyBhbmQgbWFyaW5hcmEgc2F1Y2VcIixcblx0XHRcdFx0OCxcblx0XHRcdFx0MFxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiQnJ1c2NoZXR0YVwiLFxuXHRcdFx0XHRcIkhlaXJsb29tIHRvbWF0bywgcGlja2xlZCBnYXJsaWMsIHBhcm1pc2FuXCIsXG5cdFx0XHRcdDExLFxuXHRcdFx0XHQxXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcIkJhY29uLXdyYXBwZWQgRmlnc1wiLCBcImJhbHNhbWljIHJlZHVjdGlvblwiLCA5LCAxKTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiQmVlZiBDYXJhcGNjaW9cIixcblx0XHRcdFx0XCJQaWNrbGVkIHNoYWxsb3QsIGFydWd1aWEsIGdyYW5hIHBhZGFub1wiLFxuXHRcdFx0XHQxNixcblx0XHRcdFx0MVxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiU3RlYW1lZCBNdXNzZWxzXCIsXG5cdFx0XHRcdFwiU2xvdy1yb2FzdGVkIHRvbWF0bywgZmVubmVsLCBjYWxhYmFyaWFuIGNoaWxsaSBvaWwsIGdyaWxsZWQgYnJlYWRcIixcblx0XHRcdFx0MTgsXG5cdFx0XHRcdDFcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlBvbGxvIFBpY2NhdGFcIixcblx0XHRcdFx0XCJUZW5kZXIgY2hpY2tlbiBicmVhc3QgcG9pbmRlZCB0aGluIGFuZCBicmFpc2VkIGluIGEgZ2FybGljLWxlbW9uIHNhdWNlLCB3aXRoIHdoaXRlIHdpbmUgYW5kIGNhcGVycyBzZXJ2ZWQgb3ZlciByb2FzdGVkIHJlZCBwb3RhdG9lc1wiLFxuXHRcdFx0XHQxNSxcblx0XHRcdFx0MlxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiRnJpdHRvIE1pc3RvXCIsXG5cdFx0XHRcdFwiVGVtcHVyYSBiYXR0ZXJlZCBzaHJpbXAsIGNhbGFtYXJpLCB6dWNjaGluaSBhbmQgZWdncGxhbnQsIHNlcnZlZCB3aXRoIG1hcmluYXJhIHNhdWNlXCIsXG5cdFx0XHRcdDE1LFxuXHRcdFx0XHQyXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJQb2xsbyBBbGxhIFJvbWFuYVwiLFxuXHRcdFx0XHRcIkhhbGYgYSByb2FzdGVkIGNoaWNrZW4gd2l0aCBnYXJsaWMsIHNoYWxsb3RzLCByb3NlbWFyeSBhbmQgYnJvY2NvbGluaSwgc2VydmVkIG92ZXIgbWFzaGVkIHBvdGF0b2VzXCIsXG5cdFx0XHRcdDE4LFxuXHRcdFx0XHQyXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJTYWxtb24gU2ljaWxpYW5vXCIsXG5cdFx0XHRcdFwiR3JpbGxlZCBDaGlub29rIHNhbG1vbiBzZXJ2ZWQgd2l0aCBhcnRpY2hva2UgaGVhcnQsIGthbGFtYXRhIG9saWNlcywgY2FwZXJzIGFuZCBnYXJsaWMgc2F1Y2Ugb3ZlciBjb3JuIHBvbGVudGFcIixcblx0XHRcdFx0MjEsXG5cdFx0XHRcdDJcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlNwYWdoZXR0aSBQb21vZG9yb1wiLFxuXHRcdFx0XHRcIlNpbXBsZSBhbmQgZGVsaWNpb3Vycywgd2l0aCBob3VzZS1tYWRlIHRvbWF0by1iYXNpbCBtYXJpbmFyYSBkcml6emxlZCB3aXRoIFR1c2NhbiBvbGljZSBvaWxcIixcblx0XHRcdFx0MTEsXG5cdFx0XHRcdDNcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIkZldHR1Y2NpbmUgQ2FyYm9uYXJhXCIsXG5cdFx0XHRcdFwiUGFuY2V0dGEgYmFjb24gd2l0aCBzaGFsbG90cyBpbiBhIHBhcm1lc2FuIGNyZWFtIHNhdWNlIG92ZXIgZmV0dHVjaW5lXCIsXG5cdFx0XHRcdDEzLFxuXHRcdFx0XHQzXG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJTcXVhc2ggUmF2aW9saVwiLFxuXHRcdFx0XHRcIkhvdXNlLW1hZGUgcmF2aW9saSBzdHVmZmVkIHdpdGggYnV0dGVybnV0IHNxdWFzaCBpbiBhIGJyb3duZWQtYnV0dGVyIHNhZ2Ugc2F1Y2VcIixcblx0XHRcdFx0MTYsXG5cdFx0XHRcdDNcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIlBhZ2xpYSBFIFJlbm9cIixcblx0XHRcdFx0XCJIYW5kbWFkZSBzcGluYWNoIHRhZ2xpYXRlbGxhLCBwZWFzLCBwcm9zY2l1dHRvIGRpIFBhcm1hLCBQYXJtZWdnaWFubyBSZWdnaWFub1wiLFxuXHRcdFx0XHQxNCxcblx0XHRcdFx0M1xuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiUG90YXRvIEdub2NjaGlcIixcblx0XHRcdFx0XCJIYW5kLW1hZGUgcG90YXRvIGR1bXBsaW5ncyB3aXRoIHNhZ2UsIGJyb3duZWQgYnV0dGVyLCBmb250aW5hIGFuZCBnb3Jnb256b2xhIGNoZWVzZVwiLFxuXHRcdFx0XHQxNCxcblx0XHRcdFx0M1xuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiTWFyZ2hlcml0YVwiLFxuXHRcdFx0XHRcIlNhbiBNYXJ6YW5vIHRvbWF0byBzYXVjZSB3aXRoIGZyZXNoIG1venphcmVsbGEgYW5kIGJhc2lsXCIsXG5cdFx0XHRcdDEwLFxuXHRcdFx0XHQ0XG5cdFx0XHQpO1xuXHRcdFx0bWVudUdlbmVyYXRvcihcblx0XHRcdFx0XCJNYXJnaGVyaXRhXCIsXG5cdFx0XHRcdFwiU2FuIE1hcnphbm8gdG9tYXRvIHNhdWNlIHdpdGggZnJlc2ggbW96emFyZWxsYSBhbmQgYmFzaWxcIixcblx0XHRcdFx0MTAsXG5cdFx0XHRcdDRcblx0XHRcdCk7XG5cdFx0XHRtZW51R2VuZXJhdG9yKFxuXHRcdFx0XHRcIkZ1bmdoaVwiLFxuXHRcdFx0XHRcIlRocmVlIHR5cGVzIG9mIG11c2hyb29tcyB3aXRoIHRvbWF0bywgZnJlc2ggbW96emFyZWxsYSBhbmQgcGFyc2xleVwiLFxuXHRcdFx0XHQxMCxcblx0XHRcdFx0NFxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiQm9sb2duYVwiLFxuXHRcdFx0XHRcIlNwaWN5IHNhbGFtaSB3aWh0IEJvbG9nbmVzZSBtZWF0IHNhdWNlLCByb2FzdGVkIGdhcmxpYyBhbmQgZnJlc3QgbW96emFyZWxsYVwiLFxuXHRcdFx0XHQxMixcblx0XHRcdFx0NFxuXHRcdFx0KTtcblx0XHRcdG1lbnVHZW5lcmF0b3IoXG5cdFx0XHRcdFwiU2ljaWxpYW5cIixcblx0XHRcdFx0XCJTd2VldCBJdGFsaWFuIHNhdXNhZ2UsIHNwaWN5IENhcGljb2xhIGhhbSwgZm9udGluYSwgbW96emFyZWxsYSBhbmQgYmFzaWxcIixcblx0XHRcdFx0MTQsXG5cdFx0XHRcdDRcblx0XHRcdCk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIlNvZGFcIiwgMi43NSwgNSk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIkNvZmZlZS9UZWFcIiwgMS43NSwgNSk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIkJvdHRsZWQgV2F0ZXJcIiwgMi43NSwgNSk7XG5cdFx0XHRiZXZlcmFnZUdlbmVyYXRvcihcIkZyZXNoIExlbW9uYWRlXCIsIDEuNzUsIDUpO1xuXHRcdH0pKCk7XG5cdH1cblxuXHRyZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGhvbWUgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiByZW5kZXIobm9kZSkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGNvbnN0IHN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdFx0Y29uc3QgY29udGVudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRcdHBhcmFncmFwaC5pbm5lclRleHQgPVxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFdW0gdmVyaXRhdGlzIGFyY2hpdGVjdG8gYXRxdWUgZG9sb3J1bSB2ZWw/IEFzcGVybmF0dXIgZWEgYW5pbWkgdGVtcG9yaWJ1cyBsYWJvcnVtLCBkZWxlbml0aSBpbXBlZGl0IG1vbGxpdGlhLiBWZXJpdGF0aXMgdmVsaXQsIG5vbiBmdWdpdCB2b2x1cHRhdHVtIGV4cGxpY2FibyBuaWhpbCB2b2x1cHRhdGVzIGVhcnVtIGF1dCBxdWlhIGN1cGlkaXRhdGUgZHVjaW11cyBpZCB1bmRlIGRvbG9yaWJ1cyBuZXF1ZSBxdWFzaSBlc3QgZWFxdWUgbWF4aW1lIHF1b3MgbmVjZXNzaXRhdGlidXMgbWludXMgYW5pbWk/XCI7XG5cblx0XHRjb250ZW50SW1hZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXG5cdFx0XHRcIi0tdXJsXCIsXG5cdFx0XHRcInVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MjY0NDMyOS04ZjkyNDQ5YzFjNzg/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1NjcmcT04MClcIlxuXHRcdCk7XG5cblx0XHRoZWFkaW5nLmlubmVyVGV4dCA9IFwiRXhwZXJpZW5jZSBGaW5lIEl0YWxpYW4gRGluaW5nXCI7XG5cdFx0c3ViSGVhZGluZy5pbm5lclRleHQgPSBcIkdyZWF0IEZvb2QsIEdyZWF0ZXIgV2luZVwiO1xuXG5cdFx0Y29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblx0XHRjb250ZW50SW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaW1hZ2VcIik7XG5cblx0XHRjb250ZW50LmFwcGVuZChoZWFkaW5nLCBzdWJIZWFkaW5nLCBjb250ZW50SW1hZ2UsIHBhcmFncmFwaCk7XG5cblx0XHRub2RlLmFwcGVuZChjb250ZW50KTtcblx0fVxuXG5cdHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuY29uc3QgdW5pdmVyc2FsU2tlbGV0b24gPSAoZnVuY3Rpb24gKCkge1xuXHRjb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IG5hdkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCB1bmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBuYXZFbGVtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0Y29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0Y29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0Y29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgaGVhZGVyTWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuXHRoZWFkZXJNYWluVGV4dC5pbm5lclRleHQgPSBcImFyYW5jaW9uZVwiO1xuXHRob21lTmF2LmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuXHRtZW51TmF2LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXHRhYm91dE5hdi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblx0bG9nb1RleHQuaW5uZXJUZXh0ID0gXCJhcmFuY2lvbmVcIjtcblx0Zm9vdGVyLmlubmVyVGV4dCA9IFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBcIjtcblx0Zm9vdGVyTGluay5pbm5lclRleHQgPSBcImJlcnNlcmt3YWxcIjtcblxuXHRsb2dvVGV4dC5jbGFzc0xpc3QuYWRkKFwibG9nby10ZXh0XCIpO1xuXHRuYXZMb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pbWFnZVwiKTtcblx0dW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tc2VjdGlvblwiKTtcblxuXHRmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2JlcnNlcmt3YWwuZ2l0aHViLmlvXCIpO1xuXG5cdG5hdkxvZ28uYXBwZW5kKGxvZ29UZXh0KTtcblx0bmF2RWxlbWVudHMuYXBwZW5kKGhvbWVOYXYsIG1lbnVOYXYsIGFib3V0TmF2KTtcblx0bmF2aWdhdGlvbi5hcHBlbmQobmF2TG9nbywgdW5kZXJsaW5lLCBuYXZFbGVtZW50cyk7XG5cdGhlYWRlci5hcHBlbmQoaGVhZGVyTWFpblRleHQpO1xuXHRmb290ZXIuYXBwZW5kKGZvb3RlckxpbmspO1xuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgbWFpbiwgbmF2aWdhdGlvbiwgZm9vdGVyKTtcblxuXHRmdW5jdGlvbiBjbGVhck1haW4oKSB7XG5cdFx0Y29uc3QgZXZlcnl0aGluZyA9IG1haW4ucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRcdGV2ZXJ5dGhpbmcucmVtb3ZlKCk7XG5cdH1cblxuXHRjb25zdCBvcHRpb25zID0geyByb290OiBudWxsLCB0aHJlc2hvbGQ6IDAsIHJvb3RNYXJnaW46IFwiLTIwMHB4XCIgfTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcblx0XHRlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG5cdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZnVsbHNwcmVhZFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcImZ1bGxzcHJlYWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIG9wdGlvbnMpO1xuXHRvYnNlcnZlci5vYnNlcnZlKGhlYWRlcik7XG5cdGhvbWUucmVuZGVyKG1haW4pO1xuXG5cdGhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHR1bmRlcmxpbmUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVcIiwgXCJjb250YWN0XCIpO1xuXHRcdGNsZWFyTWFpbigpO1xuXHRcdGhvbWUucmVuZGVyKG1haW4pO1xuXHR9KTtcblx0bWVudU5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHVuZGVybGluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGFjdFwiKTtcblx0XHR1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cdFx0Y2xlYXJNYWluKCk7XG5cdFx0bWVudS5yZW5kZXIobWFpbik7XG5cdH0pO1xuXHRhYm91dE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHVuZGVybGluZS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudVwiKTtcblx0XHR1bmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cdFx0Y2xlYXJNYWluKCk7XG5cdFx0Y29udGFjdC5yZW5kZXIobWFpbik7XG5cdH0pO1xuXG5cdC8vIGNsZWFyTWFpbigpO1xuXHRyZXR1cm4geyBoZWFkZXIsIG1haW4sIGhvbWVOYXYsIG1lbnVOYXYsIGFib3V0TmF2IH07XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==