const fs = require('fs');
const os = require('os');

function parseFile(filepath) {
    const content = fs.readFileSync(filepath).toString().trimEnd();

    return content.split(os.EOL);
}

module.exports = parseFile;
