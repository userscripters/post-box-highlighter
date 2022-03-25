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

"use strict";var __awaiter=this&&this.__awaiter||function(e,l,a,s){return new(a=a||Promise)(function(n,t){function r(e){try{i(s.next(e))}catch(e){t(e)}}function o(e){try{i(s.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(r,o)}i((s=s.apply(e,l||[])).next())})},__generator=this&&this.__generator||function(r,o){var i,l,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(n){return function(e){var t=[n,e];if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,l&&(a=2&t[0]?l.return:t[0]?l.throw||((a=l.return)&&a.call(l),0):l.next)&&!(a=a.call(l,t[1])).done)return a;switch(l=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,l=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=o.call(r,s)}catch(e){t=[6,e],l=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&r>=e.length?void 0:e)&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};!function(e,n){function s(e){return console.debug("[post-box-highlighter] ".concat(e))}function c(n){__awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return n.classList.add("highlighted"),[4,(t=1.5,new Promise(function(e){return setTimeout(e,1e3*t)}))];case 1:return e.sent(),n.classList.remove("highlighted"),[2]}var t})})}e.addEventListener("load",function(){var e=n.createElement("style"),e=(n.head.append(e),e.sheet);if(!e)return s("stylesheet not connected");e.insertRule("\n        .question .postcell,\n        .answer .answercell,\n        .question .postcell img,\n        .answer .answercell img {\n            transition: background-color 1s ease-out;\n        }"),e.insertRule(".highlighted {\n            background-color: hsl(11, 100%, 96%);\n        }"),n.querySelectorAll(".js-post-menu .d-flex").forEach(function(e){var t=n.createElement("div"),a=(t.classList.add("flex--item"),n.createElement("button"));a.type="button",a.classList.add("s-btn","s-btn__link"),a.title="Highlight the post background",a.textContent="Highlight",a.addEventListener("click",function(){var t,e,n=a.closest(".answercell, .postcell");if(!n)return s("post box missing");var r=n.querySelectorAll("img");c(n);try{for(var o=__values(r),i=o.next();!i.done;i=o.next()){var l=i.value;c(l)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}}),t.append(a),e.append(t)})})}(window,document);