const { expect } = require('chai');
const { isOddOrEven } = require('./02.IsOddOrEven');

describe('Function', () => {
    it('returns undefined with non-string input', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('returns even correctly', () => {
        expect(isOddOrEven('string')).to.equal('even');
    });

    it('returns odd correctly', () => {
        expect(isOddOrEven('string2')).to.equal('odd');
    });

    it('returns output correctly with multiple input', () => {
        expect(isOddOrEven('string')).to.equal('even');
        expect(isOddOrEven('string2')).to.equal('odd');
    });
});