function transpose(matrix) {
  let newMatrix = [];

  for (let row = 0; row < matrix[0].length; row++) {
    newMatrix.push([]);
    for (let col = 0; col < matrix.length; col++) {
      newMatrix[row].push(matrix[col][row]);
    }
  }

  return newMatrix;
}

function _transposeInPlace(matrix) {
  [matrix[0][1], matrix[1][0]] = [matrix[1][0], matrix[0][1]];
  [matrix[0][2], matrix[2][0]] = [matrix[2][0], matrix[0][2]];
  [matrix[1][2], matrix[2][1]] = [matrix[2][1], matrix[1][2]];  
}

function transposeInPlace(matrix) {
  const rowLength = matrix[0].length;
  const colLength = matrix.length;

  for (let row = 0; row < rowLength; row++) {
    for (let col = row; col < matrix.length; col++) {
      if (col === row) continue;
      [matrix[row][col], matrix[col][row]] = 
      [matrix[col][row], matrix[row][col]];
    }
  }

  while (matrix.length < rowLength) {
    let newRow = [];
    for (let row = 0; row < colLength; row++) {
      newRow.push(matrix[row].splice(colLength, 1));
    }
    matrix.push(newRow.flat());
  }

  while (matrix.length > rowLength) {
    matrix.pop();
  }

  return matrix;
}

console.log(transpose([[1], [2], [3], [4]]));

let matrix = [
  [1, 5, 8, 7, 2],
  [4, 7, 2, 1, 6],
  [3, 9, 6, 2, 4]
]

let matrix2 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
  [2, 4, 9],
  [8, 1, 5]
]

transposeInPlace(matrix);
transposeInPlace(matrix2);

console.log(matrix);
console.log(matrix2);
