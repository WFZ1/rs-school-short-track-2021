/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];

    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) newMatrix[i][j] = 1;
      else {
        let k = 0;

        // Top & Bottom
        if (i > 0 && matrix[i - 1][j]) k++;
        if (i < matrix.length - 1 && matrix[i + 1][j]) k++;

        // Left & Right
        if (j > 0 && matrix[i][j - 1]) k++;
        if (j < matrix[0].length - 1 && matrix[i][j + 1]) k++;

        // Top left, top right, bottom left, bottom right angles
        if (i > 0 && j > 0 && matrix[i - 1][j - 1]) k++;
        if (i > 0 && j < matrix[0].length - 1 && matrix[i - 1][j + 1]) k++;
        if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1]) k++;
        if (i < matrix.length - 1 && j < matrix[0].length - 1 && matrix[i + 1][j + 1]) k++;

        newMatrix[i][j] = k;
      }
    }
  }

  return newMatrix;
}

module.exports = minesweeper;
