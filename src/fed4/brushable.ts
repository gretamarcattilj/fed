interface Brushable {
    brush(): string;
}

class FurredAnimals implements Brushable {
    first: string;
    owner: string;

    constructor(first: string, owner: string) {
        this.first = first;
        this.owner = owner;
    }
    brush(): string {
        return this.first + " è il ";
    }
}

class Dogs extends FurredAnimals {
    razza: string;
    constructor(first: string, owner: string, razza: string) {
        super(first, owner);
        this.razza = razza;
    }
    brush(): string {
        return super.brush() + "cane di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un cane.";
    }
}

class Cats extends FurredAnimals {
    razza: string;
    constructor(first: string, owner: string, razza: string) {
        super(first, owner);
        this.razza = razza;
    }
    brush(): string {
        return super.brush() + "gatto di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un gatto.";
    }
}

class Toys {
    first: string;
    owner: string;

    constructor(first: string, owner: string) {
        this.first = first;
        this.owner = owner;
    }
    brush(): string {
        return this.first + " è il giocattolo di " + this.owner;
    }
}

class TeddyBear extends Toys {
    usura: number;
    constructor(first: string, owner: string, usura: number) {
        super(first, owner);
        this.usura = usura;
    }
    brush(): string {
        return super.brush() + " che è stato usato per " + this.usura + " anni, verrà spazzolato come un giocattolo.";
    }
}

let a1 = new Dogs("Ciccio", "Francesco", "alano");
let b1 = new Cats("Romilda", "Giosuè", "persiano");
let c1 = new Dogs("Roger", "Giovanni", "Golden Retriver");
let d1 = new TeddyBear("Peter", "Brian", 3);
let g1 = new Dogs("Amedeo", "Luigia", "bassotto");
let f1 = new TeddyBear("Richard", "luca", 8);
let e1 = new Cats("Palla", "Antonio", "persiano");
let h1 = new Dogs("Cristoforo", "Giampaolo", "pastore tedesco");

let brushable = [a1, b1, c1, d1, e1, f1, g1, h1];
brushable.forEach((br) => {
    console.log(br.brush());
});