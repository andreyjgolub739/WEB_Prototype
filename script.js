//Завдання 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello. My name is ${this.name}, age - ${this.age}.`);
};

const person = new Person('Andrey', 18);
person.greet(); // Hello. My name is Andrey, age - 18.

//Завдання 2
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log("Тварина видає звук.");
};

function Dog(name) {
    Animal.call(this, name); //Так викликається конструтор "батька".
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log("Собака гавкає.");
};

const dog = new Dog("Tax");
dog.speak(); //Собака гавкає.

//Завдання 3
function Car(brand) {
    this.brand = brand;
}

const car1 = new Car('BMWW');
const car2 = new Car('Toyot');

Car.prototype.describe = function() {
    console.log(`Марка автомобіля: ${this.brand}.`);
};

car1.describe();
car2.describe();

//Завдання 4
function Shape() {
    Shape.prototype.draw = function() {
        console.log("Малюємо фігуру");
    };
}

function Circle() {}

//Таким чином Circle наслідується віж Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("Малюємо коло");
};

const shape = new Shape(), circle = new Circle();

shape.draw(); // Малюємо фігуру
circle.draw(); // Малюємо коло

//Завдання 5
function Vehicle() {}

Vehicle.prototype.start = function() {
    console.log('The vehicle started');
};

Vehicle.prototype.stop = function() {
    console.log('The vehicle stopped');
};

function CarCar () {
    Vehicle.call(this);
}

CarCar.prototype = Object.create(Vehicle.prototype);
CarCar.prototype.constructor = CarCar;

function ElectricCar(){
    CarCar.call(this);
}

ElectricCar.prototype = Object.create(CarCar.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function() {
    console.log('Electric car charged');
};

const electricCar = new ElectricCar();
electricCar.start();   // The vehicle started
electricCar.charge();  // Electric car charged
electricCar.stop();    // The vehicle stopped