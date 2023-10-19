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

