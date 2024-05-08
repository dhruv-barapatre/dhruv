class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
let dog = new Dog('Buddy');
dog.speak();

// Explaination Of This Code .
// first of all
// class reprsent animal its constuctor takes name
// and it constracutor takes method speak
// class dog extends the method animal 
// and declare let dog named "Buddy"
// and just called speak() it is mehod of dog