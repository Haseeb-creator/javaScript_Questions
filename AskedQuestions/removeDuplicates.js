// method 1  using filter

const filterArray = ['apple', 'orange', 'banana', 'apple', 'banana']

const uniqueValue = filterArray.filter((value, index, self) => {
	return self.indexOf(value) === index
})

console.log(uniqueValue);


// method 2 using Set data structure

const setArray = ['apple', 'orange', 'banana', 'apple', 'banana']


let setValue = [...new Set(setArray)]

console.log(setValue);

// method 3 using reduce method

const reduceArray = ['apple', 'orange', 'banana', 'apple', 'banana']


const reduceValue = reduceArray.reduce((acc, curr) => {
	if (!acc.includes(curr)) {
		acc.push(curr)
	}
	return acc
}, [])

console.log(reduceValue);

