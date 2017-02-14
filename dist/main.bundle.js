var Watchable=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){var t=void 0;switch(e){case"typeMismatch":t="value of Watchable should match its type.        \nIf you do not want strict typing then omit 'type' argument";break;case"noName":t="watchable's name should be provided as a first argument.        \nWatchable 'name' argument must be the same as variable name.";break;case"nameMustBeString":t="watchable's name should always be a string and be the same as varaibale name.            \nMay be you forgot to add the name argument.";break;case"cantAttach":t="you can not 'attach' a non-detached watchable. 'detach()' first.";break;case"cantUntrack":t="you can not untrack(). You are not tracking anything.";break;case"cantTrack":t="you are already tracking.";break;default:return}throw console&&console.warn("%c Watchable error: %c "+t,"color: white; background-color: navy",""),new Error};t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),l=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.invokeError("noName"),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.value,o=void 0===r?null:r,c=a.type,u=void 0===c?"any":c;i(this,e),"string"!=typeof n&&e.invokeError("nameMustBeString"),this.name=n,this._type=this.setType(u),this._value=this.setInitialVal(o),this.callbacks=[],this.isDetached=!1,this.tracking=!1,this.trackElement="",this.event=function(e){return t.set(e.target.value)},e.watchables.add(n),this.render()}return c(e,[{key:"set",value:function(t){if(this._value!==t){if("any"!==this._type&&("undefined"==typeof t?"undefined":o(t))!==o(this._type))return e.invokeError("typeMismatch");this._value=t,this.callbacks.length&&this.callbacks.forEach(function(e){return e()}),this.render()}}},{key:"value",value:function(){return this._value}},{key:"type",value:function(){return this._type}},{key:"setInitialVal",value:function(t){return"any"===this._type?t:o(this._type)!==("undefined"==typeof t?"undefined":o(t))?e.invokeError("typeMismatch"):t}},{key:"subscribe",value:function(e){"function"==typeof e&&this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}},{key:"binds",value:function(t){if(!t&&this.tracking)return this.tracking=!1,this.trackElement.removeEventListener("input",this.event);if(t&&this.tracking)return e.invokeError("cantTrack");var n=document.getElementById(t);return n?(this.tracking=!0,this.trackElement=n,n.addEventListener("input",this.event)):void 0}},{key:"detach",value:function(){return e.watchables.has(this.name)&&e.watchables.delete(this.name),this.isDetached=!0}},{key:"attach",value:function(){return e.watchables.has(this.name)?e.invokeError("cantAttach"):void e.watchables.add(this.name)}},{key:"unsubscribe",value:function(){this.callbacks=[]}},{key:"setType",value:function(e){switch(e){case"string":e="string";break;case"number":e=1;break;case"boolean":e=!0}return e}},{key:"render",value:function(){var t=this;if(e.watchables.has(this.name)){[].concat(r(document.querySelectorAll("[data-watchable="+this.name+"]"))).map(function(e){return e.innerHTML=t._value});var n=[].concat(r(document.querySelectorAll("[data-link="+this.name+"]")));n.length&&n.map(function(e){return"INPUT"===e.nodeName?e.value=t._value:e.innerHTML=t._value})}}}],[{key:"invokeError",value:function(t){throw new Error(e.error(t))}}]),e}();l.watchables=new Set,l.error=s.default,e.exports=l}]);