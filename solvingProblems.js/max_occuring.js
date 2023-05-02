
function maxOccuring(str) {

	let objKey = {}
	let maxKey = ''

	for (let i = 0; i < str.length; i++) {
		let key = str[i]

		if (!objKey[key]) {
			objKey[key] = 0
		}
		objKey[key]++
		if (maxKey == '' || objKey[key] > objKey[maxKey]) {
			maxKey = key
		}

	}

	return maxKey

}

console.log(maxOccuring('hello world'));
