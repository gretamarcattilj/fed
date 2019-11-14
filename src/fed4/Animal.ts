class Animal {
    weight: number;
    name: string;

    constructor(weight: number, name: string) {
        this.weight = weight;
        this.name = name;
    }
    eat(): void {
        this.weight += 1;
    }

    toStringa(): string {
        return this.name + " pesa " + this.weight.toString();
    }
}

class Mammal extends Animal {
    energy: number;
    constructor(weight: number, name: string, energy: number) {
        super(weight, name);
        this.energy = energy;
    }
    eat(): void {
        super.eat();
        this.energy += 2;
    }

    toStringa(): string {
        return super.toStringa() + " con energia " + this.energy;
    }
}

class Reptilian extends Animal {
    temperature: number;
    constructor(weight: number, name: string, temperature: number) {
        super(weight, name);
        this.temperature = temperature;
    }
    eat(): void {
        super.eat();
        this.temperature += 0.5;
    }

    toStringa(): string {
        return super.toStringa() + " con temperatura " + this.temperature;
    }
}

let a3 = new Mammal(2, "Giorgio", 3);
let b3 = new Reptilian(8, "Carlotta", 75);
let c3 = new Mammal(3, "Romeo", 1.5);
let d3 = new Mammal(42, "Giuseppe", 6);
let e3 = new Reptilian(16, "Moreno", 109);
let as: Animal[] = [a3, b3, c3, d3, e3];

as.forEach(a => console.log(a.toStringa()));
as.forEach(a => a.eat());
as.forEach(a => console.log(a.toStringa()));