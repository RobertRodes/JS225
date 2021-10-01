// "use strict";

let auto = {
  speed: 25,
  accelerate(amount) {
    // this.speed += amount;
    console.log(goFaster); // [Function: accelerate]
    console.log(this.speed); // undefined
  }
}

let goFaster = auto.accelerate;
goFaster(10);