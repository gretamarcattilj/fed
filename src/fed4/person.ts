class Person {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    fullInfo(): string {
        return this.first + ' ' + this.last;
    }
}

let p: Person = new Person("Tom", "Jones");
console.log(p.fullInfo());
let persons = [new Person("Greta", "Marcattilj"), new Person("Gaia", "Marcattilj"), new Person("Nicolò", "Fratti")];

persons.forEach((person) => console.log(person.fullInfo()));
console.log(p.fullInfo())