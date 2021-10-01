const myBind = function(boundFunc, aThis) {
  return function(...args) {
    return boundFunc.apply(aThis, args);
  }
}

let person = {
  lastName: "Rodes"
};

const fullName = function(firstName) {
  console.log(firstName, this.lastName);
}

const showFullName = myBind(fullName, person);

showFullName("Bob");


const myBindWithArguments = function(boundFunc, someThis, ...boundArgs) {
  return function(...args) {
    return boundFunc.apply(someThis, boundArgs.concat(args));
  }
}

const add = function(addend1, addend2) {return addend1 + addend2}

const addTwo = myBindWithArguments(add, 2);

console.log(addTwo(7));

function fullName(salutation, firstName) {
  console.log(salutation, firstName, this.lastName);
}

let person = {
  lastName: "Rodes"
};

const showFullName = myBindWithArguments(fullName, person, 'Mr.');

showFullName('Bob'); // Mr. Bob Rodes


