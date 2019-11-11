class FurredAnimal2 {
    constructor(first, owner) {
        this.first = first;
        this.owner = owner;
    }
    brush() {
        return this.first + " è il ";
    }
}
class Dog2 extends FurredAnimal2 {
    constructor(first, owner, razza) {
        super(first, owner);
        this.razza = razza;
    }
    brush() {
        return super.brush() + "cane di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un cane.";
    }
}
class Cat2 extends FurredAnimal2 {
    constructor(first, owner, razza) {
        super(first, owner);
        this.razza = razza;
    }
    brush() {
        return super.brush() + "gatto di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un gatto.";
    }
}
class Toy {
    constructor(first, owner) {
        this.first = first;
        this.owner = owner;
    }
    brush() {
        return this.first + " è il giocattolo di " + this.owner;
    }
}
class TeddyBear extends Toy {
    constructor(first, owner, usura) {
        super(first, owner);
        this.usura = usura;
    }
    brush() {
        return super.brush() + " che è stato usato per " + this.usura + " anni, verrà spazzolato come un giocattolo.";
    }
}
let a1 = new Dog2("Ciccio", "Francesco", "alano");
let b1 = new Cat2("Romilda", "Giosuè", "persiano");
let c1 = new Dog2("Roger", "Giovanni", "Golden Retriver");
let d1 = new TeddyBear("Peter", "Brian", 3);
let e1 = new Cat2("Palla", "Antonio", "persiano");
let f1 = new TeddyBear("Richard", "luca", 8);
let g1 = new Dog2("Amedeo", "Luigia", "bassotto");
let h1 = new Dog2("Cristoforo", "Giampaolo", "pastore tedesco");
let Brushable = [a1, b1, c1, d1, e1, f1, g1, h1];
Brushable.forEach((br) => {
    console.log(br.brush());
});
//# sourceMappingURL=brushable.js.map