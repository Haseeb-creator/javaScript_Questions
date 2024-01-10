/* var v = 1;
var f1 = function () {
	console.log(v);
};
var f2 = function () {
	var v = 2;
	f1();
};



console.log('====================================');
console.log(f2());
console.log('===================================='); */

const e = require("express");



/* --------------factorial using recursive ------------ */
/* 
function factorial(number) {

	if (number === 0) {
		return 1
	}

	return number * factorial(number - 1)

}


console.log(factorial(5)); */



/* ------------reverse a string ------------- */


/* function reverseString(string) {

	let reversedArray = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reversedArray.push(string[i]);

	}
	return reversedArray.join('');
}

console.log(reverseString('hello world')); */



/* ---------------------  */


/* function maxNumber(n) {
	let largestNumber = n[0]
	for (let i = 1; i < n.length; i++) {
		if (n[i] < largestNumber) {
			largestNumber = n[i]
		}
	}
	return largestNumber
}
console.log(maxNumber([1, 55, 3, 34])) */

/* let number = [2, 34, 5, 6, 78]
let max = Math.min(...number)

console.log(max); */

/* function findLargestElement(arr) {
	let largest = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}
	return largest;
}

// Usage
console.log(findLargestElement([4, 10, 2, 8, 15])); */

/* function reverse(str) {
	let clean = str.toLowerCase()
	let rev = str.split('').reverse().join('')
	return clean === rev

}

console.log(reverse('mam')); */


/*let numbers = [4, 10, 2, 8, 8, 15]

let number = new Set(numbers)

console.log(number);

	console.log(numbers.filter((number, index, arr) =>
(arr.indexOf(number) === index
)
)) */

/* function isPrime(number) {
	if (number <= 1) return false; // Numbers less than or equal to 1 are not prime.
	if (number <= 3) return true; // 2 and 3 are prime.

	if (number % 2 === 0 || number % 3 === 0) return false; // Divisible by 2 or 3?

	for (let i = 5; i * i <= number; i += 6) {
		if (number % i === 0 || number % (i + 2) === 0) return false; // Check other divisors.
	}
	return true; // If no divisors are found, it's a prime number.
}
console.log(isPrime()) */


/* function union(arr1, arr2) {
	let newArray = [...arr1, ...arr2]
	return newArray.filter((value, index, array) => (array.indexOf(value) === index))
}
console.log(union([1, 3, 4, 5, 6], [3, 5, 7, 6, 8])); */


/* 
function reverseNumber(number) {
	let reversedNum = parseInt(String(number).split("").reverse().join(""));
	return reversedNum
}


console.log(reverseNumber('12345')); */


/* function reverseNumber(Number) {

	return parseInt(String(Number).split('').reverse().join(''))

}
console.log(reverseNumber(12345789)); */


/* function toCelsius(fahrenheit) {
	return 'Celsius ' + ((5 / 9) * (fahrenheit - 32)) + ' *'
}

console.log(toCelsius(104)) */



/* let arr = [7, 5, 9, 1];
let maxNumber = Math.min.apply(null, arr)

console.log(maxNumber); */

/* let date = new Date()

console.log(date.getDay()); */


/* let textCount = 'saldhkgasdiw erhflkfcvn '

console.log(textCount.length); */



/* let myNumber = 2;

let text = '';


while (myNumber != Infinity) {

	myNumber = myNumber * myNumber

	text += myNumber + ','

}

console.table('values' + text);

let myNumbere = 2;
let text1 = '';

const values = [];

while (myNumbere !== Infinity) {
	myNumbere = myNumbere * myNumbere;
	values.push(myNumbere);
}
console.table(values); */


/* var addTwoNumbers = function (l1, l2) {

	let array = []

	let carry = 0

	let maxLength = Math.max(l1.length, l2.length)

	let paddedL1 = l1.concat(Array(maxLength - l1.length).fill(0))
	let paddedL2 = l2.concat(Array(maxLength - l2.length).fill(0))


	for (i = 0; i < maxLength; i++) {
		let result = paddedL1[i] + paddedL2[i] + carry

		console.log(result);

		if (result >= 10) {
			array.push((result % 10));
			carry = Math.floor(result / 10)

		} else {
			array.push((result % 10));
			carry = 0
		}
	}
	while (carry > 0) {
		array.push(carry % 10);
		carry = Math.floor(carry / 10);
	}
};

addTwoNumbers([7, 4, 3], [7, 5, 9, 9, 9]); */




/* const a = { name: 'haseeb' }

console.log(a)


const b = a

b.name = 'puja'

console.log(b); */
/*
let a;
console.log(a);

a = 10
console.log(a); */


/* let friends = [

	{
		name: 'anna',
		books: ['bible', 'Harry Potter'],
		age: 21
	},
	{
		name: 'Bob',
		books: ['War and Peace', 'Romeo Juliet'],
		age: 26
	},
	{
		name: 'Alice',
		books: ['The Lord of the Rings', 'The Shining'],
		age: 18
	},

];


let result = friends.reduce((prev, curr) => {
	return [...prev, ...curr.books]
}, [])

console.log(result); */


/* friends.map((friend) => {
	return console.log(...friend.books);
}) */



let numbers = [1, 2, 3, 4, 5, 6, 12, 7, 80]





function maxNumbers(numbers) {

	return numbers.reduce((max, current) => {
		if (current > max) {
			return current;
		} else {
			return max;
		};
	})

};


let maxNum = maxNumbers(numbers)


console.log(maxNum);


