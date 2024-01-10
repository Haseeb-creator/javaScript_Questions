const fruits = [
	{ apple: 7, pomegranate: 10, orange: 5 },
	{ banana: 12, grapes: 3, kiwi: 8, dragon: 2 },
	{ orange: 8, apple: 3 }
]

let result = {}

fruits.forEach((object) => {
	for (const key in object) {
		console.log(key);
		if (result.hasOwnProperty(key)) {
			result[key] += object[key]
		} else {
			result[key] = object[key]
		}

	}
})

console.log(result);