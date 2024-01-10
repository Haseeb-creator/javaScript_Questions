let fill = [{
	name: 'haseeb',
	city: 'bidar',
	age: 20,
}]

let roll = {
	name: 'haseeb',
	age: 30
}

let merge = { ...roll }

console.log(merge);



/* let array1 = []

for (let i = 0; i < array.length; i++) {

	if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') { array1.push(array[i].toUpperCase()) }
	else
	array1.push(array[i])

}
console.log(array1.join('')); */

/* let array = 'hello body how are You'
let vowels = ['a', 'e', 'i', 'o', 'u']
let temp = ''

for (let chars of array) {
	if (vowels.includes(chars)) {
		temp += chars.toUpperCase()
	} else {
		temp += chars
	}
}

console.log(temp); */

/* let vowels = ['a', 'e', 'i', 'o', 'u'];
let str = "LEaRNeRSBuCKeT iS THe BeST WeBSiTe To LeaRN PRoGRaMMiNG";
let temp = "";
for (let chars of str) {
	console.log(chars);
	console.log(vowels.includes(chars));
	if (vowels.includes(chars)) {
		temp += chars.toUpperCase();
	} else {
		temp += chars;
	}
}

console.log(temp); */


/* reverse a string using for loop */


/* function reverseString(str) {

	let reverse = ''


	for (let i = str.length - 1; i >= 0; i--) {

		reverse += str[i];

	}
	return reverse

}


console.log(reverseString('hello haseeb')); */


/*  convert first letter of a string in a capitalize */



/* function FirstLetterCapitalize(str) {

	const capitalizeLetter = str.split(' ')
	let result = ''

	capitalizeLetter.forEach((letter, index) => {

		if (index > 0) {
			result += ' '
		}
		result += letter.charAt(0).toUpperCase() + letter.slice(1)
	})
	return result
}
console.log(FirstLetterCapitalize('hello world')); */


/*  */


// palidrome or not

/* function isPalindrome(string) {
	let reverseString = string.split('').reverse().join('')


	return reverseString == string
}

console.log(isPalindrome('heeh'));  */

const myArray = [1, 2, 3];
console.log(Array.isArray(myArray)); // Outputs true
