!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.context=t():e.context=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=17)}({17:function(e,t,o){"use strict";function n(){function e(){a.isDebug&&console.log("beforeCreate context id:"+a.contextId)}function t(){a.isDebug&&console.log("created context id:"+a.contextId),a.onStart&&a.onStart.call(this)}function o(){a.isDebug&&console.log("beforeMount context id:"+a.contextId)}function r(){a.isDebug&&console.log("mounted context id:"+a.contextId),a.onResume&&a.onResume.call(this,a)}function u(){a.isDebug&&console.log("beforeDestroy context id:"+a.contextId),a.onPause&&a.onPause.call(this)}function c(){a.isDebug&&console.log("destroyed context id:"+a.contextId),a.onStop&&a.onStop.call(this)}function i(e){}function s(e){}function f(e){}function d(){return"guoguangId:"+(n.prototype.serialId+=1)}function l(e,t){for(var o in t)e[o]=t[o]}var a={contextId:n.prototype.contextId+=1,isDebug:n.prototype.isDebug,beforeCreate:e,created:t,beforeMount:o,mounted:r,beforeDestroy:u,destroyed:c,generateId:d,onStart:i,onResume:s,onPause:f,fill:l};return a}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"Context",function(){return n}),n.prototype={contextId:0,serialId:0,isDebug:!0}}})});
//# sourceMappingURL=context.js.map