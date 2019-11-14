class Animal {
    constructor(weight, name) {
        this.weight = weight;
        this.name = name;
    }
    eat() {
        this.weight += 1;
    }
    toStringa() {
        return this.name + " pesa " + this.weight.toString();
    }
}
class Mammal extends Animal {
    constructor(weight, name, energy) {
        super(weight, name);
        this.energy = energy;
    }
    eat() {
        super.eat();
        this.energy += 2;
    }
    toStringa() {
        return super.toStringa() + " con energia " + this.energy;
    }
}
class Reptilian extends Animal {
    constructor(weight, name, temperature) {
        super(weight, name);
        this.temperature = temperature;
    }
    eat() {
        super.eat();
        this.temperature += 0.5;
    }
    toStringa() {
        return super.toStringa() + " con temperatura " + this.temperature;
    }
}
let a3 = new Mammal(2, "Giorgio", 3);
let b3 = new Reptilian(8, "Carlotta", 75);
let c3 = new Mammal(3, "Romeo", 1.5);
let d3 = new Mammal(42, "Giuseppe", 6);
let e3 = new Reptilian(16, "Moreno", 109);
let as = [a3, b3, c3, d3, e3];
as.forEach(a => console.log(a.toStringa()));
as.forEach(a => a.eat());
as.forEach(a => console.log(a.toStringa()));
//# sourceMappingURL=Animal.js.map