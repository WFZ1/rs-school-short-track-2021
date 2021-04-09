/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = Array.from(arr);
  newArr.sort((a, b) => a - b);

  const i = 0;
  while (newArr[i] === -1) {
    newArr.splice(i, 1);
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      newArr.splice(j, 0, arr[j]);
    }
  }

  return newArr;
}

module.exports = sortByHeight;
