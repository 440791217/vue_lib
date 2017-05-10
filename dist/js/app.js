(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 147);
/******/ })
/************************************************************************/
/******/ ({

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context_context__ = __webpack_require__(17);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ggApp\", function() { return ggApp; });\n/**\r\n * Created by mark on 2017/4/14.\r\n */\n\n\nfunction ggApp() {\n\n    function install(Vue) {\n        Vue.prototype.ggApp = {\n            Context: function Context() {\n                return new __WEBPACK_IMPORTED_MODULE_0__context_context__[\"Context\"]();\n            }\n        };\n    }\n\n    return {\n        install: install\n    };\n}\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2FwcC9hcHAuanM/N2U5NyJdLCJuYW1lcyI6WyJnZ0FwcCIsImluc3RhbGwiLCJWdWUiLCJwcm90b3R5cGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQUE7OztBQUdBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7O0FBRWIsYUFBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDbEJBLFlBQUlDLFNBQUosQ0FBY0gsS0FBZCxHQUFvQjtBQUNoQkkscUJBQVEsbUJBQVU7QUFDZCx1QkFBTyxJQUFJLHlEQUFKLEVBQVA7QUFDSDtBQUhlLFNBQXBCO0FBS0g7O0FBR0QsV0FBTztBQUNISCxpQkFBUUE7QUFETCxLQUFQO0FBR0giLCJmaWxlIjoiMTQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbWFyayBvbiAyMDE3LzQvMTQuXHJcbiAqL1xyXG5pbXBvcnQge0NvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIGdnQXBwKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGwoVnVlKSB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS5nZ0FwcD17XHJcbiAgICAgICAgICAgIENvbnRleHQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluc3RhbGw6aW5zdGFsbCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGdnQXBwIGFzIGdnQXBwLFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9hcHAvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/**\r\n * Created by mark on 2017/3/30.\r\n */\n\nfunction Context() {\n\n    var that = {\n        myself: this,\n        contextId: Context.prototype.contextId += 1,\n        isDebug: Context.prototype.isDebug,\n        beforeCreate: beforeCreate,\n        created: created,\n        beforeMount: beforeMount,\n        mounted: mounted,\n        beforeDestroy: beforeDestroy,\n        destroyed: destroyed,\n        generateId: generateId,\n        fill: fill,\n        routeParams: undefined\n    };\n\n    function beforeCreate() {\n        if (that.isDebug) {\n            console.log('beforeCreate context id:' + that.contextId);\n        }\n        if (that.onBeforeCreate) that.onBeforeCreate.call(this, that);\n    }\n\n    function created() {\n        if (that.isDebug) {\n            console.log('created context id:' + that.contextId);\n        }\n\n        if (this.$route && this.$route.params) {\n            that.routeParams = this.$route.params.F_DATA;\n        } else {\n            that.routeParams = {};\n        }\n\n        if (that.onCreated) that.onCreated.call(this, that);\n    }\n\n    function beforeMount() {\n        if (that.isDebug) {\n            console.log('beforeMount context id:' + that.contextId);\n        }\n        if (that.onBeforeMount) {\n            that.onBeforeMount.call(this, that);\n        }\n    }\n\n    function mounted() {\n        if (that.isDebug) {\n            console.log('mounted context id:' + that.contextId);\n        }\n        if (that.onMounted) that.onMounted.call(this, that);\n    }\n\n    function beforeDestroy() {\n        if (that.isDebug) {\n            console.log('beforeDestroy context id:' + that.contextId);\n        }\n        if (that.onBeforeDestroy) {\n            that.onBeforeDestroy.call(this, that);\n        }\n    }\n\n    function destroyed() {\n        if (that.isDebug) {\n            console.log('destroyed context id:' + that.contextId);\n        }\n        if (that.onDestroyed) that.onDestroyed.call(this, that);\n    }\n\n    /*\r\n    custom life cycle\r\n     */\n\n    function onBeforeCreate(context) {}\n\n    function onCreated(context) {}\n\n    function onBeforeMount(context) {}\n\n    function onMounted(context) {}\n\n    function onBeforeDestory(context) {}\n\n    function onDestoryed(context) {}\n\n    /*\r\n       */\n\n    function generateId() {\n        var id = \"guoguangId:\" + (Context.prototype.serialId += 1);\n        return id;\n    }\n\n    /*\r\n    utils\r\n     */\n    function fill(dst, src) {\n        for (var key in src) {\n            dst[key] = src[key];\n        }\n    }\n\n    return that;\n}\n\nContext.prototype = {\n    contextId: 0,\n    serialId: 0,\n    isDebug: true\n};\n\n// Context.bb=1;\n// var d=new Context();\n// console.log(\"bb:\"+Context.bb);\n// console.log(\"prototype bb:\"+Context.prototype.bb);\n// console.log(\"dd bb:\"+d.bb);\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRleHQvY29udGV4dC5qcz9iMDMxIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJ0aGF0IiwibXlzZWxmIiwiY29udGV4dElkIiwicHJvdG90eXBlIiwiaXNEZWJ1ZyIsImJlZm9yZUNyZWF0ZSIsImNyZWF0ZWQiLCJiZWZvcmVNb3VudCIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveWVkIiwiZ2VuZXJhdGVJZCIsImZpbGwiLCJyb3V0ZVBhcmFtcyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJvbkJlZm9yZUNyZWF0ZSIsImNhbGwiLCIkcm91dGUiLCJwYXJhbXMiLCJGX0RBVEEiLCJvbkNyZWF0ZWQiLCJvbkJlZm9yZU1vdW50Iiwib25Nb3VudGVkIiwib25CZWZvcmVEZXN0cm95Iiwib25EZXN0cm95ZWQiLCJjb250ZXh0Iiwib25CZWZvcmVEZXN0b3J5Iiwib25EZXN0b3J5ZWQiLCJpZCIsInNlcmlhbElkIiwiZHN0Iiwic3JjIiwia2V5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTs7OztBQUlBLFNBQVNBLE9BQVQsR0FBbUI7O0FBRWYsUUFBSUMsT0FBTztBQUNQQyxnQkFBTyxJQURBO0FBRVBDLG1CQUFXSCxRQUFRSSxTQUFSLENBQWtCRCxTQUFsQixJQUErQixDQUZuQztBQUdQRSxpQkFBU0wsUUFBUUksU0FBUixDQUFrQkMsT0FIcEI7QUFJUEMsc0JBQWNBLFlBSlA7QUFLUEMsaUJBQVNBLE9BTEY7QUFNUEMscUJBQWFBLFdBTk47QUFPUEMsaUJBQVNBLE9BUEY7QUFRUEMsdUJBQWVBLGFBUlI7QUFTUEMsbUJBQVdBLFNBVEo7QUFVUEMsb0JBQVlBLFVBVkw7QUFXUEMsY0FBS0EsSUFYRTtBQVlQQyxxQkFBWUM7QUFaTCxLQUFYOztBQWVBLGFBQVNULFlBQVQsR0FBd0I7QUFDcEIsWUFBSUwsS0FBS0ksT0FBVCxFQUFrQjtBQUNkVyxvQkFBUUMsR0FBUixDQUFZLDZCQUE2QmhCLEtB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QUFDaEJELGVBQVcsQ0FESztBQUVoQjZCLGNBQVUsQ0FGTTtBQUdoQjNCLGFBQVM7QUFITyxDQUFwQjs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbWFyayBvbiAyMDE3LzMvMzAuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gQ29udGV4dCgpIHtcclxuXHJcbiAgICB2YXIgdGhhdCA9IHtcclxuICAgICAgICBteXNlbGY6dGhpcyxcclxuICAgICAgICBjb250ZXh0SWQ6IENvbnRleHQucHJvdG90eXBlLmNvbnRleHRJZCArPSAxLFxyXG4gICAgICAgIGlzRGVidWc6IENvbnRleHQucHJvdG90eXBlLmlzRGVidWcsXHJcbiAgICAgICAgYmVmb3JlQ3JlYXRlOiBiZWZvcmVDcmVhdGUsXHJcbiAgICAgICAgY3JlYXRlZDogY3JlYXRlZCxcclxuICAgICAgICBiZWZvcmVNb3VudDogYmVmb3JlTW91bnQsXHJcbiAgICAgICAgbW91bnRlZDogbW91bnRlZCxcclxuICAgICAgICBiZWZvcmVEZXN0cm95OiBiZWZvcmVEZXN0cm95LFxyXG4gICAgICAgIGRlc3Ryb3llZDogZGVzdHJveWVkLFxyXG4gICAgICAgIGdlbmVyYXRlSWQ6IGdlbmVyYXRlSWQsXHJcbiAgICAgICAgZmlsbDpmaWxsLFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOnVuZGVmaW5lZCxcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiZWZvcmVDcmVhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoYXQuaXNEZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlQ3JlYXRlIGNvbnRleHQgaWQ6JyArIHRoYXQuY29udGV4dElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhhdC5vbkJlZm9yZUNyZWF0ZSlcclxuICAgICAgICAgICAgdGhhdC5vbkJlZm9yZUNyZWF0ZS5jYWxsKHRoaXMsdGhhdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgICAgICBpZiAodGhhdC5pc0RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVkIGNvbnRleHQgaWQ6JyArIHRoYXQuY29udGV4dElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuJHJvdXRlJiZ0aGlzLiRyb3V0ZS5wYXJhbXMpe1xyXG4gICAgICAgICAgICB0aGF0LnJvdXRlUGFyYW1zPXRoaXMuJHJvdXRlLnBhcmFtcy5GX0RBVEE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoYXQucm91dGVQYXJhbXM9e31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoYXQub25DcmVhdGVkKVxyXG4gICAgICAgICAgICB0aGF0Lm9uQ3JlYXRlZC5jYWxsKHRoaXMsdGhhdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmVmb3JlTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoYXQuaXNEZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlTW91bnQgY29udGV4dCBpZDonICsgdGhhdC5jb250ZXh0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGF0Lm9uQmVmb3JlTW91bnQpe1xyXG4gICAgICAgICAgICB0aGF0Lm9uQmVmb3JlTW91bnQuY2FsbCh0aGlzLHRoYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VudGVkKCkge1xyXG4gICAgICAgIGlmICh0aGF0LmlzRGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdW50ZWQgY29udGV4dCBpZDonICsgdGhhdC5jb250ZXh0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhhdC5vbk1vdW50ZWQpXHJcbiAgICAgICAgICAgIHRoYXQub25Nb3VudGVkLmNhbGwodGhpcyx0aGF0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGF0LmlzRGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZURlc3Ryb3kgY29udGV4dCBpZDonICsgdGhhdC5jb250ZXh0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGF0Lm9uQmVmb3JlRGVzdHJveSl7XHJcbiAgICAgICAgICAgIHRoYXQub25CZWZvcmVEZXN0cm95LmNhbGwodGhpcyx0aGF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVzdHJveWVkKCkge1xyXG4gICAgICAgIGlmICh0aGF0LmlzRGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3llZCBjb250ZXh0IGlkOicgKyB0aGF0LmNvbnRleHRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoYXQub25EZXN0cm95ZWQpXHJcbiAgICAgICAgICAgIHRoYXQub25EZXN0cm95ZWQuY2FsbCh0aGlzLHRoYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBjdXN0b20gbGlmZSBjeWNsZVxyXG4gICAgICovXHJcblxyXG4gICAgZnVuY3Rpb24gb25CZWZvcmVDcmVhdGUoY29udGV4dCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNyZWF0ZWQoY29udGV4dCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkJlZm9yZU1vdW50KGNvbnRleHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VudGVkKGNvbnRleHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25CZWZvcmVEZXN0b3J5KGNvbnRleHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EZXN0b3J5ZWQoY29udGV4dCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuXHJcbiAgICAgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xyXG4gICAgICAgIHZhciBpZCA9IFwiZ3VvZ3VhbmdJZDpcIiArIChDb250ZXh0LnByb3RvdHlwZS5zZXJpYWxJZCArPSAxKTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIHV0aWxzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGZpbGwoZHN0LHNyYyl7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gc3JjKXtcclxuICAgICAgICAgICAgZHN0W2tleV09c3JjW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB0aGF0O1xyXG59XHJcblxyXG5Db250ZXh0LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnRleHRJZDogMCxcclxuICAgIHNlcmlhbElkOiAwLFxyXG4gICAgaXNEZWJ1ZzogdHJ1ZSxcclxufVxyXG5cclxuLy8gQ29udGV4dC5iYj0xO1xyXG4vLyB2YXIgZD1uZXcgQ29udGV4dCgpO1xyXG4vLyBjb25zb2xlLmxvZyhcImJiOlwiK0NvbnRleHQuYmIpO1xyXG4vLyBjb25zb2xlLmxvZyhcInByb3RvdHlwZSBiYjpcIitDb250ZXh0LnByb3RvdHlwZS5iYik7XHJcbi8vIGNvbnNvbGUubG9nKFwiZGQgYmI6XCIrZC5iYik7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQ29udGV4dCBhcyBDb250ZXh0XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvY29udGV4dC9jb250ZXh0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });
});