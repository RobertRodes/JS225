const delegate = (obj, func, ...args) => () => obj[func](args.flat());
// function delegate(obj, func, ...args) {
//   return () => obj[func](args.flat());
// }

const foo = {
  greeting: 'Hello',
  bar(names) {
    let strNames = names.slice(0, -1).join(', ');
    strNames += ' and ' + names.slice(-1);
    console.log(`${this.greeting}, ${strNames}!`);
  },
};

const baz = {};

baz.qux = delegate(foo, 'bar', 'Anne', 'Bob', 'John'),
baz.qux();   // logs 'Hello, Anne, Bob and John!'

baz.qux = delegate(foo, 'bar', ['David', 'Peter', 'Paul']);
baz.qux();   // logs 'Hello, David, Peter and Paul!'