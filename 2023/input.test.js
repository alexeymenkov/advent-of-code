const sut = require('./input');
const path = require('path');

test('parses text file', () => {
    const filepath = path.join(__dirname, 'input.txt');
    expect(sut(filepath)).toEqual(['a', 'abc', 'ab cd', 'a']);
});
