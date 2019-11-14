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
class Horse extends Mammal {
    constructor(weight, name, energy, color) {
        super(weight, name, energy);
        this.color = color;
    }
    transport() {
        return this.weight / 2;
    }
}
class Caiman extends Reptilian {
    constructor(weight, name, temperature, length) {
        super(weight, name, temperature);
        this.length = length;
    }
    transport() {
        return this.weight / 3;
    }
}
class Truck {
    constructor(weight) {
        this.weight = weight;
    }
    transport() {
        return this.weight * 1.5;
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
let a4 = new Horse(2, "Giorgio", 3, "white");
let b4 = new Caiman(8, "Carlotta", 75, 200);
let c4 = new Caiman(3, "Romeo", 1.5, 35);
let d4 = new Truck(1500);
let e4 = new Horse(16, "Moreno", 109, "black");
let as2 = [a4, b4, c4, d4, e4];
as2.forEach(a => console.log(a.transport()));
//# sourceMappingURL=Animal.js.map