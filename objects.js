// creat object using object literals, it is best
const player = {}
// evabe property add kora jay
player.name = 'Shakib';
player.specialty = 'Programmer';
// function o add kora jay
player.game = function () {
    console.log('hard hitter batsman');
}
console.log(player);
player.game()


const student = {
    name: 'ayesha',
    nature: 'rag beshi',
    department: function () {
        console.log('computer')
    },
    roll: 3333221
}
console.log(student)

// 2. object constructor
const personn = new Object();
console.log(personn)

// 3.object create method
const item = Object.create(null);
console.log(item);
const akter = Object.create(student);
console.log(akter.name);

// 4.class
class Person {
    name = 'abul';
    address = 'Vola';
    constructor(age) {
        this.age = age
    }
}
const person1 = new Person(77);
console.log(person1);

// 5.function
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 320);
console.log(tesla);