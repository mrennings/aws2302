class Buch {
    
    #titel; #autor; #preis; #isbn;

    constructor(titel, autor, preis, isbn) {
        this.#titel = titel;
        this.#autor = autor;
        this.#preis = preis;
        this.#isbn = isbn;
    }

    get titel() { return this.#titel; }
    set titel(t) { this.#titel = t; }

	get autor() { return this.#autor; }
    set autor(a) { this.#autor = a; }

    get preis() { return this.#preis; }
    set preis(p) { this.#preis = p; }

    get isbn() { return this.#isbn; }
    set isbn(i) { this.#isbn = i; }


}

buecher = [
    new Buch("Unknown book", "The Unknown Stuntman", 9.99, "1-2345-6789-0"),
    new Buch("Noch'n Buch", "Noch N. Autor", 12.99, "0-9876-5432-1"),
    new Buch("Ein Letztes", "Schreiber Ling", 4.99, "1-0293-4857-6")
];
buecher[3] = new Buch();
buecher[3].titel = "Fehlendes Buch";
buecher[3].autor = "Kein Autor";
buecher[3].preis = 19.99;


buecher.forEach( (buch) => {
    console.log(`${buch.titel} (${buch.autor}): ${buch.preis} €`);
});
