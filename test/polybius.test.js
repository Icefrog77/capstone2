const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("My function", () => {
    it("checks if string works", () => {
      const message ="String"
      const expected = "344424423322";
  
      const actual = polybius(message);
  
      expect(actual).to.deep.equal(expected);
    });
    describe('Polybius Cipher Additional Tests', () => {
      it('should handle uppercase characters when encoding', () => {
        const message = 'HELLO';
        const expected = '3251131343';
    
        const actual = polybius(message);
    
        expect(actual).to.equal(expected);
      });
    
      it('should handle uppercase characters when decoding', () => {
        const message = '3251131343';
        const expected = 'hello';
    
        const actual = polybius(message, false);
    
        expect(actual).to.equal(expected);
      });
    
      it('should handle the letter "I/J" when encoding', () => {
        const message = 'IJ';
        const expected = '2424';
    
        const actual = polybius(message);
    
        expect(actual).to.equal(expected);
      });
    
      it('should handle the letter "I/J" when decoding', () => {
        const message = '2424';
        const expected = 'ij';
    
        const actual = polybius(message, false);
    
        expect(actual).to.equal(expected);
      });
    
      it('should return false for invalid characters in the input', () => {
        const message = 'hello!';
        
        const result = polybius(message);
    
        expect(result).to.be.false;
      });
    
      it('should return false for an odd number of characters when decoding', () => {
        const message = '32511';
        
        const result = polybius(message, false);
    
        expect(result).to.be.false;
      });
    
      it('should return false for invalid code pairs', () => {
        const message = '25613243';
        
        const result = polybius(message, false);
    
        expect(result).to.be.false;
      });
    
      it('should return the same message if encoding and decoding with valid characters', () => {
        const message = 'hello world';
        
        const encoded = polybius(message);
        const decoded = polybius(encoded, false);
    
        expect(decoded).to.equal(message);
      });
    });
  });