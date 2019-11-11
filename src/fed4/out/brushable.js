class FurredAnimals {
    constructor(first, owner) {
        this.first = first;
        this.owner = owner;
    }
    brush() {
        return this.first + " è il ";
    }
}
class Dogs extends FurredAnimals {
    constructor(first, owner, razza) {
        super(first, owner);
        this.razza = razza;
    }
    brush() {
        return super.brush() + "cane di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un cane.";
    }
}
class Cats extends FurredAnimals {
    constructor(first, owner, razza) {
        super(first, owner);
        this.razza = razza;
    }
    brush() {
        return super.brush() + "gatto di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un gatto.";
    }
}
class Toys {
    constructor(first, owner) {
        this.first = first;
        this.owner = owner;
    }
    brush() {
        return this.first + " è il giocattolo di " + this.owner;
    }
}
class TeddyBear extends Toys {
    constructor(first, owner, usura) {
        super(first, owner);
        this.usura = usura;
    }
    brush() {
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
//# sourceMappingURL=brushable.js.map