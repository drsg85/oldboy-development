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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/LanguageSelector.js":
/*!********************************************!*\
  !*** ./src/js/modules/LanguageSelector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass LanguageSelector {\r\n  constructor() {\r\n    this.langSelect = document.querySelector('.language-select');\r\n    \r\n    if (this.langSelect) {\r\n      this.langButton = this.langSelect.querySelector('.language-select__current');\r\n      this.langPopup = this.langSelect.querySelector('.language-select__popup');\r\n      this.reset();\r\n      this.addEvents();\r\n    }\r\n  }\r\n\r\n  addEvents() {\r\n    this.langButton.addEventListener('click', () => {\r\n      this.togglePopup();\r\n    });\r\n\r\n    document.addEventListener('click', (evt) => {\r\n      if(evt.target != this.langButton && evt.target != this.langPopup) {\r\n        this.reset();\r\n      }\r\n    });\r\n  }\r\n\r\n  reset() {\r\n    this.langPopup.classList.add('language-select__popup--hidden');\r\n  }\r\n\r\n  togglePopup() {\r\n    this.langPopup.classList.toggle('language-select__popup--hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/LanguageSelector.js?");

/***/ }),

/***/ "./src/js/modules/LocationSearch.js":
/*!******************************************!*\
  !*** ./src/js/modules/LocationSearch.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass LocationSearch {\r\n  constructor () {\r\n    // Location selector (for faster search)\r\n    this.locationSelector = document.querySelector('.location-selector');\r\n\r\n    // Search form elements\r\n    this.locationForm = this.locationSelector.querySelector('.city-form__form');\r\n    this.locationInput = this.locationSelector.querySelector('.city-form__input');\r\n\r\n    // Search results elements\r\n    this.resultsSection = this.locationSelector.querySelector('.search-results');\r\n    this.resultsList = this.locationSelector.querySelector('.search-results__list');\r\n    this.notFoundLabel = this.locationSelector.querySelector('.search-results__not-found');\r\n\r\n    // Check if not European version\r\n    if (this.locationForm) {\r\n      this.branches = this.generateBranches();\r\n      this.addEvents();\r\n      this.hideResults();\r\n    }\r\n  }\r\n\r\n\r\n  /**\r\n   * Adds events listeners\r\n   */\r\n  addEvents () {\r\n    this.locationForm.addEventListener('submit', (evt) => {\r\n      evt.preventDefault();\r\n    });\r\n\r\n    this.locationForm.addEventListener('input', (evt) => {\r\n      let searchPhrase = this.locationInput.value;\r\n      if (searchPhrase.length <= 0) {\r\n        this.hideResults();\r\n      }\r\n    });\r\n\r\n    this.locationInput.addEventListener('keyup', (evt) => {\r\n      let searchPhrase = this.locationInput.value;\r\n      if (searchPhrase.length > 0) {\r\n        let filteredBranches = this.filterBranches(this.branches, searchPhrase);\r\n        this.showFound(filteredBranches);\r\n      } else {\r\n        this.hideResults();\r\n      }\r\n    });\r\n  }\r\n\r\n\r\n  /**\r\n   * Returns an array of objects representing branches\r\n   * @return {Array}\r\n   */\r\n  generateBranches () {\r\n    let branches = [];\r\n    let locationLists = this.locationSelector.querySelectorAll('.location-list');\r\n\r\n    for (let i = 0; i < locationLists.length; i++) {\r\n      let city = locationLists[i].querySelector('.location-list__city').textContent;\r\n      let items = locationLists[i].querySelectorAll('.location-list__item');\r\n\r\n      for (let j = 0; j < items.length; j++) {\r\n        let itemLink = items[j].querySelector('a');\r\n        let stations = items[j].querySelectorAll('.location-list__metro span');\r\n\r\n        let branch = {\r\n          city: city,\r\n          address: itemLink.textContent,\r\n          link: itemLink.href,\r\n          stations: []\r\n        };\r\n\r\n        for (let k = 0; k < stations.length; k++) {\r\n          branch.stations.push(stations[k].textContent);\r\n        }\r\n\r\n        branches.push(branch);\r\n      }\r\n    }\r\n\r\n    return branches;\r\n  }\r\n\r\n\r\n  /**\r\n   * Filters an array of branches and returns an array\r\n   * of branches that include searchText\r\n   * @param {Array} branchList\r\n   * @param {string} searchText\r\n   * @return {Array}\r\n   */\r\n  filterBranches (branchList, searchText) {\r\n    searchText = searchText.toLocaleLowerCase();\r\n\r\n    let filteredBranches = branchList.filter((branch) => {\r\n      if (branch.city.toLowerCase().includes(searchText)) {\r\n        return true;\r\n      } else if (branch.address.toLowerCase().includes(searchText)) {\r\n        return true;\r\n      } else {\r\n        for (let i = 0; i < branch.stations.length; i++) {\r\n          if (branch.stations[i].toLowerCase().includes(searchText)) {\r\n            return true;\r\n          }\r\n        }\r\n\r\n        return false;\r\n      }\r\n    });\r\n\r\n    return filteredBranches;\r\n  }\r\n\r\n\r\n  /**\r\n   * Renders found branches\r\n   * @param {Array} foundBranches\r\n   */\r\n  showFound (foundBranches) {\r\n    // Showing results wrapper\r\n    this.resultsSection.style.display= 'block';\r\n\r\n    // Cleaning results list\r\n    while (this.resultsList.firstChild) {\r\n      this.resultsList.removeChild(this.resultsList.firstChild);\r\n    }\r\n\r\n    if (foundBranches.length > 0) {\r\n      let docFragment = document.createDocumentFragment();\r\n\r\n      // Adding branches\r\n      foundBranches.forEach((branch) => {\r\n        let item = document.createElement('li');\r\n        item.classList.add('search-results__item');\r\n\r\n        let link = document.createElement('a');\r\n        link.classList.add('search-results__link');\r\n        link.textContent = branch.city + ', ' + branch.address;\r\n        link.href = branch.link;\r\n        item.appendChild(link);\r\n\r\n        if (branch.stations.length > 0) {\r\n          let metro = document.createElement('div');\r\n          metro.classList.add('search-results__metro');\r\n\r\n          branch.stations.forEach((station) => {\r\n            let stationElement = document.createElement('span');\r\n            stationElement.textContent = station;\r\n            metro.appendChild(stationElement);\r\n          });\r\n\r\n          item.appendChild(metro);\r\n        }\r\n\r\n        docFragment.appendChild(item);\r\n      });\r\n  \r\n      this.resultsList.appendChild(docFragment);\r\n      this.notFoundLabel.style.display = 'none';\r\n    } else {\r\n      this.notFoundLabel.style.display = 'block';\r\n    }\r\n  }\r\n\r\n\r\n  hideResults () {\r\n    this.resultsSection.style.display = 'none';\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationSearch);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/LocationSearch.js?");

/***/ }),

