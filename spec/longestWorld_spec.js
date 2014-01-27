/*
Using the Ruby language, have the function LongestWord(sen) take the sen
parameter being passed and return the largest word in the string. If
there are two or more words that are the same length, return the first
word from the string with that length. Ignore punctuation and assume
sen will not be empty
*/
describe('longestWord', function() {
    'use strict';
    it("finds longest word Input = 'fun&!! time' Output = 'time' ", function() {
        var input = 'fun&!! time',
            output = 'time';
        expect(longestWord(input)).toEqual(output);
    });
});
