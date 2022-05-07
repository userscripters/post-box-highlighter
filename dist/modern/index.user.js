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

"use strict";
window.addEventListener("load", () => {
    const delay = (sec) => new Promise((r) => setTimeout(r, sec * 1e3));
    const debug = (msg) => console.debug(`[post-box-highlighter] ${msg}`);
    const highlight = async (el) => {
        el.classList.add("highlighted");
        await delay(1.5);
        el.classList.remove("highlighted");
    };
    const style = document.createElement("style");
    document.head.append(style);
    const { sheet } = style;
    if (!sheet)
        return debug("stylesheet not connected");
    sheet.insertRule(`
        .question .postcell,
        .answer .answercell,
        .question .postcell img,
        .answer .answercell img {
            transition: background-color 1s ease-out;
        }`);
    sheet.insertRule(`.highlighted {
            background-color: hsl(11, 100%, 96%);
        }`);
    const pmenus = document.querySelectorAll(".js-post-menu .d-flex");
    pmenus.forEach((pmenu) => {
        const { dataset } = pmenu;
        if (dataset.highlightSet) {
            return;
        }
        const control = document.createElement("div");
        control.classList.add("flex--item");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("s-btn", "s-btn__link");
        btn.title = "Highlight the post background";
        btn.textContent = "Highlight";
        btn.addEventListener("click", () => {
            const pwrap = btn.closest(".answercell, .postcell");
            if (!pwrap)
                return debug("post box missing");
            const images = pwrap.querySelectorAll("img");
            highlight(pwrap);
            for (const image of images)
                highlight(image);
        });
        control.append(btn);
        pmenu.append(control);
        Object.assign(dataset, { highlightSet: true });
    });
});
