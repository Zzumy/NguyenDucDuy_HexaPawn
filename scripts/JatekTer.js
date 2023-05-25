import { Cella } from "./Cella.js";

export class JatekTer {
    #db;
    #allapotLista;
    #elemLista;
    #lepes;

    constructor() {
        this.#jatekter();
        this.#init();
        $(window).on("kapcsolas", (event) => {
            this.#lepesekKeresese();
            this.#ellenorzes();
        });
    }

    #jatekter() {
        this.#allapotLista = ["♟", "♟", "♟", "", "", "", "♙", "♙", "♙"];
        for (let ix = 0; ix < this.#allapotLista.length; ix++) {
            this.#allapotLista[ix];
        }
    }

    #init() {
        const szuloElem = $("article");
        szuloElem.empty();
        for (let ix = 0; ix < this.#allapotLista.length; ix++) {
            const cella = new Cella(ix, this.#allapotLista[ix], szuloElem);
        }
    }

    #lepesekKeresese(kivalasztottIndex) {}

    #ellenorzes() {}
}
