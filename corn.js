function fizzBuzz(n) {
	if (n % 3 === 0) {
		return (console.log('fizz'));
	} else if (n % 5 === 0) {
		return 'buzz'
	} else if (n % 3 === 0 && n % 5 === 0) {
		return 'fizzBuzz'
	} else {
		return n
	}

}

function main() {
	const n = parseInt(readLine().trim(), 10);

	fizzBuzz(n);
}