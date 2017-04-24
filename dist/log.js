/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

/**
 * Created by mark on 2017/1/20.
 */
function logger() {
    var debug=true;

    function install(Vue) {
        Vue.Logger = f();
    }


    function e(msg) {
        if (debug)
            console.error(msg);
    }

    function i(msg) {
        if (debug)
            console.info(msg);
    }

    function d(msg) {
        if (debug)
            console.log(msg);
    }

    function open(can) {
        debug=can;
    }

    function f() {
        return {
            install:install,
            i: i,
            d: d,
            e: e,
            open:open,
            isDebug:debug,
        }
    }

    return f();
}
// var a=new logger();
// a.d("test");
module.exports=new logger();


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mark_logger__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mark_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mark_logger__);
/**
 * Created by mark on 2017/3/7.
 */

function logger() {

    function install(Vue) {
        Vue.prototype.Logger = {};

        for (var key in __WEBPACK_IMPORTED_MODULE_0_mark_logger___default.a) {
            Vue.prototype.Logger[key] = __WEBPACK_IMPORTED_MODULE_0_mark_logger___default.a[key];
        }
    }

    return {
        install: install
    };
}

/* harmony default export */ __webpack_exports__["default"] = (logger());

/***/ })

/******/ });
//# sourceMappingURL=log.js.map