/***/ "./src/js/modules/LocationSelector.js":
/*!********************************************!*\
  !*** ./src/js/modules/LocationSelector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass LocationSelector {\r\n  constructor () {\r\n    this.city = document.querySelector('.city-select');\r\n    this.citySelector = document.querySelector('.location-selector');\r\n    this.citySelectorClose = document.querySelector('.location-selector__close');\r\n    this.cityInput = document.querySelector('.city-form__input');\r\n\r\n    this.reset();\r\n    this.events();\r\n  }\r\n\r\n\r\n  /**\r\n   * Adds click events to open and close city selector\r\n   */\r\n  events () {\r\n    this.city.addEventListener('click', (evt) => {\r\n      evt.preventDefault();\r\n\r\n      this.toggleSelector();\r\n      setTimeout(() => {\r\n        this.cityInput.focus();\r\n      }, 250);\r\n    });\r\n\r\n    this.citySelectorClose.addEventListener('click', (evt) => {\r\n      evt.preventDefault();\r\n\r\n      this.toggleSelector();\r\n    });\r\n  }\r\n\r\n\r\n  /**\r\n   * Reset city selector state\r\n   */\r\n  reset () {\r\n    this.citySelector.classList.add('location-selector--hidden');\r\n    this.citySelectorClose.classList.add('location-selector__close--hidden');\r\n  }\r\n\r\n\r\n  /**\r\n   * Toggle city selector stace (open/closed)\r\n   */\r\n  toggleSelector () {\r\n    this.citySelector.classList.toggle('location-selector--hidden');\r\n    this.citySelectorClose.classList.toggle('location-selector__close--hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationSelector);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/LocationSelector.js?");

/***/ }),

