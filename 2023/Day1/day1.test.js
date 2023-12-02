const day1 = require('./day1.js');
const sut = day1.calculateCalibrationValue;

test('calculates calibration value', () => {
    const input = [
        '1abc2',
        'pqr3stu8vwx',
        'a1b2c3d4e5f',
        'treb7uchet',
    ];

    expect(sut(input)).toBe(142);
})
