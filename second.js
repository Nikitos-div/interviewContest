const fs = require('fs')
let file = fs.readFileSync('input.txt', 'utf-8')
let arr = file.split(',')

let current = 0
let best = 0

for (let i = 0; i < arr.length; ++i) {
	if (arr[i] === '1') {
		current += 1
	}
	else if (current > best) {
		best = current
		current = 0
	}
	fs.writeFileSync('output.txt', best.toString());
}