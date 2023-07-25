const { expect } = require('chai');
const { toCelsius, toFahrenheit } = require('../aufgabe2');

describe('Test für aufgabe2', () => {
    it('Teste »toCelsius«', () => {
        expect(toCelsius(32)).to.equal(0);
        expect(toCelsius(100.0)).to.equal(37.77777777777778);
        expect(toCelsius("0")).to.equal(-17.77777777777778);
        expect(toCelsius(-99.75)).to.equal(-73.19444444444444);
        expect(toCelsius("-32.0")).to.equal(-35.55555555555556);
    }),

    it('Teste »toFahrenheit«', () => {
        expect(toFahrenheit(0)).to.equal(32);
        expect(toFahrenheit(37.77777777777778)).to.equal(100);
        expect(toFahrenheit(100)).to.equal(212);
        expect(toFahrenheit("-32")).to.equal(-25.6);
    })
});