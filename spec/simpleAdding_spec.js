// Using the Ruby language, have the function SimpleAdding(num) add up
// all the numbers from 1 to num. For the test cases, the parameter
// num will be any number from 1 to 1000.
describe('simpleAdding', function() {
    'use strict';
    it('adds all of the number before upper limmit Input = 12 Output = 78', function() {
        var input = 12,
            output = 78;
        expect(simpleAdding(input)).toEqual(output);
    });
});