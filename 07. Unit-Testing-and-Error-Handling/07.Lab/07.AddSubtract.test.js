const { expect } = require('chai');
const { createCalculator } = require('./07.AddSubtract');

describe('Function', () => {
    let instance = null;
    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('adds single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('adds multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('subtract single number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('subtract multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it('adds single number as string', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    });

    it('adds multiple numbers as string', () => {
        instance.add('1');
        instance.add('2');
        expect(instance.get()).to.equal(3);
    });

    it('subtract single number as string', () => {
        instance.subtract('1');
        expect(instance.get()).to.equal(-1);
    });

    it('subtract multiple numbers as string', () => {
        instance.subtract('1');
        instance.subtract('2');
        expect(instance.get()).to.equal(-3);
    });
})