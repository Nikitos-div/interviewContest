var fs = require('fs');

var fileWithNumbers = fs.readFileSync('input.txt', 'utf-8');

var arr = fileWithNumbers.split(' ');

var S = arr[0]
var J = arr[1]
let counter = 0
for (let i = 0; i < J.length; ++i) {
    for (let j = 0; j < S.length; ++j) {
        if (J[i] === S[j]) {
            counter += 1
        }
    }

    fs.writeFileSync('output.txt', counter.toString());
}
