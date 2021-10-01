// let Animal = {
//   init(name) {
//     this.name = name;
//   },

//   sleep() {
//     console.log(`${this.name} is sleeping.`)
//   },
// }

// let Dog = Object.create(Animal);

// Object.assign(Dog, {
//   init(name) {
//     Animal.init.call(this, name);
//     return this;
//   },

//   bark() {
//     console.log(`${this.name} says "Woof!"`);
//   }
// });

// let spot = Object.create(Dog).init('Spot');

// spot.sleep();
// spot.bark();

function Animal(name) {
  this.name = name;
}

Animal.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`)
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log(`${this.name} says "Woof!"`);
}

let spot = new Dog('Spot');
spot.sleep();
spot.bark();