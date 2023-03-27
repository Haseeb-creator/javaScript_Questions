/* 
* map vs forEach with example ? */

/* map() and forEach() are both array methods in JavaScript that allow you to iterate over an array and perform an action on each item. However, there are some key differences between the two.

map() creates a new array containing the results of calling a provided function on every element in the original array. The original array is not modified. Here's an example of map(): */

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (num) {
	return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


/* In the example above, we have an array called numbers containing five numbers. We then call the map() method on numbers and pass it a function that takes a number as an argument and returns that number squared. The map() method applies this function to every number in the array and returns a new array containing the squared values. The original numbers array is not modified.

forEach() executes a provided function once for each array element. It does not return a new array, but instead performs an action on each item in the original array. 
Here's an example of forEach(): */

const number = [1, 2, 3, 4, 5];

number.forEach(function (num) {
	console.log(num * num);
});

// Output:
// 1
// 4
// 9
// 16
// 25

/* In the example above, we have the same array called numbers containing five numbers. We then call the forEach() method on numbers and pass it a function that takes a number as an argument and logs that number squared to the console. The forEach() method executes this function once for each number in the array, logging each squared number to the console.

In summary, map() creates a new array containing the results of calling a provided function on every element in the original array, while forEach() executes a provided function once for each array element without creating a new array. */
