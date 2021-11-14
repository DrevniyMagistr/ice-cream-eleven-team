parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icons/about-btn-icon.svg":[["about-btn-icon.39fe3d13.svg","o9mI"],"o9mI"]}],"wzuc":[function(require,module,exports) {
$(".single-item").slick();
},{}],"RSqK":[function(require,module,exports) {

},{}],"v66i":[function(require,module,exports) {
function t(){$(".nav__link").click(function(){return $(".active").removeClass("active"),$(this).addClass("active"),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top-160},700),!1})}t();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/slider.js"),require("./js/modal.js"),require("./js/mobile-menu.js"),require("./js/anchor.js");
},{"./sass/main.scss":"clu1","./js/slider.js":"wzuc","./js/modal.js":"RSqK","./js/mobile-menu.js":"RSqK","./js/anchor.js":"v66i"}]},{},["Focm"], null)
//# sourceMappingURL=/ice-cream-eleven-team/src.0c3494ee.js.map