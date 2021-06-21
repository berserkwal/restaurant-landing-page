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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Rochester&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--orange-accent: #d7942d;\n\t--black: #1d1d1d;\n\t--black-transparent: #1d1d1d75;\n\t--white: #f8fdff;\n\t--white-transparent: #f8fdff75;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.4rem;\n\theight: 0.4rem;\n}\n\n::-webkit-scrollbar-thumb {\n\tbackground: #c9c9c944;\n\tbackdrop-filter: blur(12px);\n\tborder-radius: 50vh;\n}\n\nbody {\n\t/* min-height: 200vh; */\n\tdisplay: grid;\n\tgrid-template: repeat(3, auto) / 1fr;\n\tbackground-color: var(--black);\n\tfont-family: \"DM Serif Display\", serif;\n\tcolor: var(--white);\n\toverflow: overlay;\n}\n\n.header-image {\n\tmin-height: 500px;\n\tbackground-image: url(https://images.unsplash.com/photo-1503767849114-976b67568b02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-blend-mode: luminosity;\n\tbackground-size: cover;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n}\n\n.header-image h1 {\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tdisplay: flex;\n\tbackground-color: rgba(0, 0, 0, 0.534);\n\tline-height: 1;\n\tfont-size: 10rem;\n\tcolor: var(--orange-accent);\n\tfont-family: \"Rochester\", cursive;\n\t/* font-family: \"Herr Von Muellerhoff\", cursive; */\n\tfont-weight: 100;\n\t/* filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.55)); */\n}\n\nnav {\n\tposition: fixed;\n\ttop: 2rem;\n\tleft: 10%;\n\tbackground-color: var(--black-transparent);\n\t--transparent-border: var(--white-transparent);\n\tbackdrop-filter: blur(20px);\n\tpadding: 0rem 2rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 80%;\n\tbox-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);\n\tborder-radius: 99vh;\n\ttransition: all 0.5s ease, border-radius 0.3s;\n\toverflow: hidden;\n\tuser-select: none;\n}\n\nnav ul {\n\tdisplay: flex;\n\tlist-style: none;\n}\n\nnav ul li {\n\tposition: relative;\n\tcursor: pointer;\n\tpadding: 1.5rem 0rem;\n\twidth: 8rem;\n\tfont-size: 1.4rem;\n\ttext-align: center;\n}\n\n/* nav ul > li + li {\n\tborder-right: 1px solid var(--transparent-border);\n}\nnav ul > li:first-child {\n\tborder-left: 1px solid var(--transparent-border);\n\tborder-right: 1px solid var(--transparent-border);\n} */\n\n.fullspread {\n\tbackground-color: var(--black);\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tborder-radius: 0;\n}\n\n.underline {\n\tposition: absolute;\n\tbottom: 0;\n\theight: 4px;\n\twidth: 8rem;\n\tbackground-color: var(--orange-accent);\n\tright: calc(16rem + 2rem);\n\ttransition: all 0.3s ease;\n}\n\n.underline.menu {\n\tright: calc(8rem + 2rem);\n}\n.underline.about {\n\tright: calc(0rem + 2rem);\n}\n\n.logo {\n\tfont-size: 1.2rem;\n}\n\n.logo-text {\n\tdisplay: inline-block;\n\tfont-family: \"Rochester\", cursive;\n\t/* font-family: \"Herr Von Muellerhoff\", cursive; */\n\tfont-size: 3rem;\n\tcolor: var(--orange-accent);\n\ttext-align: center;\n\tuser-select: none;\n}\n\n.main-section {\n\tmargin: 0 auto;\n\theight: 100vh;\n\tcolor: var(--orange-accent);\n\t/* background-color: white; */\n\tpadding: 5rem 0;\n\twidth: clamp(250px, 90%, 800px);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;CACC,wBAAwB;CACxB,gBAAgB;CAChB,8BAA8B;CAC9B,gBAAgB;CAChB,8BAA8B;AAC/B;;AAEA;;;CAGC,sBAAsB;CACtB,SAAS;CACT,UAAU;AACX;;AAEA;CACC,aAAa;CACb,cAAc;AACf;;AAEA;CACC,qBAAqB;CACrB,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,uBAAuB;CACvB,aAAa;CACb,oCAAoC;CACpC,8BAA8B;CAC9B,sCAAsC;CACtC,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,qLAAqL;CACrL,2BAA2B;CAC3B,4BAA4B;CAC5B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,mBAAmB;CACnB,uBAAuB;CACvB,aAAa;CACb,sCAAsC;CACtC,cAAc;CACd,gBAAgB;CAChB,2BAA2B;CAC3B,iCAAiC;CACjC,kDAAkD;CAClD,gBAAgB;CAChB,sDAAsD;AACvD;;AAEA;CACC,eAAe;CACf,SAAS;CACT,SAAS;CACT,0CAA0C;CAC1C,8CAA8C;CAC9C,2BAA2B;CAC3B,kBAAkB;CAClB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,UAAU;CACV,yCAAyC;CACzC,mBAAmB;CACnB,6CAA6C;CAC7C,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,oBAAoB;CACpB,WAAW;CACX,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;;;;;;GAMG;;AAEH;CACC,8BAA8B;CAC9B,WAAW;CACX,MAAM;CACN,OAAO;CACP,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,WAAW;CACX,sCAAsC;CACtC,yBAAyB;CACzB,yBAAyB;AAC1B;;AAEA;CACC,wBAAwB;AACzB;AACA;CACC,wBAAwB;AACzB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,iCAAiC;CACjC,kDAAkD;CAClD,eAAe;CACf,2BAA2B;CAC3B,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,aAAa;CACb,2BAA2B;CAC3B,6BAA6B;CAC7B,eAAe;CACf,+BAA+B;AAChC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Rochester&display=swap\");\n\n:root {\n\t--orange-accent: #d7942d;\n\t--black: #1d1d1d;\n\t--black-transparent: #1d1d1d75;\n\t--white: #f8fdff;\n\t--white-transparent: #f8fdff75;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.4rem;\n\theight: 0.4rem;\n}\n\n::-webkit-scrollbar-thumb {\n\tbackground: #c9c9c944;\n\tbackdrop-filter: blur(12px);\n\tborder-radius: 50vh;\n}\n\nbody {\n\t/* min-height: 200vh; */\n\tdisplay: grid;\n\tgrid-template: repeat(3, auto) / 1fr;\n\tbackground-color: var(--black);\n\tfont-family: \"DM Serif Display\", serif;\n\tcolor: var(--white);\n\toverflow: overlay;\n}\n\n.header-image {\n\tmin-height: 500px;\n\tbackground-image: url(https://images.unsplash.com/photo-1503767849114-976b67568b02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-blend-mode: luminosity;\n\tbackground-size: cover;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n}\n\n.header-image h1 {\n\theight: 100%;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tdisplay: flex;\n\tbackground-color: rgba(0, 0, 0, 0.534);\n\tline-height: 1;\n\tfont-size: 10rem;\n\tcolor: var(--orange-accent);\n\tfont-family: \"Rochester\", cursive;\n\t/* font-family: \"Herr Von Muellerhoff\", cursive; */\n\tfont-weight: 100;\n\t/* filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.55)); */\n}\n\nnav {\n\tposition: fixed;\n\ttop: 2rem;\n\tleft: 10%;\n\tbackground-color: var(--black-transparent);\n\t--transparent-border: var(--white-transparent);\n\tbackdrop-filter: blur(20px);\n\tpadding: 0rem 2rem;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 80%;\n\tbox-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);\n\tborder-radius: 99vh;\n\ttransition: all 0.5s ease, border-radius 0.3s;\n\toverflow: hidden;\n\tuser-select: none;\n}\n\nnav ul {\n\tdisplay: flex;\n\tlist-style: none;\n}\n\nnav ul li {\n\tposition: relative;\n\tcursor: pointer;\n\tpadding: 1.5rem 0rem;\n\twidth: 8rem;\n\tfont-size: 1.4rem;\n\ttext-align: center;\n}\n\n/* nav ul > li + li {\n\tborder-right: 1px solid var(--transparent-border);\n}\nnav ul > li:first-child {\n\tborder-left: 1px solid var(--transparent-border);\n\tborder-right: 1px solid var(--transparent-border);\n} */\n\n.fullspread {\n\tbackground-color: var(--black);\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tborder-radius: 0;\n}\n\n.underline {\n\tposition: absolute;\n\tbottom: 0;\n\theight: 4px;\n\twidth: 8rem;\n\tbackground-color: var(--orange-accent);\n\tright: calc(16rem + 2rem);\n\ttransition: all 0.3s ease;\n}\n\n.underline.menu {\n\tright: calc(8rem + 2rem);\n}\n.underline.about {\n\tright: calc(0rem + 2rem);\n}\n\n.logo {\n\tfont-size: 1.2rem;\n}\n\n.logo-text {\n\tdisplay: inline-block;\n\tfont-family: \"Rochester\", cursive;\n\t/* font-family: \"Herr Von Muellerhoff\", cursive; */\n\tfont-size: 3rem;\n\tcolor: var(--orange-accent);\n\ttext-align: center;\n\tuser-select: none;\n}\n\n.main-section {\n\tmargin: 0 auto;\n\theight: 100vh;\n\tcolor: var(--orange-accent);\n\t/* background-color: white; */\n\tpadding: 5rem 0;\n\twidth: clamp(250px, 90%, 800px);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
const about = (function () {
	function render(node) {
		const para = document.createElement("para");
		const heading = document.createElement("h1");
		heading.innerText = "About";
		para.innerText =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis architecto atque dolorum vel? Aspernatur ea animi temporibus laborum, deleniti impedit mollitia. Veritatis velit, non fugit voluptatum explicabo nihil voluptates earum aut quia cupiditate ducimus id unde doloribus neque quasi est eaque maxime quos necessitatibus minus animi? Iste odit rerum tempore quia mollitia sunt, natus dolor doloremque magni eos debitis nulla totam, fugit dolorem animi repellendus optio, quis quo labore voluptatum nisi repudiandae placeat eaque minus! Debitis quod enim porro! Quas consequatur culpa facere vel voluptas nemo laboriosam optio similique corrupti nisi unde pariatur aspernatur harum odio, deleniti magnam iure vero ratione asperiores. Rerum illo unde a tempora corporis similique earum alias exercitationem impedit molestiae voluptas placeat modi iusto numquam perspiciatis, facere, quasi velit qui? Ab dignissimos ipsam quod atque mollitia id! Vero odio pariatur laboriosam at voluptate iusto magni suscipit incidunt eveniet, perspiciatis id quam nisi veritatis fugit doloremque molestiae dolores hic ullam sequi dicta perferendis voluptas! Minus dignissimos ut soluta reiciendis eveniet repellat quo eaque odit deserunt maxime ipsum quaerat amet eum rerum error harum quae porro, esse, nesciunt aperiam at! Explicabo optio commodi deserunt exercitationem perspiciatis, corporis ipsa quos numquam ex architecto, aspernatur dolorem doloremque nobis velit!";
		node.append(heading, para);
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
		const para = document.createElement("para");
		const heading = document.createElement("h1");
		heading.innerText = "Menu";
		para.innerText =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis architecto atque dolorum vel? Aspernatur ea animi temporibus laborum, deleniti impedit mollitia. Veritatis velit, non fugit voluptatum explicabo nihil voluptates earum aut quia cupiditate ducimus id unde doloribus neque quasi est eaque maxime quos necessitatibus minus animi? Iste odit rerum tempore quia mollitia sunt, natus dolor doloremque magni eos debitis nulla totam, fugit dolorem animi repellendus optio, quis quo labore voluptatum nisi repudiandae placeat eaque minus! Debitis quod enim porro! Quas consequatur culpa facere vel voluptas nemo laboriosam optio similique corrupti nisi unde pariatur aspernatur harum odio, deleniti magnam iure vero ratione asperiores. Rerum illo unde a tempora corporis similique earum alias exercitationem impedit molestiae voluptas placeat modi iusto numquam perspiciatis, facere, quasi velit qui? Ab dignissimos ipsam quod atque mollitia id! Vero odio pariatur laboriosam at voluptate iusto magni suscipit incidunt eveniet, perspiciatis id quam nisi veritatis fugit doloremque molestiae dolores hic ullam sequi dicta perferendis voluptas! Minus dignissimos ut soluta reiciendis eveniet repellat quo eaque odit deserunt maxime ipsum quaerat amet eum rerum error harum quae porro, esse, nesciunt aperiam at! Explicabo optio commodi deserunt exercitationem perspiciatis, corporis ipsa quos numquam ex architecto, aspernatur dolorem doloremque nobis velit!";
		node.append(heading, para);
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




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

	headerMainText.innerText = "arancione";
	homeNav.innerText = "Home";
	menuNav.innerText = "Menu";
	aboutNav.innerText = "About";
	logoText.innerText = "arancione";

	logoText.classList.add("logo-text");
	navLogo.classList.add("logo");
	header.classList.add("header-image");
	underline.classList.add("underline");
	main.classList.add("main-section");

	navLogo.append(logoText);
	navElements.append(homeNav, menuNav, aboutNav);
	navigation.append(navLogo, underline, navElements);
	header.append(headerMainText);

	document.body.append(header, main, navigation);

	function clearMain() {
		const everything = main.querySelectorAll("*");
		everything.forEach((item) => {
			item.remove();
		});
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
		underline.classList.remove("menu", "about");
		clearMain();
		home.render(main);
	});
	menuNav.addEventListener("click", () => {
		underline.classList.remove("about");
		underline.classList.add("menu");
		clearMain();
		_menu__WEBPACK_IMPORTED_MODULE_1__.menu.render(main);
	});
	aboutNav.addEventListener("click", () => {
		underline.classList.remove("menu");
		underline.classList.add("about");
		clearMain();
		_about__WEBPACK_IMPORTED_MODULE_2__.about.render(main);
	});

	// clearMain();
	return { header, main, homeNav, menuNav, aboutNav };
})();

