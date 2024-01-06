// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) {
      return false;
    }
    const hasUniqueCharacters = (str) => new Set(str).size === str.length;
    if (!hasUniqueCharacters(alphabet)) {
      return false;
    }
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputLowerCase = input.toLowerCase();
    let result = '';
    for (let i = 0; i < inputLowerCase.length; i++) {
      const char = inputLowerCase[i];
      if (char === ' ') {
        result += ' ';
      } else if (encode) {
        const index = standardAlphabet.indexOf(char);
        if (index !== -1) {
          result += alphabet[index];
        } else {
          result += char;
        }
      } else {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
          result += standardAlphabet[index];
        } else {
          result += char;
        }
      }
    }
    return result;
  }
  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
