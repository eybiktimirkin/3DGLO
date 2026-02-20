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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validator */ \"./src/modules/validator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"25 february 2026\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  formId: \"form1\",\n  someElem: [\n    {\n      type: \"block\",\n      id: \"total\",\n    },\n  ],\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  formId: \"form2\",\n  someElem: [\n    {\n      type: \"block\",\n      id: \"total\",\n    },\n  ],\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  formId: \"form3\",\n  someElem: [\n    {\n      type: \"block\",\n      id: \"total\",\n    },\n  ],\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/calc.js"
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n  const calcBlock = document.querySelector(\".calc-block\");\n  const calcType = document.querySelector(\".calc-type\");\n  const calcSquare = document.querySelector(\".calc-square\");\n  const calcCount = document.querySelector(\".calc-count\");\n  const calcDay = document.querySelector(\".calc-day\");\n  const total = document.getElementById(\"total\");\n\n  const countCalc = () => {\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n    const calcSquareValue = calcSquare.value;\n\n    let totalValue = 0;\n    let calcCountValue = 1;\n    let calcDayValue = 1;\n\n    if (calcCount.value > 1) {\n      calcCountValue += +calcCount.value / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      calcDayValue = 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      calcDayValue = 1.5;\n    }\n\n    if (calcType.value && calcSquare.value) {\n      totalValue =\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n    } else {\n      totalValue = 0;\n    }\n\n    total.textContent = totalValue;\n  };\n\n  calcBlock.addEventListener(\"input\", (e) => {\n    if (\n      e.target === calcType ||\n      e.target === calcSquare ||\n      e.target === calcCount ||\n      e.target === calcDay\n    ) {\n      countCalc();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/calc.js?\n}");

/***/ },

/***/ "./src/modules/helpers.js"
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration, complete }) => {\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    let progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    } else {\n      if (complete) complete();\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/helpers.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menuBlock = document.querySelector(\"menu\");\n\n  const toggleMenu = () => {\n    menuBlock.classList.toggle(\"active-menu\");\n  };\n\n  menuBtn.addEventListener(\"click\", toggleMenu);\n\n  menuBlock.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".close-btn\") || e.target.closest(\"ul > li > a\")) {\n      toggleMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\nconst modal = () => {\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const modal = document.querySelector(\".popup\");\n  const content = document.querySelector(\".popup-content\");\n\n  buttons.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      modal.style.display = \"block\";\n\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n        duration: 1000,\n        timing(timeFraction) {\n          return timeFraction;\n        },\n        draw(progress) {\n          content.style.left = 38 * progress + \"%\";\n        },\n      });\n    });\n  });\n\n  modal.addEventListener(\"click\", (e) => {\n    if (\n      !e.target.closest(\".popup-content\") ||\n      e.target.classList.contains(\"popup-close\")\n    ) {\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n        duration: 500,\n        timing(timeFraction) {\n          return timeFraction;\n        },\n        draw(progress) {\n          content.style.opacity = 1 - progress;\n        },\n        complete() {\n          modal.style.display = \"none\";\n          content.style.opacity = 1;\n        },\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/sendForm.js"
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n  const form = document.getElementById(formId);\n  const statusBlock = document.createElement(\"div\");\n  const loadText = \"Загрузка...\";\n  const errorText = \"Ошибка...\";\n  const successText = \"Спасибо! Наш менеджер с вами свяжется!\";\n\n  const validate = (list) => {\n    let success = true;\n\n    return success;\n  };\n\n  const sendData = (data) => {\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n    }).then((res) => res.json());\n  };\n\n  const submitForm = () => {\n    const formElements = form.querySelectorAll(\"input\");\n    const formData = new FormData(form);\n    const formBody = {};\n\n    statusBlock.textContent = loadText;\n    form.append(statusBlock);\n\n    formData.forEach((val, key) => {\n      formBody[key] = val;\n    });\n\n    someElem.forEach((elem) => {\n      const element = document.getElementById(elem.id);\n\n      if (elem.type === \"block\") {\n        formBody[elem.id] = element.textContent;\n      } else if (elem.type === \"input\") {\n        formBody[elem.id] = element.value;\n      }\n    });\n\n    console.log(\"submit\");\n\n    if (validate(formElements)) {\n      sendData(formBody)\n        .then((data) => {\n          statusBlock.textContent = successText;\n          formElements.forEach((input) => {\n            input.value = \"\";\n          });\n        })\n        .catch((error) => {\n          statusBlock.textContent = errorText;\n        });\n    } else {\n      alert(\"Данные не валидны\");\n    }\n  };\n\n  try {\n    if (!form) {\n      throw new Error(\"Верните форму на место пожааааалуйста))\");\n    }\n\n    form.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      submitForm();\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/sendForm.js?\n}");

/***/ },

/***/ "./src/modules/slider.js"
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n  const sliderBlock = document.querySelector(\".portfolio-content\");\n  const slides = document.querySelectorAll(\".portfolio-item\");\n  const dotsContainer = document.querySelector(\".portfolio-dots\");\n  const timeInterval = 2000;\n\n  let currentSlide = 0;\n  let interval;\n\n  slides.forEach((element, index) => {\n    const li = document.createElement(\"li\");\n    li.classList.add(\"dot\");\n\n    if (index === 0) {\n      li.classList.add(\"dot-active\");\n    }\n    dotsContainer.append(li);\n  });\n\n  const dots = document.querySelectorAll(\".dot\");\n\n  slides[0].classList.add(\"portfolio-item-active\");\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    currentSlide++;\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  };\n\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  sliderBlock.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    if (e.target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (e.target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (e.target.classList.contains(\"dot\")) {\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  });\n\n  sliderBlock.addEventListener(\n    \"mouseenter\",\n    (e) => {\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\n        stopSlide();\n      }\n    },\n    true,\n  );\n\n  sliderBlock.addEventListener(\n    \"mouseleave\",\n    (e) => {\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\n        startSlide(timeInterval);\n      }\n    },\n    true,\n  );\n\n  startSlide(timeInterval);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/slider.js?\n}");

/***/ },

