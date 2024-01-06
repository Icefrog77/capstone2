// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (typeof shift === 'undefined' || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    input = input.toLowerCase();
    let result = '';

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (/[a-z]/.test(char)) {
        const index = alphabet.indexOf(char);
        let shiftedIndex;
        if (encode) {
          shiftedIndex = (index + shift) % 26;
          shiftedIndex = shiftedIndex < 0 ? 26 + shiftedIndex : shiftedIndex;
        } else {
          shiftedIndex = (index - shift) % 26;
          shiftedIndex = shiftedIndex < 0 ? 26 + shiftedIndex : shiftedIndex;
        }
        result += alphabet[shiftedIndex];
      } else {
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
