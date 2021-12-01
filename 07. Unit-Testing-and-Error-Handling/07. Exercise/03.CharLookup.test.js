const { expect } = require('chai');
const { lookupChar } = require('./03.CharLookup');

describe('CharLookup', () => {
    it('returns undefined with wrong type of string', () => {
        expect(lookupChar(5, 2)).to.be.undefined;
    })
    it('returns undefined with wrong type of index', () => {
        expect(lookupChar('string', 'index')).to.be.undefined;
    })
    it('returns proper output with index out of range below', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    })
    it('returns proper output with index out of range over', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    })
    it('returns undefined with index floating-point number', () => {
        expect(lookupChar('string', 1.5)).to.be.undefined;
    })
    it('returns proper output with index out of range over', () => {
        expect(lookupChar('string', 10)).to.equal('Incorrect index');
    })
    it('returns proper output with proper input', () => {
        expect(lookupChar('string', 0)).to.equal('s');
    })
    it('returns proper output with proper input', () => {
        expect(lookupChar('string', 5)).to.equal('g');
    })
    it('returns proper output with proper input', () => {
        expect(lookupChar('string', 3)).to.equal('i');
    })
})