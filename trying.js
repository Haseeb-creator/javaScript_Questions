function sum(...values) {
	if (values.length === 0) {
		return 0
	}

	let [value, ...rest] = values

	return value + sum(...rest)

}
let nextSum = sum.bind(null, 2)

console.log(nextSum(3));



function add(...nums) {
	return nums.reduce((acc, inn) => acc + inn)
}

console.log('adding values' + add(23, 34));





let str = 'hello this is my world'

function reverseString(String) {
	return String.split(' ').map((value) => value.split('').reverse().join('')).join(' ')
}


console.log(reverseString(str));