function extendPrototype(classToExtend) {
    Object.defineProperty(classToExtend.prototype, 'species',
        {
            value: "Human",
            writable: true,
            configurable: true,
            enumerable: true
        });

    Object.defineProperty(classToExtend.prototype, 'toSpeciesString',
        {
            value: function () { return `I am a ${this.species}. ${this.toString()}` },
            writable: true,
            configurable: true,
            enumerable: true
        });
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        return super.toString().substring(0, super.toString().length - 1) + `, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        return super.toString().substring(0, super.toString().length - 1) + `, course: ${this.course})`;
    }
}

extendPrototype(Person);
let p = new Person("Pesho", "email@hit.bg");
console.log(p.species); //.to.equal('Human',"No species property");
console.log(p.toSpeciesString()); //.to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");