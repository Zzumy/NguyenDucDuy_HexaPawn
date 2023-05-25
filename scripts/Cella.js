export class Cella {
    #adat;
    #id;
    #divElem;

    constructor(id, adat, szuloElem) {
        szuloElem.append(`<div id="${id}"><p>${adat}</p></div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#id = id;
        this.#adat = adat;

        this.#szinBeallit();
        //this.setAllapot();

        this.#divElem.on("click", () => {
            this.#kattintasTrigger();
        });
    }

    setAllapot() {
        if (this.#adat) {
        }
    }

    getId() {
        return this.#id;
    }

    #szinBeallit() {
        if (this.#id % 2 == 0) {
            this.#divElem.attr("style", "background-color: gray");
        } else {
            this.#divElem.attr("style", "background-color: white");
        }
    }

    #kattintasTrigger() {
        const esemeny = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
