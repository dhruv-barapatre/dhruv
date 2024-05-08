class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());

// Explaination Of This Code .
// first of all
// class reprsent shape its constuctor takes color
// and it constracutor takes method getColor
// class shape extends the method circle and it takes radius
// class circle extends the method ColoredCircle 
// and declare let dog color blue and colored circle 5 
// and just console getcircle it is mehod of shape