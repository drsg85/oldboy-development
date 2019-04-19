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

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */\n(function () {\n  'use strict';\n\n  // polyfill\n  function polyfill() {\n    // aliases\n    var w = window;\n    var d = document;\n\n    // return if scroll behavior is supported and polyfill is not forced\n    if (\n      'scrollBehavior' in d.documentElement.style &&\n      w.__forceSmoothScrollPolyfill__ !== true\n    ) {\n      return;\n    }\n\n    // globals\n    var Element = w.HTMLElement || w.Element;\n    var SCROLL_TIME = 468;\n\n    // object gathering original scroll methods\n    var original = {\n      scroll: w.scroll || w.scrollTo,\n      scrollBy: w.scrollBy,\n      elementScroll: Element.prototype.scroll || scrollElement,\n      scrollIntoView: Element.prototype.scrollIntoView\n    };\n\n    // define timing method\n    var now =\n      w.performance && w.performance.now\n        ? w.performance.now.bind(w.performance)\n        : Date.now;\n\n    /**\n     * indicates if a the current browser is made by Microsoft\n     * @method isMicrosoftBrowser\n     * @param {String} userAgent\n     * @returns {Boolean}\n     */\n    function isMicrosoftBrowser(userAgent) {\n      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];\n\n      return new RegExp(userAgentPatterns.join('|')).test(userAgent);\n    }\n\n    /*\n     * IE has rounding bug rounding down clientHeight and clientWidth and\n     * rounding up scrollHeight and scrollWidth causing false positives\n     * on hasScrollableSpace\n     */\n    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;\n\n    /**\n     * changes scroll position inside an element\n     * @method scrollElement\n     * @param {Number} x\n     * @param {Number} y\n     * @returns {undefined}\n     */\n    function scrollElement(x, y) {\n      this.scrollLeft = x;\n      this.scrollTop = y;\n    }\n\n    /**\n     * returns result of applying ease math function to a number\n     * @method ease\n     * @param {Number} k\n     * @returns {Number}\n     */\n    function ease(k) {\n      return 0.5 * (1 - Math.cos(Math.PI * k));\n    }\n\n    /**\n     * indicates if a smooth behavior should be applied\n     * @method shouldBailOut\n     * @param {Number|Object} firstArg\n     * @returns {Boolean}\n     */\n    function shouldBailOut(firstArg) {\n      if (\n        firstArg === null ||\n        typeof firstArg !== 'object' ||\n        firstArg.behavior === undefined ||\n        firstArg.behavior === 'auto' ||\n        firstArg.behavior === 'instant'\n      ) {\n        // first argument is not an object/null\n        // or behavior is auto, instant or undefined\n        return true;\n      }\n\n      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {\n        // first argument is an object and behavior is smooth\n        return false;\n      }\n\n      // throw error when behavior is not supported\n      throw new TypeError(\n        'behavior member of ScrollOptions ' +\n          firstArg.behavior +\n          ' is not a valid value for enumeration ScrollBehavior.'\n      );\n    }\n\n    /**\n     * indicates if an element has scrollable space in the provided axis\n     * @method hasScrollableSpace\n     * @param {Node} el\n     * @param {String} axis\n     * @returns {Boolean}\n     */\n    function hasScrollableSpace(el, axis) {\n      if (axis === 'Y') {\n        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;\n      }\n\n      if (axis === 'X') {\n        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;\n      }\n    }\n\n    /**\n     * indicates if an element has a scrollable overflow property in the axis\n     * @method canOverflow\n     * @param {Node} el\n     * @param {String} axis\n     * @returns {Boolean}\n     */\n    function canOverflow(el, axis) {\n      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];\n\n      return overflowValue === 'auto' || overflowValue === 'scroll';\n    }\n\n    /**\n     * indicates if an element can be scrolled in either axis\n     * @method isScrollable\n     * @param {Node} el\n     * @param {String} axis\n     * @returns {Boolean}\n     */\n    function isScrollable(el) {\n      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');\n      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');\n\n      return isScrollableY || isScrollableX;\n    }\n\n    /**\n     * finds scrollable parent of an element\n     * @method findScrollableParent\n     * @param {Node} el\n     * @returns {Node} el\n     */\n    function findScrollableParent(el) {\n      while (el !== d.body && isScrollable(el) === false) {\n        el = el.parentNode || el.host;\n      }\n\n      return el;\n    }\n\n    /**\n     * self invoked function that, given a context, steps through scrolling\n     * @method step\n     * @param {Object} context\n     * @returns {undefined}\n     */\n    function step(context) {\n      var time = now();\n      var value;\n      var currentX;\n      var currentY;\n      var elapsed = (time - context.startTime) / SCROLL_TIME;\n\n      // avoid elapsed times higher than one\n      elapsed = elapsed > 1 ? 1 : elapsed;\n\n      // apply easing to elapsed time\n      value = ease(elapsed);\n\n      currentX = context.startX + (context.x - context.startX) * value;\n      currentY = context.startY + (context.y - context.startY) * value;\n\n      context.method.call(context.scrollable, currentX, currentY);\n\n      // scroll more if we have not reached our destination\n      if (currentX !== context.x || currentY !== context.y) {\n        w.requestAnimationFrame(step.bind(w, context));\n      }\n    }\n\n    /**\n     * scrolls window or element with a smooth behavior\n     * @method smoothScroll\n     * @param {Object|Node} el\n     * @param {Number} x\n     * @param {Number} y\n     * @returns {undefined}\n     */\n    function smoothScroll(el, x, y) {\n      var scrollable;\n      var startX;\n      var startY;\n      var method;\n      var startTime = now();\n\n      // define scroll context\n      if (el === d.body) {\n        scrollable = w;\n        startX = w.scrollX || w.pageXOffset;\n        startY = w.scrollY || w.pageYOffset;\n        method = original.scroll;\n      } else {\n        scrollable = el;\n        startX = el.scrollLeft;\n        startY = el.scrollTop;\n        method = scrollElement;\n      }\n\n      // scroll looping over a frame\n      step({\n        scrollable: scrollable,\n        method: method,\n        startTime: startTime,\n        startX: startX,\n        startY: startY,\n        x: x,\n        y: y\n      });\n    }\n\n    // ORIGINAL METHODS OVERRIDES\n    // w.scroll and w.scrollTo\n    w.scroll = w.scrollTo = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        original.scroll.call(\n          w,\n          arguments[0].left !== undefined\n            ? arguments[0].left\n            : typeof arguments[0] !== 'object'\n              ? arguments[0]\n              : w.scrollX || w.pageXOffset,\n          // use top prop, second argument if present or fallback to scrollY\n          arguments[0].top !== undefined\n            ? arguments[0].top\n            : arguments[1] !== undefined\n              ? arguments[1]\n              : w.scrollY || w.pageYOffset\n        );\n\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        w,\n        d.body,\n        arguments[0].left !== undefined\n          ? ~~arguments[0].left\n          : w.scrollX || w.pageXOffset,\n        arguments[0].top !== undefined\n          ? ~~arguments[0].top\n          : w.scrollY || w.pageYOffset\n      );\n    };\n\n    // w.scrollBy\n    w.scrollBy = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0])) {\n        original.scrollBy.call(\n          w,\n          arguments[0].left !== undefined\n            ? arguments[0].left\n            : typeof arguments[0] !== 'object' ? arguments[0] : 0,\n          arguments[0].top !== undefined\n            ? arguments[0].top\n            : arguments[1] !== undefined ? arguments[1] : 0\n        );\n\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        w,\n        d.body,\n        ~~arguments[0].left + (w.scrollX || w.pageXOffset),\n        ~~arguments[0].top + (w.scrollY || w.pageYOffset)\n      );\n    };\n\n    // Element.prototype.scroll and Element.prototype.scrollTo\n    Element.prototype.scroll = Element.prototype.scrollTo = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        // if one number is passed, throw error to match Firefox implementation\n        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {\n          throw new SyntaxError('Value could not be converted');\n        }\n\n        original.elementScroll.call(\n          this,\n          // use left prop, first number argument or fallback to scrollLeft\n          arguments[0].left !== undefined\n            ? ~~arguments[0].left\n            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,\n          // use top prop, second argument or fallback to scrollTop\n          arguments[0].top !== undefined\n            ? ~~arguments[0].top\n            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop\n        );\n\n        return;\n      }\n\n      var left = arguments[0].left;\n      var top = arguments[0].top;\n\n      // LET THE SMOOTHNESS BEGIN!\n      smoothScroll.call(\n        this,\n        this,\n        typeof left === 'undefined' ? this.scrollLeft : ~~left,\n        typeof top === 'undefined' ? this.scrollTop : ~~top\n      );\n    };\n\n    // Element.prototype.scrollBy\n    Element.prototype.scrollBy = function() {\n      // avoid action when no arguments are passed\n      if (arguments[0] === undefined) {\n        return;\n      }\n\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        original.elementScroll.call(\n          this,\n          arguments[0].left !== undefined\n            ? ~~arguments[0].left + this.scrollLeft\n            : ~~arguments[0] + this.scrollLeft,\n          arguments[0].top !== undefined\n            ? ~~arguments[0].top + this.scrollTop\n            : ~~arguments[1] + this.scrollTop\n        );\n\n        return;\n      }\n\n      this.scroll({\n        left: ~~arguments[0].left + this.scrollLeft,\n        top: ~~arguments[0].top + this.scrollTop,\n        behavior: arguments[0].behavior\n      });\n    };\n\n    // Element.prototype.scrollIntoView\n    Element.prototype.scrollIntoView = function() {\n      // avoid smooth behavior if not required\n      if (shouldBailOut(arguments[0]) === true) {\n        original.scrollIntoView.call(\n          this,\n          arguments[0] === undefined ? true : arguments[0]\n        );\n\n        return;\n      }\n\n      // LET THE SMOOTHNESS BEGIN!\n      var scrollableParent = findScrollableParent(this);\n      var parentRects = scrollableParent.getBoundingClientRect();\n      var clientRects = this.getBoundingClientRect();\n\n      if (scrollableParent !== d.body) {\n        // reveal element inside parent\n        smoothScroll.call(\n          this,\n          scrollableParent,\n          scrollableParent.scrollLeft + clientRects.left - parentRects.left,\n          scrollableParent.scrollTop + clientRects.top - parentRects.top\n        );\n\n        // reveal parent in viewport unless is fixed\n        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {\n          w.scrollBy({\n            left: parentRects.left,\n            top: parentRects.top,\n            behavior: 'smooth'\n          });\n        }\n      } else {\n        // reveal element in viewport\n        w.scrollBy({\n          left: clientRects.left,\n          top: clientRects.top,\n          behavior: 'smooth'\n        });\n      }\n    };\n  }\n\n  if (true) {\n    // commonjs\n    module.exports = { polyfill: polyfill };\n  } else {}\n\n}());\n\n\n//# sourceURL=webpack:///./node_modules/smoothscroll-polyfill/dist/smoothscroll.js?");

/***/ }),

