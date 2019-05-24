!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return n={},o.m=r={14:function(t,e){"use strict";e.a=function(e){var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){return r.reject(t)})})}},16:function(t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},20:function(t,l,d){"use strict";(function(e){var t=d(14),r=setTimeout;function n(){}function i(t){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}function o(r,n){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var t=1===r._state?n.onFulfilled:n.onRejected;if(null!==t){var e;try{e=t(r._value)}catch(t){return void a(n.promise,t)}s(n.promise,e)}else(1===r._state?s:a)(n.promise,r._value)})):r._deferreds.push(n)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof r)return void c(function(t,e){return function(){t.apply(e,arguments)}}(r,t),e)}e._state=1,e._value=t,u(e)}catch(t){a(e,t)}}function a(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,r=t._deferreds.length;e<r;e++)o(t,t._deferreds[e]);t._deferreds=null}function f(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function c(t,e){var r=!1;try{t(function(t){r||(r=!0,s(e,t))},function(t){r||(r=!0,a(e,t))})}catch(t){if(r)return;r=!0,a(e,t)}}i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var r=new this.constructor(n);return o(this,new f(t,e,r)),r},i.prototype.finally=t.a,i.all=function(e){return new i(function(n,o){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return n([]);var s=i.length;function a(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if("function"==typeof r)return void r.call(t,function(t){a(e,t)},o)}i[e]=t,0==--s&&n(i)}catch(t){o(t)}}for(var t=0;t<i.length;t++)a(t,i[t])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(r){return new i(function(t,e){e(r)})},i.race=function(o){return new i(function(t,e){for(var r=0,n=o.length;r<n;r++)o[r].then(t,e)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){r(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},l.a=i}).call(this,d(37).setImmediate)},34:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(35),r(36),r(40)},35:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",function(){return f}),r.d(e,"Request",function(){return m}),r.d(e,"Response",function(){return v}),r.d(e,"DOMException",function(){return _}),r.d(e,"fetch",function(){return g});var a={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(a.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&-1<n.indexOf(Object.prototype.toString.call(t))};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a.iterable&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function d(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:a.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a.arrayBuffer&&a.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=h(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=l(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=i(t),e=s(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[i(t)]},f.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},f.prototype.set=function(t,e){this.map[i(t)]=s(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),u(r)},f.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),u(e)},f.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),u(r)},a.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<y.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function b(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];v.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var _=self.DOMException;try{new _}catch(t){(_=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function g(i,s){return new Promise(function(r,t){var e=new m(i,s);if(e.signal&&e.signal.aborted)return t(new _("Aborted","AbortError"));var n=new XMLHttpRequest;function o(){n.abort()}n.onload=function(){var t={status:n.status,statusText:n.statusText,headers:function(t){var o=new f;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o}(n.getAllResponseHeaders()||"")};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;r(new v(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new _("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&a.blob&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",o),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",o)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}g.polyfill=!0,self.fetch||(self.fetch=g,self.Headers=f,self.Request=m,self.Response=v)},36:function(t,e,o){"use strict";o.r(e),function(t){var e=o(20),r=o(14),n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();"Promise"in n?n.Promise.prototype.finally||(n.Promise.prototype.finally=r.a):n.Promise=e.a}.call(this,o(16))},37:function(t,o,i){(function(t){var e=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function n(t,e){this._id=t,this._clearFn=e}o.setTimeout=function(){return new n(r.call(setTimeout,e,arguments),clearTimeout)},o.setInterval=function(){return new n(r.call(setInterval,e,arguments),clearInterval)},o.clearTimeout=o.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(e,this._id)},o.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},o.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},o._unrefActive=o.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i(38),o.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,o.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,i(16))},38:function(t,e,r){(function(t,p){!function(r,n){"use strict";if(!r.setImmediate){var o,i,e,s,a=1,u={},f=!1,c=r.document,t=Object.getPrototypeOf&&Object.getPrototypeOf(r);t=t&&t.setTimeout?t:r,o="[object process]"==={}.toString.call(r.process)?function(t){p.nextTick(function(){d(t)})}:function(){if(r.postMessage&&!r.importScripts){var t=!0,e=r.onmessage;return r.onmessage=function(){t=!1},r.postMessage("","*"),r.onmessage=e,t}}()?(s="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",h,!1):r.attachEvent("onmessage",h),function(t){r.postMessage(s+t,"*")}):r.MessageChannel?((e=new MessageChannel).port1.onmessage=function(t){d(t.data)},function(t){e.port2.postMessage(t)}):c&&"onreadystatechange"in c.createElement("script")?(i=c.documentElement,function(t){var e=c.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):function(t){setTimeout(d,0,t)},t.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var n={callback:t,args:e};return u[a]=n,o(a),a++},t.clearImmediate=l}function l(t){delete u[t]}function d(t){if(f)setTimeout(d,0,t);else{var e=u[t];if(e){f=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{l(t),f=!1}}}}function h(t){t.source===r&&"string"==typeof t.data&&0===t.data.indexOf(s)&&d(+t.data.slice(s.length))}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,r(16),r(39))},39:function(t){var r,n,e=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,u=[],f=!1,c=-1;function l(){f&&a&&(f=!1,a.length?u=a.concat(u):c=-1,u.length&&d())}function d(){if(!f){var t=s(l);f=!0;for(var e=u.length;e;){for(a=u,u=[];++c<e;)a&&a[c].run();c=-1,e=u.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function p(){}e.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new h(t,e)),1!==u.length||f||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=p,e.addListener=p,e.once=p,e.off=p,e.removeListener=p,e.removeAllListeners=p,e.emit=p,e.prependListener=p,e.prependOnceListener=p,e.listeners=function(){return[]},e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},40:function(){Array.prototype.some||(Array.prototype.some=function(t,e){"use strict";if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof t)throw new TypeError;for(var r=Object(this),n=r.length>>>0,o=0;o<n;o++)if(o in r&&t.call(e,r[o],o,r))return!0;return!1})}},o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=34);function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var r,n});
//# sourceMappingURL=polyfills.js.map