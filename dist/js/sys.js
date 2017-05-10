(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sys"] = factory();
	else
		root["sys"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 155);
/******/ })
/************************************************************************/
/******/ ({

/***/ 155:
/***/ (function(module, exports) {

eval("/**\r\n * Created by mark on 2016/12/28.\r\n */\n\nfunction SysConfig() {\n\n    var vue;\n    var isRelease = false;\n    var debug = false,\n        ADDR_DM,\n        site = null;\n\n    init();\n\n    function init() {\n\n        if (isRelease) {\n            debug = false;\n            ADDR_DM = \"http://czolympic.cn\";\n        } else {\n            ADDR_DM = \"http://192.168.40.41:89\";\n            // ADDR_DM='http://61.132.89.94:89';\n            // ADDR_DM=\"http://192.168.4.197:8080\";\n            debug = true;\n        }\n\n        site = createSite();\n    }\n\n    function createSite() {\n        var DmName = ADDR_DM;\n        var httpUrl = DmName + '/apisvc/mobile/ap1/';\n        var htmlUrl = DmName + '/apisvc/mobile/ap3/s010x1?k=';\n        var alipayUrl = DmName + \"/apisvc/jsp/alipayapi.jsp\";\n        var alipayRedirectBack = \"http:www.baidu.com\";\n        var acmy = 'http://weixin.acmeway.com/healthWeb/report/web/getReportList?';\n        var handLottery = \"http://do.shouyoucai.com/UAN3l\";\n        var broadcast = \"https://www.douyu.com/998572\";\n\n        return {\n            DmName: DmName,\n            httpUrl: httpUrl,\n            htmlUrl: htmlUrl,\n            alipayUrl: alipayUrl,\n            alipayRedirectBack: alipayRedirectBack,\n            acmy: acmy,\n            handLottery: handLottery,\n            broadcast: broadcast\n        };\n    }\n\n    function install(Vue) {\n        vue = Vue;\n        Vue.ggConfig = f();\n    }\n\n    function f() {\n        return {\n            install: install,\n            init: init,\n            debug: debug,\n            site: site\n        };\n    }\n    return f();\n}\n\nmodule.exports = new SysConfig();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N5cy9zeXMuanM/YWY5NSJdLCJuYW1lcyI6WyJTeXNDb25maWciLCJ2dWUiLCJpc1JlbGVhc2UiLCJkZWJ1ZyIsIkFERFJfRE0iLCJzaXRlIiwiaW5pdCIsImNyZWF0ZVNpdGUiLCJEbU5hbWUiLCJodHRwVXJsIiwiaHRtbFVybCIsImFsaXBheVVybCIsImFsaXBheVJlZGlyZWN0QmFjayIsImFjbXkiLCJoYW5kTG90dGVyeSIsImJyb2FkY2FzdCIsImluc3RhbGwiLCJWdWUiLCJnZ0NvbmZpZyIsImYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBLFNBQVNBLFNBQVQsR0FBcUI7O0FBRWpCLFFBQUlDLEdBQUo7QUFDQSxRQUFJQyxZQUFVLEtBQWQ7QUFDQSxRQUFJQyxRQUFNLEtBQVY7QUFBQSxRQUFnQkMsT0FBaEI7QUFBQSxRQUF3QkMsT0FBSyxJQUE3Qjs7QUFFQUM7O0FBRUEsYUFBU0EsSUFBVCxHQUFnQjs7QUFFWixZQUFHSixTQUFILEVBQWE7QUFDVEMsb0JBQU0sS0FBTjtBQUNBQyxzQkFBUSxxQkFBUjtBQUNILFNBSEQsTUFHSztBQUNEQSxzQkFBUSx5QkFBUjtBQUNBO0FBQ0E7QUFDQUQsb0JBQU0sSUFBTjtBQUNIOztBQUVERSxlQUFLRSxZQUFMO0FBQ0g7O0FBRUQsYUFBU0EsVUFBVCxHQUFzQjtBQUNsQixZQUFJQyxTQUFTSixPQUFiO0FBQ0EsWUFBSUssVUFBVUQsU0FBUyxxQkFBdkI7QUFDQSxZQUFJRSxVQUFVRixTQUFTLDhCQUF2QjtBQUNBLFlBQUlHLFlBQVlILFNBQVMsMkJBQXpCO0FBQ0EsWUFBSUkscUJBQXFCLG9CQUF6QjtBQUNBLFlBQUlDLE9BQU8sK0RBQVg7QUFDQSxZQUFJQyxjQUFZLGdDQUFoQjtBQUNBLFlBQUlDLFlBQVUsOEJBQWQ7O0FBRUEsZUFBTztBQUNIUCxvQkFBUUEsTUFETDtBQUVIQyxxQkFBU0EsT0FGTjtBQUdIQyxxQkFBU0EsT0FITjtBQUlIQyx1QkFBV0EsU0FKUjtBQUtIQyxnQ0FBb0JBLGtCQUxqQjtBQU1IQyxrQkFBTUEsSUFOSDtBQU9IQyx5QkFBWUEsV0FQVDtBQVFIQyx1QkFBVUE7QUFSUCxTQUFQO0FBVUg7O0FBRUQsYUFBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDbEJoQixjQUFJZ0IsR0FBSjtBQUNBQSxZQUFJQyxRQUFKLEdBQWFDLEdBQWI7QUFDSDs7QUFFRCxhQUFTQSxDQUFULEdBQWE7QUFDVCxlQUFPO0FBQ0hILHFCQUFRQSxPQURMO0FBRUhWLGtCQUFLQSxJQUZGO0FBR0hILG1CQUFNQSxLQUhIO0FBSUhFLGtCQUFLQTtBQUpGLFNBQVA7QUFNSDtBQUNELFdBQU9jLEdBQVA7QUFDSDs7QUFFREMsT0FBT0MsT0FBUCxHQUFlLElBQUlyQixTQUFKLEVBQWYiLCJmaWxlIjoiMTU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbWFyayBvbiAyMDE2LzEyLzI4LlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFN5c0NvbmZpZygpIHtcclxuXHJcbiAgICB2YXIgdnVlO1xyXG4gICAgdmFyIGlzUmVsZWFzZT1mYWxzZTtcclxuICAgIHZhciBkZWJ1Zz1mYWxzZSxBRERSX0RNLHNpdGU9bnVsbDtcclxuXHJcbiAgICBpbml0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICAgICAgaWYoaXNSZWxlYXNlKXtcclxuICAgICAgICAgICAgZGVidWc9ZmFsc2U7XHJcbiAgICAgICAgICAgIEFERFJfRE09XCJodHRwOi8vY3pvbHltcGljLmNuXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIEFERFJfRE09XCJodHRwOi8vMTkyLjE2OC40MC40MTo4OVwiO1xyXG4gICAgICAgICAgICAvLyBBRERSX0RNPSdodHRwOi8vNjEuMTMyLjg5Ljk0Ojg5JztcclxuICAgICAgICAgICAgLy8gQUREUl9ETT1cImh0dHA6Ly8xOTIuMTY4LjQuMTk3OjgwODBcIjtcclxuICAgICAgICAgICAgZGVidWc9dHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNpdGU9Y3JlYXRlU2l0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNpdGUoKSB7XHJcbiAgICAgICAgdmFyIERtTmFtZSA9IEFERFJfRE07XHJcbiAgICAgICAgdmFyIGh0dHBVcmwgPSBEbU5hbWUgKyAnL2FwaXN2Yy9tb2JpbGUvYXAxLyc7XHJcbiAgICAgICAgdmFyIGh0bWxVcmwgPSBEbU5hbWUgKyAnL2FwaXN2Yy9tb2JpbGUvYXAzL3MwMTB4MT9rPSc7XHJcbiAgICAgICAgdmFyIGFsaXBheVVybCA9IERtTmFtZSArIFwiL2FwaXN2Yy9qc3AvYWxpcGF5YXBpLmpzcFwiO1xyXG4gICAgICAgIHZhciBhbGlwYXlSZWRpcmVjdEJhY2sgPSBcImh0dHA6d3d3LmJhaWR1LmNvbVwiO1xyXG4gICAgICAgIHZhciBhY215ID0gJ2h0dHA6Ly93ZWl4aW4uYWNtZXdheS5jb20vaGVhbHRoV2ViL3JlcG9ydC93ZWIvZ2V0UmVwb3J0TGlzdD8nO1xyXG4gICAgICAgIHZhciBoYW5kTG90dGVyeT1cImh0dHA6Ly9kby5zaG91eW91Y2FpLmNvbS9VQU4zbFwiO1xyXG4gICAgICAgIHZhciBicm9hZGNhc3Q9XCJodHRwczovL3d3dy5kb3V5dS5jb20vOTk4NTcyXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIERtTmFtZTogRG1OYW1lLFxyXG4gICAgICAgICAgICBodHRwVXJsOiBodHRwVXJsLFxyXG4gICAgICAgICAgICBodG1sVXJsOiBodG1sVXJsLFxyXG4gICAgICAgICAgICBhbGlwYXlVcmw6IGFsaXBheVVybCxcclxuICAgICAgICAgICAgYWxpcGF5UmVkaXJlY3RCYWNrOiBhbGlwYXlSZWRpcmVjdEJhY2ssXHJcbiAgICAgICAgICAgIGFjbXk6IGFjbXksXHJcbiAgICAgICAgICAgIGhhbmRMb3R0ZXJ5OmhhbmRMb3R0ZXJ5LFxyXG4gICAgICAgICAgICBicm9hZGNhc3Q6YnJvYWRjYXN0LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsKFZ1ZSkge1xyXG4gICAgICAgIHZ1ZT1WdWU7XHJcbiAgICAgICAgVnVlLmdnQ29uZmlnPWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluc3RhbGw6aW5zdGFsbCxcclxuICAgICAgICAgICAgaW5pdDppbml0LFxyXG4gICAgICAgICAgICBkZWJ1ZzpkZWJ1ZyxcclxuICAgICAgICAgICAgc2l0ZTpzaXRlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmKCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzPW5ldyBTeXNDb25maWcoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3N5cy9zeXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });
});