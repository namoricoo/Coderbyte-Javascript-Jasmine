// Using the Ruby language, have the function SimpleAdding(num) add up
// all the numbers from 1 to num. For the test cases, the parameter
// num will be any number from 1 to 1000.
describe('simpleAdding', function() {
    'use strict';
     it('check to see if input is a number input = 1 output = true', function() {
        var input = 1,
            output = true;
        expect(isDigit(input)).toEqual(output);
    });
    it('check to see if input is a number input = a output = false', function() {
        var input = 'a',
            output = false;
        expect(isDigit(input)).toEqual(output);
    });
    it('adds all of the number before upper limmit Input = 12 Output = 78', function() {
        var input = 12,
            output = 78;
        expect(simpleAdding(input)).toEqual(output);
    });
    it('adds all of the number before upper limmit Input = 140 Output = 9870', function() {
        var input = 140,
            output = 9870;
        expect(simpleAdding(input)).toEqual(output);
    });
});