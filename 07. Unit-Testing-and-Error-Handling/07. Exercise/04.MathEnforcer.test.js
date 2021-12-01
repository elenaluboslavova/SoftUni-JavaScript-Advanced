const { expect } = require('chai');
const { mathEnforcer } = require('./04.MathEnforcer');

describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined with non-number parameter', () => {
            expect(mathEnforcer.addFive('3')).to.be.undefined;
        })
        it('should return proper output with positive number parameter', () => {
            expect(mathEnforcer.addFive(3)).to.equal(8);
        })
        it('should return proper output with negative number parameter', () => {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        })
        it('should return proper output with floating-point number parameter', () => {
            expect(mathEnforcer.addFive(3.5)).to.be.closeTo(8.5, 0.01);
        })
    });

    describe('subtractTen', () => {
        it('should return undefined with non-number parameter', () => {
            expect(mathEnforcer.subtractTen('3')).to.be.undefined;
        })
        it('should return proper output with positive number parameter', () => {
            expect(mathEnforcer.subtractTen(3)).to.equal(-7);
        })
        it('should return proper output with negative number parameter', () => {
            expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
        })
        it('should return proper output with floating-point number parameter', () => {
            expect(mathEnforcer.subtractTen(3.5)).to.be.closeTo(-6.5, 0.01);
        })
    })

    describe('sum', () => {
        it('should return undefined with first parameter not a number', () => {
            expect(mathEnforcer.sum('3', 3)).to.be.undefined;
        })
        it('should return undefined with second parameter not a number', () => {
            expect(mathEnforcer.sum(3, '3')).to.be.undefined;
        })
        it('should return sum with positive proper parameters', () => {
            expect(mathEnforcer.sum(3, 3)).to.equal(6);
        })
        it('should return proper output with negative proper parameters', () => {
            expect(mathEnforcer.sum(-3, -3)).to.equal(-6);
        })
        it('should return proper output with floating-point proper parameters', () => {
            expect(mathEnforcer.sum(3.5, 3.5)).to.be.closeTo(7, 0.01);
        })
    })
})