/***/ "./src/js/modules/LocationSearch.js":
/*!******************************************!*\
  !*** ./src/js/modules/LocationSearch.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass LocationSearch {\r\n  constructor () {\r\n    // Location selector (for faster search)\r\n    this.locationSelector = document.querySelector('.location-selector');\r\n\r\n    // Search form elements\r\n    this.locationForm = this.locationSelector.querySelector('.city-form__form');\r\n    this.locationInput = this.locationSelector.querySelector('.city-form__input');\r\n\r\n    // Search results elements\r\n    this.resultsSection = this.locationSelector.querySelector('.search-results');\r\n    this.resultsList = this.locationSelector.querySelector('.search-results__list');\r\n    this.notFoundLabel = this.locationSelector.querySelector('.search-results__not-found');\r\n\r\n    this.branches = this.generateBranches();\r\n    this.events();\r\n    this.hideResults();\r\n  }\r\n\r\n\r\n  /**\r\n   * Adds events listeners\r\n   */\r\n  events () {\r\n    this.locationForm.addEventListener('submit', (evt) => {\r\n      evt.preventDefault();\r\n    });\r\n\r\n    this.locationForm.addEventListener('input', (evt) => {\r\n      let searchPhrase = this.locationInput.value;\r\n      if (searchPhrase.length <= 0) {\r\n        this.hideResults();\r\n      }\r\n    });\r\n\r\n    this.locationInput.addEventListener('keyup', (evt) => {\r\n      let searchPhrase = this.locationInput.value;\r\n      if (searchPhrase.length > 0) {\r\n        let filteredBranches = this.filterBranches(this.branches, searchPhrase);\r\n        this.showFound(filteredBranches);\r\n      } else {\r\n        this.hideResults();\r\n      }\r\n    });\r\n  }\r\n\r\n\r\n  /**\r\n   * Returns an array of objects representing branches\r\n   * @return {Array}\r\n   */\r\n  generateBranches () {\r\n    let branches = [];\r\n    let locationLists = this.locationSelector.querySelectorAll('.location-list');\r\n\r\n    for (let i = 0; i < locationLists.length; i++) {\r\n      let city = locationLists[i].querySelector('.location-list__city').textContent;\r\n      let items = locationLists[i].querySelectorAll('.location-list__item');\r\n\r\n      for (let j = 0; j < items.length; j++) {\r\n        let itemLink = items[j].querySelector('a');\r\n        let stations = items[j].querySelectorAll('.location-list__metro span');\r\n\r\n        let branch = {\r\n          city: city,\r\n          address: itemLink.textContent,\r\n          link: itemLink.href,\r\n          stations: []\r\n        };\r\n\r\n        for (let k = 0; k < stations.length; k++) {\r\n          branch.stations.push(stations[k].textContent);\r\n        }\r\n\r\n        branches.push(branch);\r\n      }\r\n    }\r\n\r\n    return branches;\r\n  }\r\n\r\n\r\n  /**\r\n   * Filters an array of branches and returns an array\r\n   * of branches that include searchText\r\n   * @param {Array} branchList\r\n   * @param {string} searchText\r\n   * @return {Array}\r\n   */\r\n  filterBranches (branchList, searchText) {\r\n    searchText = searchText.toLocaleLowerCase();\r\n\r\n    let filteredBranches = branchList.filter((branch) => {\r\n      if (branch.city.toLowerCase().includes(searchText)) {\r\n        return true;\r\n      } else if (branch.address.toLowerCase().includes(searchText)) {\r\n        return true;\r\n      } else {\r\n        for (let i = 0; i < branch.stations.length; i++) {\r\n          if (branch.stations[i].toLowerCase().includes(searchText)) {\r\n            return true;\r\n          }\r\n        }\r\n\r\n        return false;\r\n      }\r\n    });\r\n\r\n    return filteredBranches;\r\n  }\r\n\r\n\r\n  /**\r\n   * Renders found branches\r\n   * @param {Array} foundBranches\r\n   */\r\n  showFound (foundBranches) {\r\n    // Showing results wrapper\r\n    this.resultsSection.style.display= 'block';\r\n\r\n    // Cleaning results list\r\n    while (this.resultsList.firstChild) {\r\n      this.resultsList.removeChild(this.resultsList.firstChild);\r\n    }\r\n\r\n    if (foundBranches.length > 0) {\r\n      let docFragment = document.createDocumentFragment();\r\n\r\n      // Adding branches\r\n      foundBranches.forEach((branch) => {\r\n        let item = document.createElement('li');\r\n        item.classList.add('search-results__item');\r\n\r\n        let link = document.createElement('a');\r\n        link.classList.add('search-results__link');\r\n        link.textContent = branch.city + ', ' + branch.address;\r\n        link.href = branch.link;\r\n        item.appendChild(link);\r\n\r\n        if (branch.stations.length > 0) {\r\n          let metro = document.createElement('div');\r\n          metro.classList.add('search-results__metro');\r\n\r\n          branch.stations.forEach((station) => {\r\n            let stationElement = document.createElement('span');\r\n            stationElement.textContent = station;\r\n            metro.appendChild(stationElement);\r\n          });\r\n\r\n          item.appendChild(metro);\r\n        }\r\n\r\n        docFragment.appendChild(item);\r\n      });\r\n  \r\n      this.resultsList.appendChild(docFragment);\r\n      this.notFoundLabel.style.display = 'none';\r\n    } else {\r\n      this.notFoundLabel.style.display = 'block';\r\n    }\r\n  }\r\n\r\n\r\n  hideResults () {\r\n    this.resultsSection.style.display = 'none';\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationSearch);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/LocationSearch.js?");

/***/ }),

