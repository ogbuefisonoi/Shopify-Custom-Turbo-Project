!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.yett={})}(this,function(t){"use strict";var e={blacklist:window.YETT_BLACKLIST,whitelist:window.YETT_WHITELIST},r={blacklisted:[]},n=function(t,r){return t&&(!r||"javascript/blocked"!==r)&&(!e.blacklist||e.blacklist.some(function(e){return e.test(t)}))&&(!e.whitelist||e.whitelist.every(function(e){return!e.test(t)}))},i=function(t){var r=t.getAttribute("src");return e.blacklist&&e.blacklist.every(function(t){return!t.test(r)})||e.whitelist&&e.whitelist.some(function(t){return t.test(r)})},c=new MutationObserver(function(t){t.forEach(function(t){for(var e=t.addedNodes,i=function(t){var i=e[t];if(1===i.nodeType&&"SCRIPT"===i.tagName){var c=i.src,o=i.type;if(n(c,o)){r.blacklisted.push(i.cloneNode()),i.type="javascript/blocked";i.addEventListener("beforescriptexecute",function t(e){"javascript/blocked"===i.getAttribute("type")&&e.preventDefault(),i.removeEventListener("beforescriptexecute",t)}),i.parentElement.removeChild(i)}}},c=0;c<e.length;c++)i(c)})});c.observe(document.documentElement,{childList:!0,subtree:!0});var o=document.createElement;document.createElement=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];if("script"!==e[0].toLowerCase())return o.bind(document).apply(void 0,e);var i=o.bind(document).apply(void 0,e),c=i.setAttribute.bind(i);return Object.defineProperties(i,{src:{get:function(){return i.getAttribute("src")},set:function(t){return n(t,i.type)&&c("type","javascript/blocked"),c("src",t),!0}},type:{set:function(t){var e=n(i.src,i.type)?"javascript/blocked":t;return c("type",e),!0}}}),i.setAttribute=function(t,e){"type"===t||"src"===t?i[t]=e:HTMLScriptElement.prototype.setAttribute.call(i,t,e)},i};var l=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},a=new RegExp("[|\\{}()[\\]^$+*?.]","g");t.unblock=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];n.length<1?(e.blacklist=[],e.whitelist=[]):(e.blacklist&&(e.blacklist=e.blacklist.filter(function(t){return n.every(function(e){return!t.test(e)})})),e.whitelist&&(e.whitelist=[].concat(l(e.whitelist),l(n.map(function(t){var r=".*"+t.replace(a,"\\$&")+".*";return e.whitelist.find(function(t){return t.toString()===r.toString()})?null:new RegExp(r)}).filter(Boolean)))));for(var s=document.querySelectorAll('script[type="javascript/blocked"]'),u=0;u<s.length;u++){var p=s[u];i(p)&&(p.type="application/javascript",r.blacklisted.push(p),p.parentElement.removeChild(p))}var d=0;[].concat(l(r.blacklisted)).forEach(function(t,e){if(i(t)){var n=document.createElement("script");n.setAttribute("src",t.src),n.setAttribute("type","application/javascript"),document.head.appendChild(n),r.blacklisted.splice(e-d,1),d++}}),e.blacklist&&e.blacklist.length<1&&c.disconnect()},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=yett.min.js.map