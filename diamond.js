function diamond(size, hollow = false) {
  const line = (lineSize) => {
    const repCount = (size - lineSize) / 2
    
    if (hollow && lineSize > 1) {
      return `${' '.repeat(repCount)}*${' '.repeat(lineSize - 2)}*`;
    } else {
      return `${' '.repeat(repCount) + '*'.repeat(lineSize)}`;
    }
  }

  for (let i = 1; i <= size; i += 2) {
    console.log(line(i));
  }

  for (let i = size - 2; i > 0; i -= 2) {
    console.log(line(i));    
  }
}

diamond(9);
diamond(9, true);