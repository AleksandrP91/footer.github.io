!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./src/js/main.js")}({"./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar catalogArrow = function catalogArrow() {\n  var clickCatalog = document.querySelector('.footer__content-box-catalog');\n  var clickCompany = document.querySelector('.footer__content-box-company');\n  var clickinfo = document.querySelector('.footer__content-box-info');\n  var clickCabinet = document.querySelector('.footer__content-box-cabinet');\n  var arrowCatalog = document.querySelector('.catalog-arrow');\n  var arrowCompany = document.querySelector('.company-arrow');\n  var arrowInfo = document.querySelector('.info-arrow');\n  var arrowCabinet = document.querySelector('.cabinet-arrow');\n  var catalog = document.querySelector('.footer__list-catalog');\n  var info = document.querySelector('.footer__list-info');\n  var company = document.querySelector('.footer__list-company');\n  var cabinet = document.querySelector('.footer__list-cabinet');\n  var catalogBox = document.querySelector('.footer__content-catalog');\n  var infoBox = document.querySelector('.footer__content-info');\n  var companyBox = document.querySelector('.footer__content-company');\n  var cabinetBox = document.querySelector('.footer__content-cabinet');\n  clickCatalog.addEventListener('click', function () {\n    arrowCatalog.classList.toggle('arrow-active');\n    catalog.classList.toggle('footer__list-active');\n    catalogBox.classList.toggle('content-catalog');\n  });\n  clickCompany.addEventListener('click', function () {\n    arrowCompany.classList.toggle('arrow-active');\n    company.classList.toggle('footer__list-active');\n    companyBox.classList.toggle('content-catalog');\n  });\n  clickinfo.addEventListener('click', function () {\n    arrowInfo.classList.toggle('arrow-active');\n    info.classList.toggle('footer__list-active');\n    infoBox.classList.toggle('content-catalog');\n  });\n  clickCabinet.addEventListener('click', function () {\n    arrowCabinet.classList.toggle('arrow-active');\n    cabinet.classList.toggle('footer__list-active');\n    cabinetBox.classList.toggle('content-catalog');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalogArrow);\n\n//# sourceURL=webpack:///./src/js/catalog.js?")},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ \"./src/js/catalog.js\");\n // import test from './test'\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_catalog__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // test()\n});\n\n//# sourceURL=webpack:///./src/js/main.js?")}});
//# sourceMappingURL=main.js.map
