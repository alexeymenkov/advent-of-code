const fileParser = require('../input');
const path = require('path');

function calculateCalibrationValue(list) {
    return list
        .map((row) => {
        let first, last;
        for (let i = 0; i < row.length; i++) {
            const number = parseInt(row[i]);
            if (number) {
                first = number * 10;
                break;
            }
        }

        for (let i = row.length - 1; i >= 0; i--) {
            const number = parseInt(row[i]);
            if (number) {
                last = number;
                break;
            }
        }

        return first + last;
    }).reduce((p, c) => {
        return p+c;
    });
}

function calculateCalibrationValueWithDigitsAsString(list) {
    list = list.map((row) => {
        return digitReplacer(row);
    }).map((row) => {
        return digitReplacer(row, true);
    });

    return calculateCalibrationValue(list);
}

function digitReplacer(row, reversed = false) {
    const list = [
        ['one', 3, '1'],
        ['two', 3, '2'],
        ['three', 5, '3'],
        ['four', 4, '4'],
        ['five', 4, '5'],
        ['six', 3, '6'],
        ['seven', 5, '7'],
        ['eight', 5, '8'],
        ['nine', 4, '9']
    ];

    if (reversed) {
        row = reverseString(row);
    }

    let newString = '';
    for (let i = 0; i < row.length; i++) {
        let stop = false;
        if (parseInt(row[i])) {
            newString += row.slice(i);
            break;
        }

        let nextChar = row[i];
        for (let j = 0; j < list.length; j++) {
            let token = reversed ? reverseString(list[j][0]) : list[j][0];
            if (row.slice(i, i+list[j][1]) === token) {
                nextChar = list[j][2];
                i += list[j][1] - 1;
                stop = true;
                break;
            }
        }

        newString = newString + '' + nextChar;
        if (stop) {
            newString += row.slice(i+1);
            break;
        }
    }

    return reversed ? reverseString(newString): newString;
}

function reverseString(str) {
    const list = str.split('');

    return list.reverse().join('');
}

function day1Part1() {
    const lines = fileParser(path.join(__dirname, 'input.txt'));

    return calculateCalibrationValue(lines);
}

function day1part2() {
    const lines = fileParser(path.join(__dirname, 'input.txt'));

    return calculateCalibrationValueWithDigitsAsString(lines);
}

module.exports = {
    calculateCalibrationValue: calculateCalibrationValue,
    calculateCalibrationValueWithDigitsAsString: calculateCalibrationValueWithDigitsAsString,
    digitReplacer: digitReplacer,
    day1Part1: day1Part1,
    day1part2: day1part2,
};
