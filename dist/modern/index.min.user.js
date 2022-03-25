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

"use strict";((e,l)=>{const o=e=>console.debug("[post-box-highlighter] "+e),i=async e=>{var t;e.classList.add("highlighted"),t=1.5,await new Promise(e=>setTimeout(e,1e3*t)),e.classList.remove("highlighted")};e.addEventListener("load",()=>{var e=l.createElement("style");l.head.append(e);const t=e["sheet"];if(!t)return o("stylesheet not connected");t.insertRule(`
        .question .postcell,
        .answer .answercell,
        .question .postcell img,
        .answer .answercell img {
            transition: background-color 1s ease-out;
        }`),t.insertRule(`.highlighted {
            background-color: hsl(11, 100%, 96%);
        }`);const s=l.querySelectorAll(".js-post-menu .d-flex");s.forEach(e=>{const t=l.createElement("div"),n=(t.classList.add("flex--item"),l.createElement("button"));n.type="button",n.classList.add("s-btn","s-btn__link"),n.title="Highlight the post background",n.textContent="Highlight",n.addEventListener("click",()=>{const e=n.closest(".answercell, .postcell");if(!e)return o("post box missing");var t=e.querySelectorAll("img");i(e);for(const s of t)i(s)}),t.append(n),e.append(t)})})})(window,document);