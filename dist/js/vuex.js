!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuex=e():t.vuex=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=157)}({145:function(t,e,n){"use strict";function o(t){M&&(t._devtoolHook=M,M.emit("vuex:init",t),M.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){M.emit("vuex:mutation",t,e)}))}function r(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function i(t){return null!==t&&"object"==typeof t}function s(t){return t&&"function"==typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function a(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");a(t.getChild(n),e.modules[n])}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;l(t,n,[],t._modules.root,!0),f(t,n,e)}function f(t,e,n){var o=t._vm;t.getters={};var i=t._wrappedGetters,s={};r(i,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var u=C.config.silent;C.config.silent=!0,t._vm=new C({data:{$$state:e},computed:s}),C.config.silent=u,t.strict&&y(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),C.nextTick(function(){return o.$destroy()}))}function l(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!i&&!r){var u=_(e,n.slice(0,-1)),a=n[n.length-1];t._withCommit(function(){C.set(u,a,o.state)})}var c=o.context=p(t,s,n);o.forEachMutation(function(e,n){d(t,s+n,e,c)}),o.forEachAction(function(e,n){m(t,s+n,e,c)}),o.forEachGetter(function(e,n){v(t,s+n,e,c)}),o.forEachChild(function(o,i){l(t,e,n.concat(i),o,r)})}function p(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=g(n,o,r),s=i.payload,u=i.options,a=i.type;return u&&u.root||(a=e+a,t._actions[a])?t.dispatch(a,s):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+a)},commit:o?t.commit:function(n,o,r){var i=g(n,o,r),s=i.payload,u=i.options,a=i.type;if(!(u&&u.root||(a=e+a,t._mutations[a])))return void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+a);t.commit(a,s,u)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return h(t,e)}},state:{get:function(){return _(t.state,n)}}}),r}function h(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function d(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){n(o.state,t)})}function m(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var i=n({dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,r);return s(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function v(t,e,n,o){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}function y(t){t._vm.$watch(function(){return this._data.$$state},function(){u(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function g(t,e,n){return i(t)&&t.type&&(n=e,e=t,t=t.type),u("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}function w(t){if(C)return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");C=t,O(C)}function b(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function x(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}/**
 * vuex v2.3.0
 * (c) 2017 Evan You
 * @license MIT
 */
var O=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var n=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(n?{init:e}:{beforeCreate:e})}else{var o=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,o.call(this,t)}}},M="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,j=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},E={namespaced:{}};E.namespaced.get=function(){return!!this._rawModule.namespaced},j.prototype.addChild=function(t,e){this._children[t]=e},j.prototype.removeChild=function(t){delete this._children[t]},j.prototype.getChild=function(t){return this._children[t]},j.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},j.prototype.forEachChild=function(t){r(this._children,t)},j.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},j.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},j.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(j.prototype,E);var k=function(t){var e=this;this.root=new j(t,!1),t.modules&&r(t.modules,function(t,n){e.register([n],t,!1)})};k.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},k.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},k.prototype.update=function(t){a(this.root,t)},k.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var i=this.get(t.slice(0,-1)),s=new j(e,n);i.addChild(t[t.length-1],s),e.modules&&r(e.modules,function(e,r){o.register(t.concat(r),e,n)})},k.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var C,A=function(t){var e=this;void 0===t&&(t={}),u(C,"must call Vue.use(Vuex) before creating a store instance."),u("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var n=t.state;void 0===n&&(n={});var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new k(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new C;var s=this,a=this,c=a.dispatch,p=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return p.call(s,t,e,n)},this.strict=i,l(this,n,[],this._modules.root),f(this,n),r.concat(o).forEach(function(t){return t(e)})},P={state:{}};P.state.get=function(){return this._vm._data.$$state},P.state.set=function(t){u(!1,"Use store.replaceState() to explicit replace store state.")},A.prototype.commit=function(t,e,n){var o=this,r=g(t,e,n),i=r.type,s=r.payload,u=r.options,a={type:i,payload:s},c=this._mutations[i];if(!c)return void console.error("[vuex] unknown mutation type: "+i);this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,o.state)}),u&&u.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")},A.prototype.dispatch=function(t,e){var n=g(t,e),o=n.type,r=n.payload,i=this._actions[o];return i?i.length>1?Promise.all(i.map(function(t){return t(r)})):i[0](r):void console.error("[vuex] unknown action type: "+o)},A.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},A.prototype.watch=function(t,e,n){var o=this;return u("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},A.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},A.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),l(this,this.state,t,this._modules.get(t)),f(this,this.state)},A.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));C.delete(n,t[t.length-1])}),c(this)},A.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},A.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(A.prototype,P),"undefined"!=typeof window&&window.Vue&&w(window.Vue);x(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=$(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n}),x(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||$(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[r].concat(e))}}),n}),x(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||$(this.$store,"mapGetters",t))return r in this.$store.getters?this.$store.getters[r]:void console.error("[vuex] unknown getter: "+r)},n[o].vuex=!0}),n}),x(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||$(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[r].concat(e))}}),n})},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(145);e.default=function(){function t(t){}return{install:t}}()}})});
//# sourceMappingURL=vuex.js.map