const { expect } = require('chai');
const isSymmetric = require('./05.CheckForSymmetry');

describe('CheckForSymmetry', () => {
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })
    it('returns true for symmetric string array', () => {
        expect(isSymmetric(['1', '2', '1'])).to.be.true;
    })
    it('returns false for non-symmetric string array', () => {
        expect(isSymmetric(['1', '2', '3'])).to.be.false;
    })
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })
    it('returns false for non-array input', () => {
        expect(isSymmetric(5)).to.be.false;
    })
    it('returns false for non-array input', () => {
        expect(isSymmetric('string')).to.be.false;
    })
    it('returns false for type-different symmetric array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    })
})