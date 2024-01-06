const { expect } = require("chai");
const { substitution } = require("../src/substitution");
describe("My function", () => {
    it("checks if string works", () => {
      const message ="String"
      const alphabet ="zyxwvutsrqponmlkjihgfedcba"
      const expected = "hgirmt";
  
      const actual = substitution(message, alphabet);
  
      expect(actual).to.deep.equal(expected);
    });
    
describe('Substitution Cipher Additional Tests', () => {
  it('should handle uppercase characters when encoding', () => {
    const message = 'HELLO';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expected = 'svool';

    const actual = substitution(message, alphabet);

    expect(actual).to.equal(expected);
  });

  it('should handle uppercase characters when decoding', () => {
    const message = 'SVOOL';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expected = 'hello';

    const actual = substitution(message, alphabet, false);

    expect(actual).to.equal(expected);
  });

  it('should return false for invalid input alphabet', () => {
    const message = 'hello';
    const invalidAlphabet = 'zyxwvutsrqponmlkjihgfedcb'; // Invalid, not 26 characters

    const result = substitution(message, invalidAlphabet);

    expect(result).to.be.false;
  });

  it('should return false for non-string input alphabet', () => {
    const message = 'hello';
    const invalidAlphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

    const result = substitution(message, invalidAlphabet);

    expect(result).to.be.false;
  });

  it('should return false for non-unique characters in the input alphabet', () => {
    const message = 'hello';
    const nonUniqueAlphabet = 'zyxwvutsrqponmlkjihgfedcbz'; // 'z' is repeated

    const result = substitution(message, nonUniqueAlphabet);

    expect(result).to.be.false;
  });

  it('should return the same message if the alphabet is the standard alphabet and encoding', () => {
    const message = 'hello';
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    const result = substitution(message, standardAlphabet);

    expect(result).to.equal(message);
  });

  it('should return the same message if the alphabet is the standard alphabet and decoding', () => {
    const message = 'hello';
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    const result = substitution(message, standardAlphabet, false);

    expect(result).to.equal(message);
  });
});
    });