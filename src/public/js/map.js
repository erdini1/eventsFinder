/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\r\n\t// -53.7872861,-67.7001535 - Rio Grande\r\n\r\n\tconst lat = -53.7872861;\r\n\tconst lng = -67.7001535;\r\n\tconst map = L.map('map').setView([lat, lng], 14);\r\n\tlet marker\r\n\r\n\t// Utilizar Provider y Geocoder\r\n\tconst geocodeService = L.esri.Geocoding.geocodeService()\r\n\r\n\r\n\tL.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n\t\tattribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n\t}).addTo(map);\r\n\r\n\t// Pin\r\n\tmarker = new L.marker([lat, lng], {\r\n\t\tdraggable: true,\r\n\t\tautoPan: true\r\n\t}).addTo(map)\r\n\r\n\t// Detectar el movimiento del pin\r\n\tmarker.on(\"moveend\", function (e) {\r\n\t\tmarker = e.target\r\n\t\tconst position = marker.getLatLng()\r\n\t\tmap.panTo(new L.LatLng(position.lat, position.lng))\r\n\r\n\t\t// Obtener información de las calles al soltar el pin\r\n\t\tgeocodeService.reverse().latlng(position, 13).run(function (err, result) {\r\n\r\n\t\t\tmarker.bindPopup(result.address.LongLabel)\r\n\r\n\t\t\t// llenando los campos\r\n\t\t\tdocument.querySelector(\".street\").textContent = result.address?.Address ?? \"\"\r\n\t\t\tdocument.querySelector(\"#street\").value = result.address?.Address ?? \"\"\r\n\t\t\tdocument.querySelector(\"#lat\").value = result.latlng?.lat ?? \"\"\r\n\t\t\tdocument.querySelector(\"#lng\").value = result.latlng?.lng ?? \"\"\r\n\t\t})\r\n\r\n\t})\r\n\r\n})()\n\n//# sourceURL=webpack://proyecto2-events/./src/js/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/map.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;