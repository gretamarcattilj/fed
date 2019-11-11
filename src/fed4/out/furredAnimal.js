class FurredAnimal {
    constructor(first, owner) {
        this.first = first;
        this.owner = owner;
    }
    brush() {
        return this.first + " è il ";
    }
}
class Dog extends FurredAnimal {
    constructor(first, owner, razza) {
        super(first, owner);
        this.razza = razza;
    }
    brush() {
        return super.brush() + "cane di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un cane.";
    }
}
class Cat extends FurredAnimal {
    constructor(first, owner, razza) {
        super(first, owner);
        this.razza = razza;
    }
    brush() {
        return super.brush() + "gatto di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un gatto.";
    }
}
let a = new Dog("Ciccio", "Francesco", "alano");
let b = new Cat("Romilda", "Giosuè", "persiano");
let c = new Dog("Roger", "Giovanni", "Golden Retriver");
let d = new Dog("Amedeo", "Luigia", "bassotto");
let e = new Cat("Palla", "Antonio", "persiano");
let f = new Dog("Cristoforo", "Giampaolo", "pastore tedesco");
let fas = [a, b, c, d, e, f];
fas.forEach((fa) => {
    console.log(fa.brush());
});
//# sourceMappingURL=furredAnimal.js.map