const home = (function () {
	function render(node) {
		const para = document.createElement("para");
		const headingHome = document.createElement("h1");
		headingHome.innerText = "Home";
		para.innerText =
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis architecto atque dolorum vel? Aspernatur ea animi temporibus laborum, deleniti impedit mollitia. Veritatis velit, non fugit voluptatum explicabo nihil voluptates earum aut quia cupiditate ducimus id unde doloribus neque quasi est eaque maxime quos necessitatibus minus animi? Iste odit rerum tempore quia mollitia sunt, natus dolor doloremque magni eos debitis nulla totam, fugit dolorem animi repellendus optio, quis quo labore voluptatum nisi repudiandae placeat eaque minus! Debitis quod enim porro! Quas consequatur culpa facere vel voluptas nemo laboriosam optio similique corrupti nisi unde pariatur aspernatur harum odio, deleniti magnam iure vero ratione asperiores. Rerum illo unde a tempora corporis similique earum alias exercitationem impedit molestiae voluptas placeat modi iusto numquam perspiciatis, facere, quasi velit qui? Ab dignissimos ipsam quod atque mollitia id! Vero odio pariatur laboriosam at voluptate iusto magni suscipit incidunt eveniet, perspiciatis id quam nisi veritatis fugit doloremque molestiae dolores hic ullam sequi dicta perferendis voluptas! Minus dignissimos ut soluta reiciendis eveniet repellat quo eaque odit deserunt maxime ipsum quaerat amet eum rerum error harum quae porro, esse, nesciunt aperiam at! Explicabo optio commodi deserunt exercitationem perspiciatis, corporis ipsa quos numquam ex architecto, aspernatur dolorem doloremque nobis velit!";
		node.append(headingHome, para);
	}

	return { render };
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJh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Ozs7Ozs7Ozs7OztBQ05xQjtBQUNTO0FBQ0U7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhDQUFXO0FBQ2IsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnREFBWTtBQUNkLEVBQUU7O0FBRUY7QUFDQSxTQUFTO0FBQ1QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNULENBQUMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTZXJpZitEaXNwbGF5JmZhbWlseT1Sb2NoZXN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdC0tb3JhbmdlLWFjY2VudDogI2Q3OTQyZDtcXG5cXHQtLWJsYWNrOiAjMWQxZDFkO1xcblxcdC0tYmxhY2stdHJhbnNwYXJlbnQ6ICMxZDFkMWQ3NTtcXG5cXHQtLXdoaXRlOiAjZjhmZGZmO1xcblxcdC0td2hpdGUtdHJhbnNwYXJlbnQ6ICNmOGZkZmY3NTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAwLjRyZW07XFxuXFx0aGVpZ2h0OiAwLjRyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6ICNjOWM5Yzk0NDtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTB2aDtcXG59XFxuXFxuYm9keSB7XFxuXFx0LyogbWluLWhlaWdodDogMjAwdmg7ICovXFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgYXV0bykgLyAxZnI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiRE0gU2VyaWYgRGlzcGxheVxcXCIsIHNlcmlmO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0b3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5oZWFkZXItaW1hZ2Uge1xcblxcdG1pbi1oZWlnaHQ6IDUwMHB4O1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMzc2Nzg0OTExNC05NzZiNjc1NjhiMDI/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1MDAmcT04MCk7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5oZWFkZXItaW1hZ2UgaDEge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUzNCk7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0Zm9udC1zaXplOiAxMHJlbTtcXG5cXHRjb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2NoZXN0ZXJcXFwiLCBjdXJzaXZlO1xcblxcdC8qIGZvbnQtZmFtaWx5OiBcXFwiSGVyciBWb24gTXVlbGxlcmhvZmZcXFwiLCBjdXJzaXZlOyAqL1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0LyogZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC41NSkpOyAqL1xcbn1cXG5cXG5uYXYge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDJyZW07XFxuXFx0bGVmdDogMTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcXG5cXHQtLXRyYW5zcGFyZW50LWJvcmRlcjogdmFyKC0td2hpdGUtdHJhbnNwYXJlbnQpO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG5cXHRwYWRkaW5nOiAwcmVtIDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR3aWR0aDogODAlO1xcblxcdGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDk5dmg7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSwgYm9yZGVyLXJhZGl1cyAwLjNzO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbm5hdiB1bCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cGFkZGluZzogMS41cmVtIDByZW07XFxuXFx0d2lkdGg6IDhyZW07XFxuXFx0Zm9udC1zaXplOiAxLjRyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBuYXYgdWwgPiBsaSArIGxpIHtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC1ib3JkZXIpO1xcbn1cXG5uYXYgdWwgPiBsaTpmaXJzdC1jaGlsZCB7XFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC1ib3JkZXIpO1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LWJvcmRlcik7XFxufSAqL1xcblxcbi5mdWxsc3ByZWFkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMDtcXG5cXHRoZWlnaHQ6IDRweDtcXG5cXHR3aWR0aDogOHJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG5cXHRyaWdodDogY2FsYygxNnJlbSArIDJyZW0pO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi51bmRlcmxpbmUubWVudSB7XFxuXFx0cmlnaHQ6IGNhbGMoOHJlbSArIDJyZW0pO1xcbn1cXG4udW5kZXJsaW5lLmFib3V0IHtcXG5cXHRyaWdodDogY2FsYygwcmVtICsgMnJlbSk7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9jaGVzdGVyXFxcIiwgY3Vyc2l2ZTtcXG5cXHQvKiBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTsgKi9cXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRjb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuXFx0cGFkZGluZzogNXJlbSAwO1xcblxcdHdpZHRoOiBjbGFtcCgyNTBweCwgOTAlLCA4MDBweCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLDhCQUE4QjtDQUM5QixnQkFBZ0I7Q0FDaEIsOEJBQThCO0FBQy9COztBQUVBOzs7Q0FHQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isb0NBQW9DO0NBQ3BDLDhCQUE4QjtDQUM5QixzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixxTEFBcUw7Q0FDckwsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHNDQUFzQztDQUN0QyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixpQ0FBaUM7Q0FDakMsa0RBQWtEO0NBQ2xELGdCQUFnQjtDQUNoQixzREFBc0Q7QUFDdkQ7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULFNBQVM7Q0FDVCwwQ0FBMEM7Q0FDMUMsOENBQThDO0NBQzlDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLHlDQUF5QztDQUN6QyxtQkFBbUI7Q0FDbkIsNkNBQTZDO0NBQzdDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0NBQ0MsOEJBQThCO0NBQzlCLFdBQVc7Q0FDWCxNQUFNO0NBQ04sT0FBTztDQUNQLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLFdBQVc7Q0FDWCxzQ0FBc0M7Q0FDdEMseUJBQXlCO0NBQ3pCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGlDQUFpQztDQUNqQyxrREFBa0Q7Q0FDbEQsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsNkJBQTZCO0NBQzdCLGVBQWU7Q0FDZiwrQkFBK0I7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2VyaWYrRGlzcGxheSZmYW1pbHk9Um9jaGVzdGVyJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG5cXHQtLW9yYW5nZS1hY2NlbnQ6ICNkNzk0MmQ7XFxuXFx0LS1ibGFjazogIzFkMWQxZDtcXG5cXHQtLWJsYWNrLXRyYW5zcGFyZW50OiAjMWQxZDFkNzU7XFxuXFx0LS13aGl0ZTogI2Y4ZmRmZjtcXG5cXHQtLXdoaXRlLXRyYW5zcGFyZW50OiAjZjhmZGZmNzU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMC40cmVtO1xcblxcdGhlaWdodDogMC40cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiAjYzljOWM5NDQ7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwdmg7XFxufVxcblxcbmJvZHkge1xcblxcdC8qIG1pbi1oZWlnaHQ6IDIwMHZoOyAqL1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIGF1dG8pIC8gMWZyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXHRmb250LWZhbWlseTogXFxcIkRNIFNlcmlmIERpc3BsYXlcXFwiLCBzZXJpZjtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdG92ZXJmbG93OiBvdmVybGF5O1xcbn1cXG5cXG4uaGVhZGVyLWltYWdlIHtcXG5cXHRtaW4taGVpZ2h0OiA1MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDM3Njc4NDkxMTQtOTc2YjY3NTY4YjAyP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNTAwJnE9ODApO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uaGVhZGVyLWltYWdlIGgxIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MzQpO1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdGZvbnQtc2l6ZTogMTByZW07XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9jaGVzdGVyXFxcIiwgY3Vyc2l2ZTtcXG5cXHQvKiBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTsgKi9cXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdC8qIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNTUpKTsgKi9cXG59XFxuXFxubmF2IHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAycmVtO1xcblxcdGxlZnQ6IDEwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay10cmFuc3BhcmVudCk7XFxuXFx0LS10cmFuc3BhcmVudC1ib3JkZXI6IHZhcigtLXdoaXRlLXRyYW5zcGFyZW50KTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuXFx0cGFkZGluZzogMHJlbSAycmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG5cXHRib3JkZXItcmFkaXVzOiA5OXZoO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UsIGJvcmRlci1yYWRpdXMgMC4zcztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5uYXYgdWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xcblxcdHdpZHRoOiA4cmVtO1xcblxcdGZvbnQtc2l6ZTogMS40cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogbmF2IHVsID4gbGkgKyBsaSB7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYm9yZGVyKTtcXG59XFxubmF2IHVsID4gbGk6Zmlyc3QtY2hpbGQge1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYm9yZGVyKTtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC1ib3JkZXIpO1xcbn0gKi9cXG5cXG4uZnVsbHNwcmVhZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi51bmRlcmxpbmUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDA7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0d2lkdGg6IDhyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWFjY2VudCk7XFxuXFx0cmlnaHQ6IGNhbGMoMTZyZW0gKyAycmVtKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4udW5kZXJsaW5lLm1lbnUge1xcblxcdHJpZ2h0OiBjYWxjKDhyZW0gKyAycmVtKTtcXG59XFxuLnVuZGVybGluZS5hYm91dCB7XFxuXFx0cmlnaHQ6IGNhbGMoMHJlbSArIDJyZW0pO1xcbn1cXG5cXG4ubG9nbyB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5sb2dvLXRleHQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LWZhbWlseTogXFxcIlJvY2hlc3RlclxcXCIsIGN1cnNpdmU7XFxuXFx0LyogZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7ICovXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1vcmFuZ2UtYWNjZW50KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLXNlY3Rpb24ge1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZS1hY2NlbnQpO1xcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcblxcdHBhZGRpbmc6IDVyZW0gMDtcXG5cXHR3aWR0aDogY2xhbXAoMjUwcHgsIDkwJSwgODAwcHgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgYWJvdXQgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiByZW5kZXIobm9kZSkge1xuXHRcdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYVwiKTtcblx0XHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuXHRcdHBhcmEuaW5uZXJUZXh0ID1cblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXVtIHZlcml0YXRpcyBhcmNoaXRlY3RvIGF0cXVlIGRvbG9ydW0gdmVsPyBBc3Blcm5hdHVyIGVhIGFuaW1pIHRlbXBvcmlidXMgbGFib3J1bSwgZGVsZW5pdGkgaW1wZWRpdCBtb2xsaXRpYS4gVmVyaXRhdGlzIHZlbGl0LCBub24gZnVnaXQgdm9sdXB0YXR1bSBleHBsaWNhYm8gbmloaWwgdm9sdXB0YXRlcyBlYXJ1bSBhdXQgcXVpYSBjdXBpZGl0YXRlIGR1Y2ltdXMgaWQgdW5kZSBkb2xvcmlidXMgbmVxdWUgcXVhc2kgZXN0IGVhcXVlIG1heGltZSBxdW9zIG5lY2Vzc2l0YXRpYnVzIG1pbnVzIGFuaW1pPyBJc3RlIG9kaXQgcmVydW0gdGVtcG9yZSBxdWlhIG1vbGxpdGlhIHN1bnQsIG5hdHVzIGRvbG9yIGRvbG9yZW1xdWUgbWFnbmkgZW9zIGRlYml0aXMgbnVsbGEgdG90YW0sIGZ1Z2l0IGRvbG9yZW0gYW5pbWkgcmVwZWxsZW5kdXMgb3B0aW8sIHF1aXMgcXVvIGxhYm9yZSB2b2x1cHRhdHVtIG5pc2kgcmVwdWRpYW5kYWUgcGxhY2VhdCBlYXF1ZSBtaW51cyEgRGViaXRpcyBxdW9kIGVuaW0gcG9ycm8hIFF1YXMgY29uc2VxdWF0dXIgY3VscGEgZmFjZXJlIHZlbCB2b2x1cHRhcyBuZW1vIGxhYm9yaW9zYW0gb3B0aW8gc2ltaWxpcXVlIGNvcnJ1cHRpIG5pc2kgdW5kZSBwYXJpYXR1ciBhc3Blcm5hdHVyIGhhcnVtIG9kaW8sIGRlbGVuaXRpIG1hZ25hbSBpdXJlIHZlcm8gcmF0aW9uZSBhc3BlcmlvcmVzLiBSZXJ1bSBpbGxvIHVuZGUgYSB0ZW1wb3JhIGNvcnBvcmlzIHNpbWlsaXF1ZSBlYXJ1bSBhbGlhcyBleGVyY2l0YXRpb25lbSBpbXBlZGl0IG1vbGVzdGlhZSB2b2x1cHRhcyBwbGFjZWF0IG1vZGkgaXVzdG8gbnVtcXVhbSBwZXJzcGljaWF0aXMsIGZhY2VyZSwgcXVhc2kgdmVsaXQgcXVpPyBBYiBkaWduaXNzaW1vcyBpcHNhbSBxdW9kIGF0cXVlIG1vbGxpdGlhIGlkISBWZXJvIG9kaW8gcGFyaWF0dXIgbGFib3Jpb3NhbSBhdCB2b2x1cHRhdGUgaXVzdG8gbWFnbmkgc3VzY2lwaXQgaW5jaWR1bnQgZXZlbmlldCwgcGVyc3BpY2lhdGlzIGlkIHF1YW0gbmlzaSB2ZXJpdGF0aXMgZnVnaXQgZG9sb3JlbXF1ZSBtb2xlc3RpYWUgZG9sb3JlcyBoaWMgdWxsYW0gc2VxdWkgZGljdGEgcGVyZmVyZW5kaXMgdm9sdXB0YXMhIE1pbnVzIGRpZ25pc3NpbW9zIHV0IHNvbHV0YSByZWljaWVuZGlzIGV2ZW5pZXQgcmVwZWxsYXQgcXVvIGVhcXVlIG9kaXQgZGVzZXJ1bnQgbWF4aW1lIGlwc3VtIHF1YWVyYXQgYW1ldCBldW0gcmVydW0gZXJyb3IgaGFydW0gcXVhZSBwb3JybywgZXNzZSwgbmVzY2l1bnQgYXBlcmlhbSBhdCEgRXhwbGljYWJvIG9wdGlvIGNvbW1vZGkgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0gcGVyc3BpY2lhdGlzLCBjb3Jwb3JpcyBpcHNhIHF1b3MgbnVtcXVhbSBleCBhcmNoaXRlY3RvLCBhc3Blcm5hdHVyIGRvbG9yZW0gZG9sb3JlbXF1ZSBub2JpcyB2ZWxpdCFcIjtcblx0XHRub2RlLmFwcGVuZChoZWFkaW5nLCBwYXJhKTtcblx0fVxuXG5cdHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuZXhwb3J0IHsgYWJvdXQgfTtcbiIsImNvbnN0IG1lbnUgPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiByZW5kZXIobm9kZSkge1xuXHRcdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYVwiKTtcblx0XHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG5cdFx0cGFyYS5pbm5lclRleHQgPVxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFdW0gdmVyaXRhdGlzIGFyY2hpdGVjdG8gYXRxdWUgZG9sb3J1bSB2ZWw/IEFzcGVybmF0dXIgZWEgYW5pbWkgdGVtcG9yaWJ1cyBsYWJvcnVtLCBkZWxlbml0aSBpbXBlZGl0IG1vbGxpdGlhLiBWZXJpdGF0aXMgdmVsaXQsIG5vbiBmdWdpdCB2b2x1cHRhdHVtIGV4cGxpY2FibyBuaWhpbCB2b2x1cHRhdGVzIGVhcnVtIGF1dCBxdWlhIGN1cGlkaXRhdGUgZHVjaW11cyBpZCB1bmRlIGRvbG9yaWJ1cyBuZXF1ZSBxdWFzaSBlc3QgZWFxdWUgbWF4aW1lIHF1b3MgbmVjZXNzaXRhdGlidXMgbWludXMgYW5pbWk/IElzdGUgb2RpdCByZXJ1bSB0ZW1wb3JlIHF1aWEgbW9sbGl0aWEgc3VudCwgbmF0dXMgZG9sb3IgZG9sb3JlbXF1ZSBtYWduaSBlb3MgZGViaXRpcyBudWxsYSB0b3RhbSwgZnVnaXQgZG9sb3JlbSBhbmltaSByZXBlbGxlbmR1cyBvcHRpbywgcXVpcyBxdW8gbGFib3JlIHZvbHVwdGF0dW0gbmlzaSByZXB1ZGlhbmRhZSBwbGFjZWF0IGVhcXVlIG1pbnVzISBEZWJpdGlzIHF1b2QgZW5pbSBwb3JybyEgUXVhcyBjb25zZXF1YXR1ciBjdWxwYSBmYWNlcmUgdmVsIHZvbHVwdGFzIG5lbW8gbGFib3Jpb3NhbSBvcHRpbyBzaW1pbGlxdWUgY29ycnVwdGkgbmlzaSB1bmRlIHBhcmlhdHVyIGFzcGVybmF0dXIgaGFydW0gb2RpbywgZGVsZW5pdGkgbWFnbmFtIGl1cmUgdmVybyByYXRpb25lIGFzcGVyaW9yZXMuIFJlcnVtIGlsbG8gdW5kZSBhIHRlbXBvcmEgY29ycG9yaXMgc2ltaWxpcXVlIGVhcnVtIGFsaWFzIGV4ZXJjaXRhdGlvbmVtIGltcGVkaXQgbW9sZXN0aWFlIHZvbHVwdGFzIHBsYWNlYXQgbW9kaSBpdXN0byBudW1xdWFtIHBlcnNwaWNpYXRpcywgZmFjZXJlLCBxdWFzaSB2ZWxpdCBxdWk/IEFiIGRpZ25pc3NpbW9zIGlwc2FtIHF1b2QgYXRxdWUgbW9sbGl0aWEgaWQhIFZlcm8gb2RpbyBwYXJpYXR1ciBsYWJvcmlvc2FtIGF0IHZvbHVwdGF0ZSBpdXN0byBtYWduaSBzdXNjaXBpdCBpbmNpZHVudCBldmVuaWV0LCBwZXJzcGljaWF0aXMgaWQgcXVhbSBuaXNpIHZlcml0YXRpcyBmdWdpdCBkb2xvcmVtcXVlIG1vbGVzdGlhZSBkb2xvcmVzIGhpYyB1bGxhbSBzZXF1aSBkaWN0YSBwZXJmZXJlbmRpcyB2b2x1cHRhcyEgTWludXMgZGlnbmlzc2ltb3MgdXQgc29sdXRhIHJlaWNpZW5kaXMgZXZlbmlldCByZXBlbGxhdCBxdW8gZWFxdWUgb2RpdCBkZXNlcnVudCBtYXhpbWUgaXBzdW0gcXVhZXJhdCBhbWV0IGV1bSByZXJ1bSBlcnJvciBoYXJ1bSBxdWFlIHBvcnJvLCBlc3NlLCBuZXNjaXVudCBhcGVyaWFtIGF0ISBFeHBsaWNhYm8gb3B0aW8gY29tbW9kaSBkZXNlcnVudCBleGVyY2l0YXRpb25lbSBwZXJzcGljaWF0aXMsIGNvcnBvcmlzIGlwc2EgcXVvcyBudW1xdWFtIGV4IGFyY2hpdGVjdG8sIGFzcGVybmF0dXIgZG9sb3JlbSBkb2xvcmVtcXVlIG5vYmlzIHZlbGl0IVwiO1xuXHRcdG5vZGUuYXBwZW5kKGhlYWRpbmcsIHBhcmEpO1xuXHR9XG5cblx0cmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBhYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XG5cbmNvbnN0IHVuaXZlcnNhbFNrZWxldG9uID0gKGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBuYXZMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y29uc3QgdW5kZXJsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgbmF2RWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdGNvbnN0IGFib3V0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGhlYWRlck1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5cdGhlYWRlck1haW5UZXh0LmlubmVyVGV4dCA9IFwiYXJhbmNpb25lXCI7XG5cdGhvbWVOYXYuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG5cdG1lbnVOYXYuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG5cdGFib3V0TmF2LmlubmVyVGV4dCA9IFwiQWJvdXRcIjtcblx0bG9nb1RleHQuaW5uZXJUZXh0ID0gXCJhcmFuY2lvbmVcIjtcblxuXHRsb2dvVGV4dC5jbGFzc0xpc3QuYWRkKFwibG9nby10ZXh0XCIpO1xuXHRuYXZMb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pbWFnZVwiKTtcblx0dW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tc2VjdGlvblwiKTtcblxuXHRuYXZMb2dvLmFwcGVuZChsb2dvVGV4dCk7XG5cdG5hdkVsZW1lbnRzLmFwcGVuZChob21lTmF2LCBtZW51TmF2LCBhYm91dE5hdik7XG5cdG5hdmlnYXRpb24uYXBwZW5kKG5hdkxvZ28sIHVuZGVybGluZSwgbmF2RWxlbWVudHMpO1xuXHRoZWFkZXIuYXBwZW5kKGhlYWRlck1haW5UZXh0KTtcblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIG5hdmlnYXRpb24pO1xuXG5cdGZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcblx0XHRjb25zdCBldmVyeXRoaW5nID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcblx0XHRldmVyeXRoaW5nLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0ucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcHRpb25zID0geyByb290OiBudWxsLCB0aHJlc2hvbGQ6IDAsIHJvb3RNYXJnaW46IFwiLTIwMHB4XCIgfTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcblx0XHRlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG5cdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0bmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZnVsbHNwcmVhZFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcImZ1bGxzcHJlYWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIG9wdGlvbnMpO1xuXHRvYnNlcnZlci5vYnNlcnZlKGhlYWRlcik7XG5cdGhvbWUucmVuZGVyKG1haW4pO1xuXG5cdGhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHR1bmRlcmxpbmUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVcIiwgXCJhYm91dFwiKTtcblx0XHRjbGVhck1haW4oKTtcblx0XHRob21lLnJlbmRlcihtYWluKTtcblx0fSk7XG5cdG1lbnVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHR1bmRlcmxpbmUuY2xhc3NMaXN0LnJlbW92ZShcImFib3V0XCIpO1xuXHRcdHVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblx0XHRjbGVhck1haW4oKTtcblx0XHRtZW51LnJlbmRlcihtYWluKTtcblx0fSk7XG5cdGFib3V0TmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0dW5kZXJsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xuXHRcdHVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG5cdFx0Y2xlYXJNYWluKCk7XG5cdFx0YWJvdXQucmVuZGVyKG1haW4pO1xuXHR9KTtcblxuXHQvLyBjbGVhck1haW4oKTtcblx0cmV0dXJuIHsgaGVhZGVyLCBtYWluLCBob21lTmF2LCBtZW51TmF2LCBhYm91dE5hdiB9O1xufSkoKTtcblxuY29uc3QgaG9tZSA9IChmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIHJlbmRlcihub2RlKSB7XG5cdFx0Y29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhXCIpO1xuXHRcdGNvbnN0IGhlYWRpbmdIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdGhlYWRpbmdIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuXHRcdHBhcmEuaW5uZXJUZXh0ID1cblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXVtIHZlcml0YXRpcyBhcmNoaXRlY3RvIGF0cXVlIGRvbG9ydW0gdmVsPyBBc3Blcm5hdHVyIGVhIGFuaW1pIHRlbXBvcmlidXMgbGFib3J1bSwgZGVsZW5pdGkgaW1wZWRpdCBtb2xsaXRpYS4gVmVyaXRhdGlzIHZlbGl0LCBub24gZnVnaXQgdm9sdXB0YXR1bSBleHBsaWNhYm8gbmloaWwgdm9sdXB0YXRlcyBlYXJ1bSBhdXQgcXVpYSBjdXBpZGl0YXRlIGR1Y2ltdXMgaWQgdW5kZSBkb2xvcmlidXMgbmVxdWUgcXVhc2kgZXN0IGVhcXVlIG1heGltZSBxdW9zIG5lY2Vzc2l0YXRpYnVzIG1pbnVzIGFuaW1pPyBJc3RlIG9kaXQgcmVydW0gdGVtcG9yZSBxdWlhIG1vbGxpdGlhIHN1bnQsIG5hdHVzIGRvbG9yIGRvbG9yZW1xdWUgbWFnbmkgZW9zIGRlYml0aXMgbnVsbGEgdG90YW0sIGZ1Z2l0IGRvbG9yZW0gYW5pbWkgcmVwZWxsZW5kdXMgb3B0aW8sIHF1aXMgcXVvIGxhYm9yZSB2b2x1cHRhdHVtIG5pc2kgcmVwdWRpYW5kYWUgcGxhY2VhdCBlYXF1ZSBtaW51cyEgRGViaXRpcyBxdW9kIGVuaW0gcG9ycm8hIFF1YXMgY29uc2VxdWF0dXIgY3VscGEgZmFjZXJlIHZlbCB2b2x1cHRhcyBuZW1vIGxhYm9yaW9zYW0gb3B0aW8gc2ltaWxpcXVlIGNvcnJ1cHRpIG5pc2kgdW5kZSBwYXJpYXR1ciBhc3Blcm5hdHVyIGhhcnVtIG9kaW8sIGRlbGVuaXRpIG1hZ25hbSBpdXJlIHZlcm8gcmF0aW9uZSBhc3BlcmlvcmVzLiBSZXJ1bSBpbGxvIHVuZGUgYSB0ZW1wb3JhIGNvcnBvcmlzIHNpbWlsaXF1ZSBlYXJ1bSBhbGlhcyBleGVyY2l0YXRpb25lbSBpbXBlZGl0IG1vbGVzdGlhZSB2b2x1cHRhcyBwbGFjZWF0IG1vZGkgaXVzdG8gbnVtcXVhbSBwZXJzcGljaWF0aXMsIGZhY2VyZSwgcXVhc2kgdmVsaXQgcXVpPyBBYiBkaWduaXNzaW1vcyBpcHNhbSBxdW9kIGF0cXVlIG1vbGxpdGlhIGlkISBWZXJvIG9kaW8gcGFyaWF0dXIgbGFib3Jpb3NhbSBhdCB2b2x1cHRhdGUgaXVzdG8gbWFnbmkgc3VzY2lwaXQgaW5jaWR1bnQgZXZlbmlldCwgcGVyc3BpY2lhdGlzIGlkIHF1YW0gbmlzaSB2ZXJpdGF0aXMgZnVnaXQgZG9sb3JlbXF1ZSBtb2xlc3RpYWUgZG9sb3JlcyBoaWMgdWxsYW0gc2VxdWkgZGljdGEgcGVyZmVyZW5kaXMgdm9sdXB0YXMhIE1pbnVzIGRpZ25pc3NpbW9zIHV0IHNvbHV0YSByZWljaWVuZGlzIGV2ZW5pZXQgcmVwZWxsYXQgcXVvIGVhcXVlIG9kaXQgZGVzZXJ1bnQgbWF4aW1lIGlwc3VtIHF1YWVyYXQgYW1ldCBldW0gcmVydW0gZXJyb3IgaGFydW0gcXVhZSBwb3JybywgZXNzZSwgbmVzY2l1bnQgYXBlcmlhbSBhdCEgRXhwbGljYWJvIG9wdGlvIGNvbW1vZGkgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0gcGVyc3BpY2lhdGlzLCBjb3Jwb3JpcyBpcHNhIHF1b3MgbnVtcXVhbSBleCBhcmNoaXRlY3RvLCBhc3Blcm5hdHVyIGRvbG9yZW0gZG9sb3JlbXF1ZSBub2JpcyB2ZWxpdCFcIjtcblx0XHRub2RlLmFwcGVuZChoZWFkaW5nSG9tZSwgcGFyYSk7XG5cdH1cblxuXHRyZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9