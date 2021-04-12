/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let newStr = '';

  for (let i = 1, k = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      k += 1;
    } else if (k > 1) {
      newStr += k + str[i - 1];
      k = 1;
    } else {
      newStr += str[i - 1];
    }
  }

  return newStr;
}

module.exports = encodeLine;
