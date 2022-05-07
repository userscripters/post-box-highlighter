window.addEventListener("load", () => {
    const delay = (sec: number) => new Promise((r) => setTimeout(r, sec * 1e3));

    const debug = (msg: string) => console.debug(`[post-box-highlighter] ${msg}`);

    const highlight = async (el: Element) => {
        el.classList.add("highlighted");
        await delay(1.5);
        el.classList.remove("highlighted");
    };

    const appendStyles = () => {
        const style = document.createElement("style");
        document.head.append(style);
        const { sheet } = style;
        if (!sheet) return debug("stylesheet not connected");

        const rules: string[] = [
            `.question .postcell,
             .answer .answercell,
             .question .postcell img,
             .answer .answercell img {
                transition: background-color 1s ease-out;
            `,
            `.highlighted {
                background-color: var(--black-050);
            }`
        ];

        rules.forEach((rule) => sheet.insertRule(rule));
    };

    appendStyles();

    const pmenus = document.querySelectorAll<HTMLElement>(".js-post-menu .d-flex");
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
            if (!pwrap) return debug("post box missing");

            const images = pwrap.querySelectorAll("img");

            highlight(pwrap);
            for (const image of images) highlight(image);
        });

        control.append(btn);
        pmenu.append(control);

        Object.assign(dataset, { highlightSet: true });
    });
});