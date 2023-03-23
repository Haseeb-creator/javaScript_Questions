/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */


/* method 1:  */

let nums = [2, 3, 4, 8, 9, 7]
let target = 9


/* 
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return console.log([i, j]);
			}
		}
	}
}; 

twoSum(nums, target)*/



/* summary of the above question :-
1: timeComplexity = 0(n^2)
2: SpaceComplexity = 0(1) ----> constant
*/


/* method : 2  */

var twoSum = function (nums, target) {
	let map = {}
	for (let i = 0; i < nums.length; i++) {
		let value = nums[i]
		let complementPair = target - value
		if (map[complementPair] !== undefined) {
			return console.log([map[complementPair], i])
		} else {
			console.log(map[value] = i);
		}

	}
};

twoSum(nums, target)