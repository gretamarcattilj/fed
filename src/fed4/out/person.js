class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    fullInfo() {
        return this.first + ' ' + this.last;
    }
}
let p = new Person("Tom", "Jones");
console.log(p.fullInfo());
let persons = [new Person("Greta", "Marcattilj"), new Person("Gaia", "Marcattilj"), new Person("Nicolò", "Fratti")];
persons.forEach((person) => console.log(person.fullInfo()));
console.log(p.fullInfo());
//# sourceMappingURL=person.js.map