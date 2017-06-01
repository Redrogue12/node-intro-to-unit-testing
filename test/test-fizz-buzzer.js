const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit tests for our 'adder' function
describe('fizzBuzzer', function() {

    //test the normal case
    it('should turn 3 to fizz, 5 to buzz, 15 to fizzBuzz', function() {
        //range of normal inputs
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 5, expected: 'buzz'},
            {a: 3, expected: 'fizz'},
            {a: 2, expected: 2}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            answer.should.equal(input.expected);
        });
    });

    it('should raise error if args not numbers', function() {
        //range of bad inputs where there are no numbers
        const badInputs = [
            ['string']
        ];
        //prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
        (function() {
            fizzBuzzer(input[0])
        }).should.throw(Error);
    });
});
});
