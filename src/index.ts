((w, d) => {
    const delay = (sec: number) => new Promise((r) => setTimeout(r, sec * 1e3));

    const debug = (msg: string) => console.debug(`[post-box-highlighter] ${msg}`);

    const highlight = async (el: Element) => {
        el.classList.add("highlighted");
        await delay(1.5);
        el.classList.remove("highlighted");
    };

    w.addEventListener("load", () => {
        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet) return debug("stylesheet not connected");

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

        const pmenus = d.querySelectorAll(".js-post-menu .d-flex");
        pmenus.forEach((pmenu) => {
            const control = d.createElement("div");
            control.classList.add("flex--item");

            const btn = d.createElement("button");
            btn.type = "button";
            btn.classList.add("s-btn", "s-btn__link");
            btn.title = "Highlight the post background";
            btn.textContent = "Highlight";

            btn.addEventListener("click", () => {
                const pwrap = btn.closest(".answercell, .postcell");
                if (!pwrap) return debug("post box missing");

                const images = pwrap.querySelectorAll("img");

                highlight(pwrap);
                for (const image of images) highlight(image);
            });

            control.append(btn);
            pmenu.append(control);
        });
    });
})(window, document);