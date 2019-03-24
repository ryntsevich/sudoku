module.exports = function solveSudoku(matrix) {


  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        let alreadyUsed = [];
        for (let i = 0; i < 9; i++) {
          alreadyUsed.push(matrix[row][i]);
          alreadyUsed.push(matrix[i][col]);
        };
        const squareRow = Math.floor(row / 3) * 3;
        const squareCol = Math.floor(col / 3) * 3;
        for (let sqRow = squareRow; sqRow < squareRow + 3; sqRow++) {
          for (sqCol = squareCol; sqCol < squareCol + 3; sqCol++) {
            alreadyUsed.push(matrix[sqRow][sqCol]);
          };
        };

        const avaliable = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(sudokuNumber => alreadyUsed.indexOf(sudokuNumber) < 0);
        for (let j = 0; j < avaliable.length; j++) {
          matrix[row][col] = avaliable[j];
          const solvedMatrix = solveSudoku(matrix);
          if (solvedMatrix) {
            return solvedMatrix;
          };
        };
        matrix[row][col] = 0;
        return false;
      };
    };
  };
  return matrix;
};