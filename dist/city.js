/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/city.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/city.js":
/*!************************!*\
  !*** ./src/js/city.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./src/js/modules/MobileMenu.js\");\n/* harmony import */ var _modules_LocationSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/LocationSelector */ \"./src/js/modules/LocationSelector.js\");\n/* harmony import */ var _modules_BranchList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/BranchList */ \"./src/js/modules/BranchList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nvar locationSelector = new _modules_LocationSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nvar branchList = new _modules_BranchList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/js/city.js?");

/***/ }),

/***/ "./src/js/modules/BranchList.js":
/*!**************************************!*\
  !*** ./src/js/modules/BranchList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass BranchList {\r\n  constructor () {\r\n    this.button = document.querySelector('.branch-list__button');\r\n    this.list = document.querySelector('.branch-list');\r\n\r\n    console.dir(this.button);\r\n\r\n    this.events();\r\n    this.reset();\r\n  }\r\n\r\n\r\n  /**\r\n   * Add event listeners\r\n   */\r\n  events () {\r\n    this.button.addEventListener('click', (event) => {\r\n      console.log('toggle list');\r\n      this.toggleList(event);\r\n    });\r\n  }\r\n\r\n\r\n  /**\r\n   * Reset initial menu state\r\n   */\r\n  reset () {\r\n    this.isHidden = true;\r\n    this.list.classList.add('branch-list--hidden');\r\n    this.setButtonText(this.isHidden);\r\n  }\r\n\r\n\r\n  toggleList (event) {\r\n    event.preventDefault();\r\n\r\n    this.isHidden = !this.isHidden;\r\n    this.list.classList.toggle('branch-list--hidden');\r\n    this.setButtonText(this.isHidden);\r\n  }\r\n  \r\n  setButtonText (isHidden) {\r\n    let buttonText = this.button.textContent;\r\n    let newText = '<div class=\"branch-list__button-mid\"></div>';\r\n    console.log(isHidden);\r\n\r\n    if (isHidden) {\r\n      newText = 'Посмотреть филиалы списком' + newText;\r\n    } else {\r\n      newText = 'Скрыть список филиалов'+ newText;\r\n    }\r\n\r\n    this.button.innerHTML = newText;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BranchList);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/BranchList.js?");

/***/ }),

/***/ "./src/js/modules/LocationSelector.js":
/*!********************************************!*\
  !*** ./src/js/modules/LocationSelector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass LocationSelector {\r\n  constructor () {\r\n    this.city = document.querySelector('.city-select__city');\r\n    this.citySelector = document.querySelector('.location-selector');\r\n    this.citySelectorClose = document.querySelector('.location-selector__close');\r\n\r\n    this.reset();\r\n    this.events();\r\n  }\r\n\r\n  events () {\r\n    this.city.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n\r\n      this.toggleSelector();\r\n    });\r\n\r\n    this.citySelectorClose.addEventListener('click', () => {\r\n      event.preventDefault();\r\n\r\n      this.toggleSelector();\r\n    });\r\n  }\r\n\r\n  reset () {\r\n    this.citySelector.classList.add('location-selector--hidden');\r\n    this.citySelectorClose.classList.add('location-selector__close--hidden');\r\n  }\r\n  \r\n  toggleSelector () {\r\n    this.citySelector.classList.toggle('location-selector--hidden');\r\n    this.citySelectorClose.classList.toggle('location-selector__close--hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationSelector);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/LocationSelector.js?");

/***/ }),

/***/ "./src/js/modules/MobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/MobileMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass MobileMenu {\r\n  constructor () {\r\n    this.menuButton = document.querySelector('.menu-button');\r\n    this.menu = document.querySelector('.hero__nav');\r\n\r\n    this.reset();\r\n    this.events();\r\n  }\r\n\r\n\r\n  /**\r\n   * Add event listeners\r\n   */\r\n  events () {\r\n    this.menuButton.addEventListener('click', (event) => {\r\n      this.toggleMenu(event);\r\n    });\r\n  }\r\n\r\n\r\n  /**\r\n   * Reset initial menu state\r\n   */\r\n  reset () {\r\n    this.menuButton.classList.remove('menu-button--close');\r\n    this.menu.classList.add('hero__nav--hidden');\r\n  }\r\n\r\n\r\n  /**\r\n   * Toggle menu state\r\n   * @param {MouseEvent} event\r\n   */\r\n  toggleMenu (event) {\r\n    event.preventDefault();\r\n\r\n    this.menuButton.classList.toggle('menu-button--close');\r\n    this.menu.classList.toggle('hero__nav--hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/MobileMenu.js?");

/***/ })

/******/ });