/***/ "./src/modules/tabs.js"
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  const tabPanel = document.querySelector(\".service-header\");\n  const tabs = document.querySelectorAll(\".service-header-tab\");\n  const tabContent = document.querySelectorAll(\".service-tab\");\n\n  tabPanel.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".service-header-tab\")) {\n      const tabBtn = e.target.closest(\".service-header-tab\");\n      tabs.forEach((tab, index) => {\n        if (tab === tabBtn) {\n          tab.classList.add(\"active\");\n          tabContent[index].classList.remove(\"d-none\");\n        } else {\n          tab.classList.remove(\"active\");\n          tabContent[index].classList.add(\"d-none\");\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/tabs.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let hours = Math.floor(timeRemaining / 60 / 60);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    const fHours = hours < 10 ? \"0\" + hours : hours;\n    const fMinutes = minutes < 10 ? \"0\" + minutes : minutes;\n    const fSeconds = seconds < 10 ? \"0\" + seconds : seconds;\n\n    return { timeRemaining, fHours, fMinutes, fSeconds };\n  };\n\n  let intervalId;\n\n  const upDateClock = () => {\n    let getTime = getTimeRemaining();\n    timerHours.textContent = getTime.fHours;\n    timerMinutes.textContent = getTime.fMinutes;\n    timerSeconds.textContent = getTime.fSeconds;\n\n    if (getTime.timeRemaining <= 0) {\n      clearInterval(intervalId);\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n  };\n\n  intervalId = setInterval(upDateClock, 1000);\n\n  upDateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/timer.js?\n}");

/***/ },

/***/ "./src/modules/validator.js"
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\n  document.addEventListener(\"input\", (e) => {\n    const target = e.target;\n\n    if (target.tagName !== \"INPUT\") return;\n\n    if (\n      target.classList.contains(\"calc-square\") ||\n      target.classList.contains(\"calc-count\") ||\n      target.classList.contains(\"calc-day\")\n    ) {\n      target.value = target.value.replace(/\\D/g, \"\");\n      return;\n    }\n\n    if (target.type === \"text\") {\n      target.value = target.value.replace(/[^А-Яа-яЁё\\s-]/g, \"\");\n    }\n\n    if (target.type === \"email\") {\n      target.value = target.value.replace(/[^a-zA-Z0-9@\\-_\\.!~*']/g, \"\");\n    }\n\n    if (target.type === \"tel\") {\n      target.value = target.value.replace(/[^0-9()-]/g, \"\");\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/validator.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;