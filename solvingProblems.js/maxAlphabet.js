
// find a number of alphabet repeated in string;

let string = 'ggghhhjjjtooo'
//output : 3g3h3j1t3o
function countletters(string) {
	let saparatedWord = string.split('')
	let letters = []
	let count = 1


	for (let i = 0; i < saparatedWord.length; i++) {
		if (saparatedWord[i] === saparatedWord[i + 1]) {
			count++
		} else {
			let value = `${count}${saparatedWord[i]}`
			letters = [...letters, value]
			count = 1
		}

	}

	return letters.join('')
}


console.log(countletters(string));


