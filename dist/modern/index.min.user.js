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
// @version         0.3.0
// ==/UserScript==

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

"use strict";window.addEventListener("load",()=>{const l=e=>console.debug("[post-box-highlighter] "+e),i=async e=>{var t;e.classList.add("highlighted"),t=1.5,await new Promise(e=>setTimeout(e,1e3*t)),e.classList.remove("highlighted")};(()=>{var e=document.createElement("style");document.head.append(e);const t=e["sheet"];if(!t)return l("stylesheet not connected");const s=[`.question .postcell,
             .question .votecell,
             .answer .answercell,
             .answer .votecell,
             .question .postcell img,
             .answer .answercell img {
                transition: background-color 1s ease-out;
            `,`.highlighted {
                background-color: var(--black-050);
            }`];s.forEach(e=>t.insertRule(e))})();const e=document.querySelectorAll(".js-post-menu .d-flex");e.forEach(e=>{var t=e["dataset"];if(!t.highlightSet){const s=document.createElement("div"),o=(s.classList.add("flex--item"),document.createElement("button"));o.type="button",o.classList.add("s-btn","s-btn__link"),o.title="Highlight the post background",o.textContent="Highlight",o.addEventListener("click",()=>{const e=o.closest(".answercell, .postcell");if(!e)return l("post box missing");const t=e.previousElementSibling;t&&t.classList.contains("votecell")&&i(t);var s=e.querySelectorAll("img");i(e);for(const n of s)i(n)}),s.append(o),e.append(s),Object.assign(t,{highlightSet:!0})}})});