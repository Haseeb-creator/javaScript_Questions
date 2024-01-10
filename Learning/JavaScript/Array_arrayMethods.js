


/* let cars = new Array("Saab", "Volvo", "BMW");

cars[0] = 'new'
console.log(cars); */



// The JavaScript method toString() converts an array to a string of (comma separated) array values.
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString()); */


/* let array = ['haseeb', "20", "true"]
let array1 = ['hello', '40']

console.log(array.join(',')); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.push([{ name: 'pomegranate', name: 'grape' }]));

console.log(fruits); */


/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.pop(2, 2));

console.log(fruits); */



/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.shift());

console.log(fruits);

console.log(fruits.indexOf("Orange")); */


/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.unshift(['pomegranate', 'grape']));

console.log(fruits); */

/* const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

console.log(myGirls.concat(myBoys)); */

/* const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren); */

/* const myArr = [[1, 2], [3, 4], [5, [6]]];

console.log(myArr.flat(2))

console.log(myArr); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.splice(fruits.length - 1, 'pomegranate', 'grape'));
console.log(fruits);
console.log(fruits.splice(0, 2)); */

/* const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(0, 4)); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 

const numberArray = [3, 6, 7, 5, 900, 500] 

console.log(numberArray.sort()); //[ 3, 5, 500, 6, 7, 900 ]
*/

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());
	*/

/* const points = [40, 100, 1, 5, 25, 10];

function ascendingOrder(a, b) {

	if (a > b) {
		return -1
	} else if (a < b) {
		return 1;
	} else {
		return 0;
	}
}

console.log(points.sort(ascendingOrder));
	*/


/* ----------------------------sorting the number or alphabet  --------------*/
/* const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function () { return 0.5 - Math.random() }));
console.log(Math.floor(Math.random() * 10));


console.log('max value of the array', Math.max(...points));


console.log('max value of the array', Math.max.apply(null, points));

function findMax(arr) {
	let len = arr.length
	let max = Infinity

	while (len--) {
		if (arr[len] < max) {
			max = arr[len]
		}
	}
	return max
}

console.log(findMax(points)); */

/* 
const cars = [
	{ type: "Volvo", year: 2016 },
	{ type: "Saab", year: 2001 },
	{ type: "BMW", year: 2010 }
];

console.log(cars.sort((a, b) => a.year - b.year));
/* // [
{ type: 'Saab', year: 2001 },
{ type: 'BMW', year: 2010 },
{ type: 'Volvo', year: 2016 }
] 

function orders(a, b) {
	let x = a.type.toLowerCase()
	let y = b.type.toLowerCase()
	if (x < y) {
		return -1
	} else if (x > y) {
		return 1
	} else {
		return 0
	}
}

console.log(cars.sort(orders));
/* [
	{ type: 'BMW', year: 2010 },
	{ type: 'Saab', year: 2001 },
	{ type: 'Volvo', year: 2016 }
] 

*/


const numbers = [45, 4, 9, 16, 25, 9];

// let text = ''
// 
// console.log(numbers.forEach((number, index, arr) => {
// 	text += `${number}\n`
// }
// ));
// 
// console.log('values' + text);
// 
// 
// for (const number of numbers) {
// 	console.log('numbers', text += number + '\n');
// }


console.log(numbers.filter((number, index, arr) =>

	arr.indexOf(number) === index ? true : false


));


/* 

Summary : 

1 : array.push()    : is used to push the array element at the last : it will return the length of an array.
2 : array.toString() : convert array to a string of comma separated array values.
3 : array.join() : join array methods to a string by comma if we pass any other value 
4: pop ()   : return the pop value it will return the last element of array.
5 : shift()  : return the first element removed from the array and "shifts" all other elements to a lower index.
6 : unshift()  : work same as push but it work at the beginning of the array.
7 : concat() method creates a new array by merging (concatenating) existing arrays:
The concat() method can take any number of array arguments:
concat also used to merge the value of an array at the end.
8: flat() : return an array with removing the inner array , if we pass a value in the flat() 2 it will remove the 2 array from the given array.

9: splice(1,2,value) : 1 parameter - where new element should be added.
2 parameters - how many elements should be removed from that position.
3rd parameter - what should be inserted into the array in place of removed one's.
it will return an modified array.

10: The slice() method creates a new array.
The slice() method does not remove any elements from the source array.

11 : sort() used for all characters to sort and it take function to iterate.


12 : 



points : 
Adding elements with high indexes can create undefined "holes" in an array:

The Difference Between Arrays and Objects?
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.

javascript length is easily used to append the element of and array.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead.

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.


Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).



*/







