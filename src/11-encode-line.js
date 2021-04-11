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
  /* const countLetters = {};

  for (let i = 0; i < str.length; i++) {
    countLetters[str[i]] = (countLetters[str[i]] ? countLetters[str[i]] : 0) + 1;
  }

  let newStr = '';
  Object.keys(countLetters).forEach((letter) => {
    newStr += (countLetters[letter] === 1) ? letter : countLetters[letter] + letter;
  }); */

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
