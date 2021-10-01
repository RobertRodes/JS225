function star(size) {
  const line = (lineSize) => {
    const leftPad = ' '.repeat((size - lineSize) / 2);
    const internalPad = ' '.repeat((lineSize - 3) / 2);
    return `${leftPad}*${internalPad}*${internalPad}*`;
  }

  for (let i = size; i >= 3; i -= 2) {
    console.log(line(i));
  }

  console.log('*'.repeat(size));

  for (let i = 3; i <= size; i += 2) {
    console.log(line(i));    
  }
}

star(25);