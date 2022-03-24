const library = require('./library');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Tests', () => {
    describe('calcPriceOfBook', () => {
        it('should throw error with invalid book name', () => {
            expect(() => library.calcPriceOfBook(5, 5)).to.throw();
        });

        it('should throw error with invalid book year', () => {
            expect(() => library.calcPriceOfBook("name", "c")).to.throw();
        });

        it('should calculate price properly', () => {
            expect(library.calcPriceOfBook("name", 1980)).to.equal('Price of name is 10.00');
            expect(library.calcPriceOfBook("name", 1981)).to.equal('Price of name is 20.00');
        });
    });

    describe('findBook', () => {
        it('should throw error with array length zero', () => {
            expect(() => library.findBook([], 'book')).to.throw();
        });

        it('should work properly with proper input', () => {
            expect(library.findBook(['Troy', 'Life Style'], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(['Troy', 'Life Style'], 'Tr')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('should throw error with invalid input', () => {
            expect(() => library.arrangeTheBooks('a')).to.throw();
            expect(() => library.arrangeTheBooks(-5)).to.throw();
        });

        it('should work properly with proper input', () => {
            expect(library.arrangeTheBooks(35)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
})