/***/ "./src/js/modules/LocationSelector.js":
/*!********************************************!*\
  !*** ./src/js/modules/LocationSelector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass LocationSelector {\r\n  constructor () {\r\n    this.city = document.querySelector('.city-select__city');\r\n    this.citySelector = document.querySelector('.location-selector');\r\n    this.citySelectorClose = document.querySelector('.location-selector__close');\r\n    this.cityInput = document.querySelector('.city-form__input');\r\n\r\n    this.reset();\r\n    this.events();\r\n  }\r\n\r\n\r\n  /**\r\n   * Adds click events to open and close city selector\r\n   */\r\n  events () {\r\n    this.city.addEventListener('click', (evt) => {\r\n      evt.preventDefault();\r\n\r\n      this.toggleSelector();\r\n      setTimeout(() => {\r\n        this.cityInput.focus();\r\n      }, 250);\r\n    });\r\n\r\n    this.citySelectorClose.addEventListener('click', (evt) => {\r\n      evt.preventDefault();\r\n\r\n      this.toggleSelector();\r\n    });\r\n  }\r\n\r\n\r\n  /**\r\n   * Reset city selector state\r\n   */\r\n  reset () {\r\n    this.citySelector.classList.add('location-selector--hidden');\r\n    this.citySelectorClose.classList.add('location-selector__close--hidden');\r\n  }\r\n\r\n\r\n  /**\r\n   * Toggle city selector stace (open/closed)\r\n   */\r\n  toggleSelector () {\r\n    this.citySelector.classList.toggle('location-selector--hidden');\r\n    this.citySelectorClose.classList.toggle('location-selector__close--hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationSelector);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/LocationSelector.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass UpButton {\r\n  constructor() {\r\n    this.upButton = document.querySelector('.up-button');\r\n\r\n    if (this.upButton) {\r\n      this.addEvents();\r\n    }\r\n  }\r\n\r\n\r\n  addEvents() {\r\n    this.upButton.addEventListener('click', (evt) => {\r\n      evt.preventDefault();\r\n      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpButton);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/UpButton.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./src/js/modules/MobileMenu.js\");\n/* harmony import */ var _modules_LocationSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/LocationSelector */ \"./src/js/modules/LocationSelector.js\");\n/* harmony import */ var _modules_LocationSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/LocationSearch */ \"./src/js/modules/LocationSearch.js\");\n/* harmony import */ var _modules_UpButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UpButton */ \"./src/js/modules/UpButton.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst locationSelector = new _modules_LocationSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst locationSearch = new _modules_LocationSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst upButton = new _modules_UpButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.polyfill();\r\n// window.__forceSmoothScrollPolyfill__ = true;\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ })

/******/ });