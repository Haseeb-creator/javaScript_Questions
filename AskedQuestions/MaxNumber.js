// method 1 using a math method
const num = [5, 9, 3, 1, 7, 2]
let maxNum = Math.max(...num)
console.log(maxNum);


// method 2 using for loop 
const longest = [5, 9, 3, 1, 7, 2]
let maxNumber = longest[0]

for (let i = 0; i < longest.length; i++) {
	if (longest[i] > maxNumber) {
		maxNumber = longest[i]
	}
}
console.log(maxNumber);