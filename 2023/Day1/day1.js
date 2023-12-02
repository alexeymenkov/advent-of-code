const fileParser = require('../input');
const path = require('path');

function calculateCalibrationValue(list) {
    return list.map((row) => {
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

function day1Part1() {
    const lines = fileParser(path.join(__dirname, 'input1.txt'));

    return calculateCalibrationValue(lines);
}

module.exports = {
    calculateCalibrationValue: calculateCalibrationValue,
    day1Part1: day1Part1,
};