/***/ "./src/js/modules/MobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/MobileMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass MobileMenu {\r\n  constructor () {\r\n    this.menuButton = document.querySelector('.menu-button');\r\n    this.menu = document.querySelector('.hero__nav');\r\n    this.menuLinks = document.querySelectorAll('.main-nav__link');\r\n\r\n    this.reset();\r\n    this.events();\r\n  }\r\n\r\n\r\n  /**\r\n   * Add event listeners\r\n   */\r\n  events () {\r\n    this.menuButton.addEventListener('click', () => {\r\n      this.toggleMenu();\r\n    });\r\n\r\n    for (let i = 0; i < this.menuLinks.length; i++) {\r\n      this.menuLinks[i].addEventListener('click', () => {\r\n        this.toggleMenu();\r\n      });\r\n    }\r\n  }\r\n\r\n\r\n  /**\r\n   * Reset initial menu state\r\n   */\r\n  reset () {\r\n    this.menuButton.classList.remove('menu-button--close');\r\n    this.menu.classList.add('hero__nav--hidden');\r\n  }\r\n\r\n\r\n  /**\r\n   * Toggle menu state\r\n   */\r\n  toggleMenu () {\r\n    this.menuButton.classList.toggle('menu-button--close');\r\n    this.menu.classList.toggle('hero__nav--hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/MobileMenu.js?");

/***/ }),

/***/ "./src/js/modules/UpButton.js":
/*!************************************!*\
  !*** ./src/js/modules/UpButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass UpButton {\r\n  constructor() {\r\n    this.upButton = document.querySelector('.up-button');\r\n    this.upButton.style.opacity = '0';\r\n\r\n    if (this.upButton) {\r\n      this.addEvents();\r\n    }\r\n  }\r\n\r\n\r\n  addEvents() {\r\n    this.upButton.addEventListener('click', (evt) => {\r\n      evt.preventDefault();\r\n      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});\r\n    });\r\n\r\n    document.addEventListener('scroll', (evt) => {\r\n      console.log(window.innerHeight, window, scrollY);\r\n      if(window.scrollY > window.innerHeight) {\r\n        this.upButton.style.opacity = '1';\r\n      } else {\r\n        this.upButton.style.opacity = '0';\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpButton);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/UpButton.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./src/js/modules/MobileMenu.js\");\n/* harmony import */ var _modules_LocationSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/LocationSelector */ \"./src/js/modules/LocationSelector.js\");\n/* harmony import */ var _modules_LocationSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/LocationSearch */ \"./src/js/modules/LocationSearch.js\");\n/* harmony import */ var _modules_UpButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UpButton */ \"./src/js/modules/UpButton.js\");\n/* harmony import */ var _modules_LanguageSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/LanguageSelector */ \"./src/js/modules/LanguageSelector.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// import smoothscroll from 'smoothscroll-polyfill';\r\n\r\n\r\nconst mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst locationSelector = new _modules_LocationSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst locationSearch = new _modules_LocationSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst upButton = new _modules_UpButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n// smoothscroll.polyfill();\r\n// window.__forceSmoothScrollPolyfill__ = true;\r\nconst langSelector = new _modules_LanguageSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ })

/******/ });