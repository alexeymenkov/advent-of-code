const day1 = require('./day1.js');

test('calculates calibration value with digits', () => {
    const input = [
        '1abc2',
        'pqr3stu8vwx',
        'a1b2c3d4e5f',
        'treb7uchet',
    ];

    expect(day1.calculateCalibrationValue(input)).toBe(142);
})

test('calculates calibration value with digits as string', () => {
    const input = [
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
        'mkvgjdjhvsevenone8eightoneightdhq',
        '2911threeninesdvxvheightwobm'
    ];

    expect(day1.calculateCalibrationValueWithDigitsAsString(input)).toBe(381);
});

describe('Digit replace', () => {
    const dataset = [
        ['eightwothree', '8wothree'],
        ['mkvgjdjhvsevenone8eightoneightdhq', 'mkvgjdjhv7one8eightoneightdhq']
    ]
    it.each(dataset)('replaces text digits from the start', (input, expected) => {
        expect(day1.digitReplacer(input)).toBe(expected);
    });

    const reversedDataset = [
        ['eightwothree', 'eightwo3'],
        ['mkvgjdjhvsevenone8eightoneightdhq', 'mkvgjdjhvsevenone8eighton8dhq']
    ]

    it.each(reversedDataset)('replaces text digits from the end', (input, expected) => {
        expect(day1.digitReplacer(input, true)).toBe(expected);
    });
});
