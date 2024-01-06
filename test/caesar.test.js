const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("My function", () => {
    it("checks if string works", () => {
      const message ="String"
      const shift =5
      const expected = "xywnsl";
  
      const actual = caesar(message, shift);
  
      expect(actual).to.deep.equal(expected);
    });
    const { caesar } = require('./yourCaesarModulePath'); // Replace with the actual path
const { expect } = require('chai');

describe('Caesar Cipher Additional Tests', () => {
  it('should handle uppercase characters when encoding', () => {
    const message = 'HELLO';
    const shift = 3;
    const expected = 'khoor';

    const actual = caesar(message, shift);

    expect(actual).to.equal(expected);
  });

  it('should handle uppercase characters when decoding', () => {
    const message = 'KHOOR';
    const shift = 3;
    const expected = 'hello';

    const actual = caesar(message, shift, false);

    expect(actual).to.equal(expected);
  });

  it('should handle negative shifts when encoding', () => {
    const message = 'hello';
    const shift = -3;
    const expected = 'ebiil';

    const actual = caesar(message, shift);

    expect(actual).to.equal(expected);
  });

  it('should handle negative shifts when decoding', () => {
    const message = 'ebiil';
    const shift = -3;
    const expected = 'hello';

    const actual = caesar(message, shift, false);

    expect(actual).to.equal(expected);
  });

  it('should return false for invalid shifts', () => {
    const message = 'hello';
    const shift = 0;

    const result = caesar(message, shift);

    expect(result).to.be.false;
  });

  it('should handle shifts greater than 25 when encoding', () => {
    const message = 'hello';
    const shift = 30;
    const expected = 'lipps';

    const actual = caesar(message, shift);

    expect(actual).to.equal(expected);
  });

  it('should handle shifts greater than 25 when decoding', () => {
    const message = 'lipps';
    const shift = 30;
    const expected = 'hello';

    const actual = caesar(message, shift, false);

    expect(actual).to.equal(expected);
  });

  it('should return the same message if encoding and decoding with valid shifts', () => {
    const message = 'hello world';
    const shift = 8;
    
    const encoded = caesar(message, shift);
    const decoded = caesar(encoded, shift, false);

    expect(decoded).to.equal(message);
  });
});
  });
  