/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/DnDFiles.js":
/*!****************************!*\
  !*** ./src/js/DnDFiles.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DnDFiles; }
/* harmony export */ });
class DnDFiles {
  constructor(container) {
    this.container = container;
    this.boxTrap = this.container.querySelector('.box_trap');
    this.fileLoader = this.boxTrap.querySelector('.file-loader');
    this.boxPreview = this.container.querySelector('.box_preview');
    this.clickLoad = this.clickLoad.bind(this);
  }
  activation() {
    this.boxTrap.addEventListener('click', () => {
      this.fileLoader.dispatchEvent(new MouseEvent('click'));
    });
    this.fileLoader.addEventListener('input', this.clickLoad);
    this.boxTrap.addEventListener('dragover', e => {
      e.preventDefault();
    });
    this.boxTrap.addEventListener('drop', e => {
      e.preventDefault();
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        const preview = DnDFiles.createPreview(url);
        this.boxPreview.append(preview);
        this.fileLoader.value = '';
      }
    });
  }
  clickLoad() {
    const file = this.fileLoader.files && this.fileLoader.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const preview = DnDFiles.createPreview(url);
      this.boxPreview.append(preview);
      this.fileLoader.value = '';
    }
  }
  static createPreview(url) {
    const preview = document.createElement('div');
    preview.classList.add('preview');
    const image = document.createElement('img');
    image.classList.add('preview_img');
    image.src = url;
    const btn = document.createElement('button');
    btn.classList.add('btn-del');
    btn.textContent = String.fromCharCode(10060);
    btn.addEventListener('click', e => {
      e.preventDefault();
      preview.remove();
    });
    preview.append(image);
    preview.append(btn);
    return preview;
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DnDFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DnDFiles */ "./src/js/DnDFiles.js");

const container = document.querySelector('.container');
const dndFiles = new _DnDFiles__WEBPACK_IMPORTED_MODULE_0__["default"](container);
dndFiles.activation();

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"box_trap\">\n        <input type=\"file\" accept=\"image/*\" class=\"file-loader\">\n        <div class=\"trap\">\n            <span class=\"trap_title\">Drag and Drop files here</span>\n            <span class=\"trap_title\">or Click to select</span>\n        </div>\n    </div>\n    <div class=\"box_preview\"></div>\n  </div>\n</body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");



}();
/******/ })()
;
//# sourceMappingURL=main.js.map