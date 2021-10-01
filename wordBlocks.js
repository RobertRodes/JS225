function isBlockWord(word) {
  let blocks = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 
    'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
  ];

  let wordChars = [...word.toUpperCase()];

  for (const char of wordChars) {
    let idx = blocks.findIndex(block => block.includes(char))
    if (idx === -1) return false;
    blocks.splice(idx, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false