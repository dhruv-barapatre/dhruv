class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

// Explaination Of This Code .
// first of all
// class reprsent vehicle its constuctor takes make and model
// and it constracutor takes method getInfo
// class car extends the method vehicle it takes year 
// and declare let mycar make "toyota", model "carmy" and year "2020" 
// and just console getInfo it is method of vehicle