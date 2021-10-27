// Evaluate these (ie True or False)
// [2] === [2] //false 
// {} === {} //false

// What is the value of property “number” for each object.
//If we emplement this code line by line 
const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5}; //5
object1.number = 4; //4
//If we emplement the code all at the same time
const object1 = { number: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { number: 5}; //5
object1.number = 4; //4

// Create a class Animal with the attributes name, type and color

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    };
};

// Create a class Mamal that extends from the Animal class. It has a method called sound(). 
// This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color, noise) {
        super(name, type, color);
        this.noise = noise;
    };
    sound() {
        console.log(`This is the ${this.name} of ${this.type} type, it is ${this.color} and makes "${this.noise}"`);
    };
};

let elephant = new Mamal ("elephant", "mamal", "grey", "uuuuu");
elephant.sound();

//Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
let cow = new Mamal ("cow", "mamal", "colored", "mooo");
cow.sound();