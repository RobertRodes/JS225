function _objectsEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object') return false;

  let [arrA, arrB] = [Object.entries(a), Object.entries(b)];
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i][0] !== arrB[i][0] || arrA[i][1] !== arrB[i][1]) return false;
  }

  return true;
}

function objectsEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object') return false;

  let [arrA, arrB] = [Object.entries(a).sort(), Object.entries(b).sort()];
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i][0] !== arrB[i][0]) return false;
    if (typeof arrA[i][1] === 'object' && typeof arrB[i][1] === 'object') {
      if (!objectsEqual(arrA[i][1], arrB[i][1])) return false;
    } else {
      if (arrA[i][1] !== arrB[i][1]) return false;
    }
  }

  return true;
}


// Extra tests borrowed from Jemima Kingsley

console.log('Should be: true');

console.log(objectsEqual(NaN, NaN));                      // true
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: true, b: false}, {a: true, b: false}));  // true
console.log(objectsEqual({a: true, b: false}, {b: false, a: true}));  // true
console.log(objectsEqual({a: 'foo', b: { this: 'that'}}, {a: 'foo', b: { this: 'that'}}));  // true
console.log(objectsEqual({a: 'foo', b: ['this', 'that']}, {a: 'foo', b: ['this', 'that']}));  // true
console.log(objectsEqual({a: 'foo', b: { this: 'that', other: { one: 'one'}}},
                         {a: 'foo', b: { this: 'that', other: { one: 'one'}}}));  // true

console.log('Should be: false');

console.log(objectsEqual({a: 'foo', b: NaN}, {a: 'foo', b: NaN}));  // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', c: '1'}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: { this: 'that'}}, {a: 'foo', b: { this: 'other'}}));  // false
console.log(objectsEqual({a: 'foo', b: ['this']}, {a: 'foo', b: ['this', 'that']}));  // false
console.log(objectsEqual({a: 'foo', b: { this: 'that', other: { one: 'one'}}}, 
                         {a: 'foo', b: { this: 'that', other: { one: 'two'}}}));  // false
