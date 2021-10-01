const NamedObject = (function() {
  return {
    ancestors() {
      let arrAncestors = [];
      let obj = Object.getPrototypeOf(this); 

      while (Object.getPrototypeOf(obj) !== Object.prototype) {
        arrAncestors.push(obj.name);
        obj = Object.getPrototypeOf(obj);
      }

      return arrAncestors.concat(['Object.prototype']);
    },
  }

})();

const foo = Object.create(NamedObject, {name: {value: 'foo'}});
const bar = Object.create(foo, {name: {value: 'bar'}});
const baz = Object.create(bar, {name: {value: 'baz'}});
const qux = Object.create(baz, {name: {value: 'qux'}});

// const foo = Object.create(NamedObject);
// foo.name = 'foo';
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']


// const foo = {name: 'foo'};

// foo.ancestors = function() {
//   let arrAncestors = [];
//   let obj = this;

//   while (Object.getPrototypeOf(obj) !== Object.prototype) {
//     arrAncestors.push(obj.name);
//     obj = Object.getPrototypeOf(obj);
//   }

//   return arrAncestors.concat(['Object.prototype']);
// }

// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// // bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']
// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']
