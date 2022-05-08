// ==UserScript==
// @author          Oleg Valter <oleg.a.valter@gmail.com>
// @description     Highlight a post box background
// @grant           none
// @homepage        https://github.com/userscripters/post-box-highlighter#readme
// @match           https://*.stackexchange.com/questions/*
// @match           https://askubuntu.com/questions/*
// @match           https://es.meta.stackoverflow.com/questions/*
// @match           https://es.stackoverflow.com/questions/*
// @match           https://ja.meta.stackoverflow.com/questions/*
// @match           https://ja.stackoverflow.com/questions/*
// @match           https://mathoverflow.net/questions/*
// @match           https://meta.askubuntu.com/questions/*
// @match           https://meta.mathoverflow.net/questions/*
// @match           https://meta.serverfault.com/questions/*
// @match           https://meta.stackoverflow.com/questions/*
// @match           https://meta.superuser.com/questions/*
// @match           https://pt.meta.stackoverflow.com/questions/*
// @match           https://pt.stackoverflow.com/questions/*
// @match           https://ru.meta.stackoverflow.com/questions/*
// @match           https://ru.stackoverflow.com/questions/*
// @match           https://serverfault.com/questions/*
// @match           https://stackapps.com/questions/*
// @match           https://stackoverflow.com/questions/*
// @match           https://superuser.com/questions/*
// @name            Post Box Highlighter
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/post-box-highlighter.git
// @supportURL      https://github.com/userscripters/post-box-highlighter/issues
// @version         0.2.0
// ==/UserScript==

"use strict";var __awaiter=this&&this.__awaiter||function(e,l,a,c){return new(a=a||Promise)(function(n,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function o(e){try{i(c.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(r,o)}i((c=c.apply(e,l||[])).next())})},__generator=this&&this.__generator||function(r,o){var i,l,a,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(n){return function(e){var t=[n,e];if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,l&&(a=2&t[0]?l.return:t[0]?l.throw||((a=l.return)&&a.call(l),0):l.next)&&!(a=a.call(l,t[1])).done)return a;switch(l=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,l=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(a=0<(a=c.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){c.label=t[1];break}if(6===t[0]&&c.label<a[1]){c.label=a[1],a=t;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(t);break}a[2]&&c.ops.pop(),c.trys.pop();continue}t=o.call(r,c)}catch(e){t=[6,e],l=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&r>=e.length?void 0:e)&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};window.addEventListener("load",function(){function c(e){return console.debug("[post-box-highlighter] ".concat(e))}function s(n){__awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return n.classList.add("highlighted"),[4,(t=1.5,new Promise(function(e){return setTimeout(e,1e3*t)}))];case 1:return e.sent(),n.classList.remove("highlighted"),[2]}var t})})}!function(){var e=document.createElement("style"),t=(document.head.append(e),e.sheet);if(!t)return c("stylesheet not connected");[".question .postcell,\n             .question .votecell,\n             .answer .answercell,\n             .answer .votecell,\n             .question .postcell img,\n             .answer .answercell img {\n                transition: background-color 1s ease-out;\n            ",".highlighted {\n                background-color: var(--black-050);\n            }"].forEach(function(e){return t.insertRule(e)})}(),document.querySelectorAll(".js-post-menu .d-flex").forEach(function(e){var t,a,n=e.dataset;n.highlightSet||((t=document.createElement("div")).classList.add("flex--item"),(a=document.createElement("button")).type="button",a.classList.add("s-btn","s-btn__link"),a.title="Highlight the post background",a.textContent="Highlight",a.addEventListener("click",function(){var t,e,n=a.closest(".answercell, .postcell");if(!n)return c("post box missing");var r=n.previousElementSibling,r=(r&&r.classList.contains("votecell")&&s(r),n.querySelectorAll("img"));s(n);try{for(var o=__values(r),i=o.next();!i.done;i=o.next()){var l=i.value;s(l)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}}),t.append(a),e.append(t),Object.assign(n,{highlightSet:!0}))})});