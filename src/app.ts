interface LivingBeing {
   category: string;
}

interface calcFn {
    (a: number, b: number): number;// Defining function via an interface
}

let addFn: calcFn;

addFn = (n1: number, n2: number) => {
    return n1 + n2;
}


interface Person extends LivingBeing {
    name: string; // You cannot initialize attributes in interface
    age: number;
    hairColor?: string;//This is an optional property where an implementing class can decide whether to use hairColor or not
    greet(phrase: string): void;
}

class PersonImpl implements Person {
    name: string;
    age: number;
    readonly profession: string;
    category: string;

    constructor(name: string, age: number, profession: string, catergory: string) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.category = catergory;
    }

    greet(phrase: string): void {
        console.log(phrase + ' from PersonImpl' + ' ' + this.name);
    }    
}

let user1: Person;

user1 = {
    name: 'Abhijeet Kulshreshtha',
    age: 37,
    category: 'Homosapien',
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi - I am');

let user2: PersonImpl = new PersonImpl('Abhijeet K', 37, 'Software Engineer', 'Nerd');
// user2.profession = '';cannot assign as profession is a read only property
user2.greet('Hi - I am');
