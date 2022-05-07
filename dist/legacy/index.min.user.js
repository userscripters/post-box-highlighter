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
// @version         0.1.0
// ==/UserScript==

"use strict";var __awaiter=this&&this.__awaiter||function(e,a,l,s){return new(l=l||Promise)(function(n,t){function r(e){try{i(s.next(e))}catch(e){t(e)}}function o(e){try{i(s.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof l?t:new l(function(e){e(t)})).then(r,o)}i((s=s.apply(e,a||[])).next())})},__generator=this&&this.__generator||function(r,o){var i,a,l,s={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(n){return function(e){var t=[n,e];if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,a&&(l=2&t[0]?a.return:t[0]?a.throw||((l=a.return)&&l.call(a),0):a.next)&&!(l=l.call(a,t[1])).done)return l;switch(a=0,(t=l?[2&t[0],l.value]:t)[0]){case 0:case 1:l=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,a=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(l=0<(l=s.trys).length&&l[l.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!l||t[1]>l[0]&&t[1]<l[3])){s.label=t[1];break}if(6===t[0]&&s.label<l[1]){s.label=l[1],l=t;break}if(l&&s.label<l[2]){s.label=l[2],s.ops.push(t);break}l[2]&&s.ops.pop(),s.trys.pop();continue}t=o.call(r,s)}catch(e){t=[6,e],a=0}finally{i=l=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&r>=e.length?void 0:e)&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};window.addEventListener("load",function(){function s(e){return console.debug("[post-box-highlighter] ".concat(e))}function c(n){__awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return n.classList.add("highlighted"),[4,(t=1.5,new Promise(function(e){return setTimeout(e,1e3*t)}))];case 1:return e.sent(),n.classList.remove("highlighted"),[2]}var t})})}var e=document.createElement("style"),e=(document.head.append(e),e.sheet);if(!e)return s("stylesheet not connected");e.insertRule("\n        .question .postcell,\n        .answer .answercell,\n        .question .postcell img,\n        .answer .answercell img {\n            transition: background-color 1s ease-out;\n        }"),e.insertRule(".highlighted {\n            background-color: hsl(11, 100%, 96%);\n        }"),document.querySelectorAll(".js-post-menu .d-flex").forEach(function(e){var t,l,n=e.dataset;n.highlightSet||((t=document.createElement("div")).classList.add("flex--item"),(l=document.createElement("button")).type="button",l.classList.add("s-btn","s-btn__link"),l.title="Highlight the post background",l.textContent="Highlight",l.addEventListener("click",function(){var t,e,n=l.closest(".answercell, .postcell");if(!n)return s("post box missing");var r=n.querySelectorAll("img");c(n);try{for(var o=__values(r),i=o.next();!i.done;i=o.next()){var a=i.value;c(a)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}}),t.append(l),e.append(t),Object.assign(n,{highlightSet:!0}))})});