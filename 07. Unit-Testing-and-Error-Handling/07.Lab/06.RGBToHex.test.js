const { expect } = require('chai');
const rgbToHex = require('./06.RGBToHex');

describe('Function have to work with proper input', () => {
    it('should convert black properly', () => {
        expect(rgbToHex(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('should convert white properly', () => {
        expect(rgbToHex(0, 0, 0)).to.equal('#000000');
    });
    it('should convert softuni blue properly', () => {
        expect(rgbToHex(35, 68, 101)).to.equal('#234465');
    });
});

describe('Function have to return undefined with wrong input', () => {
    it('should return undefined', () => {
        expect(rgbToHex(-1, 0, 0)).to.be.undefined;
    });
    it('should return undefined', () => {
        expect(rgbToHex(0, -1, 0)).to.be.undefined;
    });
    it('should return undefined', () => {
        expect(rgbToHex(0, 0, -1)).to.be.undefined;
    });

    it('should return undefined', () => {
        expect(rgbToHex(256, 0, 0)).to.be.undefined;
    });
    it('should return undefined', () => {
        expect(rgbToHex(0, 256, 0)).to.be.undefined;
    });
    it('should return undefined', () => {
        expect(rgbToHex(0, 0, 256)).to.be.undefined;
    });

    it('should return undefined', () => {
        expect(rgbToHex('0', 0, 0)).to.be.undefined;
    });
    it('should return undefined', () => {
        expect(rgbToHex(0, '0', 0)).to.be.undefined;
    });
    it('should return undefined', () => {
        expect(rgbToHex(0, 0, '0')).to.be.undefined;
    });
});