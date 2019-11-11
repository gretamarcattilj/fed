interface Brushable {
    brush(): string;
}

class FurredAnimal2 {
    first: string;
    owner: string;

    constructor(first: string, owner: string) {
        this.first = first;
        this.owner = owner;
    }
}

class Dog2 extends FurredAnimal2 implements Brushable {
    razza: string;
    constructor(first: string, owner: string, razza: string) {
        super(first, owner);
        this.razza = razza;
    }
    brush(): string {
        return this.first + " è il " + "cane di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un cane.";
    }
}

class Cat2 extends FurredAnimal2 implements Brushable {
    razza: string;
    constructor(first: string, owner: string, razza: string) {
        super(first, owner);
        this.razza = razza;
    }
    brush(): string {
        return this.first + " è il " + "gatto di " + this.owner + " ed è un " + this.razza + ", quindi verrà spazzolato come un gatto.";
    }
}

class Toy {
    first: string;
    owner: string;

    constructor(first: string, owner: string) {
        this.first = first;
        this.owner = owner;
    }
}

class TeddyBear extends Toy implements Brushable {
    usura: number;
    constructor(first: string, owner: string, usura: number) {
        super(first, owner);
        this.usura = usura;
    }
    brush(): string {
        return this.first + " è il giocattolo di " + this.owner + " che è stato usato per " + this.usura + " anni, verrà spazzolato come un giocattolo.";
    }
}

class Car extends Toy {
    usura: number;
    constructor(first: string, owner: string, usura: number) {
        super(first, owner);
        this.usura = usura;
    }
    toldAbout(): string {
        return "Questo giocattolo è di " + this.owner + " ed è stato usato per " + this.usura + " anni ma non è brushable";
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
let i1 = new Car("Ruggero", "Carolina", 2);

let ars: Brushable[] = [a1, b1, c1, d1, e1, f1, g1, h1];
ars.forEach((br) => {
    console.log(br.brush());
});