// Using the Ruby language, have the function LetterCapitalize(str)
// take the str parameter being passed and capitalize the first
// letter of each word. Words will be separated by only one space.
describe('letterCapitalize', function() {
    'use strict';
    it(" Input = 'hello world' Output = 'Hello World' ", function() {
        var input = 'hello world',
            output = 'Hello World';
        expect(letterCapitalize(input)).toEqual(output);
    });
    it(" Input = 'i ran there' Output = 'I Ran There' ", function() {
        var input = 'i ran there',
            output = 'I Ran There';
        expect(letterCapitalize(input)).toEqual(output);
    });
});