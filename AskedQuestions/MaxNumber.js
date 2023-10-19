// method 1 using a math method
/* const num = [5, 9, 3, 1, 7, 2]
let maxNum = Math.max(...num)
console.log(maxNum); */


// method 2 using for loop
/* const longest = [5, 9, 3, 1, 7, 2]
let maxNumber = longest[0]

for (let i = 0; i < longest.length; i++) {
	if (longest[i] > maxNumber) {
		maxNumber = longest[i]
	}
}
console.log(maxNumber); */

// function findConsecutiveGaps(arr) {
// 
// 	const array = []
// 
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		const current = arr[i];
// 		const next = arr[i + 1];
// 
// 		const diff = next - current;
// 
// 		if (diff === 2 || diff === 1) {
// 			array.push(`${current} + ${diff}`)
// 		}
// 
// 
// 	}
// 	return console.table(array)
// 
// }
// 
// findConsecutiveGaps([9, 10, 14, 16, 17]);


/* function findPairsWithDifference(arr) {
	const result = [];

	for (let i = 0; i < arr.length - 1; i++) {
		const current = arr[i];
		const next = arr[i + 1];
		const difference = next - current;

		if (difference === 2 || difference === 1) {
			result.push(`${current}+${difference}`);
		}
	}

	return result;
}

const inputArray = [9, 10, 14, 16, 17];
const outputArray = findPairsWithDifference(inputArray);
console.log(outputArray); */


/* function findNearestNumber(arr, target) {
	let nearestNumber = null;
	let minDifference = Infinity;

	console.log(minDifference);

	for (const number of arr) {
		const difference = Math.abs(number - target);

		console.log(difference);

		if (difference < minDifference) {
			nearestNumber = number;
			minDifference = difference;
		}
	}

	return nearestNumber;
}

const inputArray = [5, 12, 15, 18, 8];
const targetNumber = 10;

const nearestNumber = findNearestNumber(inputArray, targetNumber);

console.log(`The nearest number to ${targetNumber} is ${nearestNumber}`); */





let data = [
	{
		id: 1,
		cgpa: 8.9,
		rank: '8'
	},
	{
		id: 3,
		cgpa: 6.9,
		rank: '8'
	},
	{
		id: 5,
		cgpa: 8.9,
		rank: '10'
	},
	{
		id: 7,
		cgpa: 8.9,
		rank: '14'
	},
	{
		id: 9,
		cgpa: 5.9,
		rank: '8'
	},

]


let result = data.filter((item) => (
	item.cgpa > 8 && item.rank < 10
))

console.log('result :', result.forEach((i) => i));

console.log(...result);


let fruit = [
	{ name: 'apple' },
	{ name: 'mango' },
	{ name: 'pinaple' }
]

fruit.push({ name: 'pomagranate' })

let value = {}

console.log(fruit);



let foo = ['apple', 'ball', 'cat']

foo.length([0]);

