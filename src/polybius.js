// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I/J', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];
    input = input.toUpperCase();
    let result = '';
    let numbersCount = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input[i] =="I" || input[i] =="J"? "I/J" :  input[i];

      if (/[A-Z]/.test(char) || char === ' '|| /[1-5]/.test(char)) {
        if (encode && char !== ' ') {
          for (let row = 0; row < polybiusSquare.length; row++) {
            const col = polybiusSquare[row].indexOf(char);
            if (col !== -1) {
              result += `${col + 1}${row + 1}`;
              numbersCount += 2;
              break;
            }
          }
        } else if (!encode && char !== ' ') {
          const code = input.slice(i, i + 2);
          const col = parseInt(code[0]) - 1;
          const row = parseInt(code[1]) - 1;
          if (row >= 0 && row < polybiusSquare.length && col >= 0 && col < polybiusSquare[row].length) {
            result += polybiusSquare[row][col].toLowerCase();
            numbersCount += 2;
          } else {
            return false;
          }
          i++;
        } else {
          result += ' ';
        }
      } else {
        return false;
      }
    }
    if (!encode && numbersCount % 2 !== 0) {
      return false;
    }
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
