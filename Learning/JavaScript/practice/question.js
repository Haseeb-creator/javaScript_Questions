


const data = {
	user: {
		isLoggedIn: true,
		name: 'John Doe',
		avatar: "puppy",
		favorites: ['python', 'javascript', 'java']
	},
	topResults: {
		amount: 30,
		score: [10, 20, 30, 40]
	}
}

//  add information
/* const modify5 = {
	...data,
	loginInformation: {
		username: 'johnnydoe',
		password: 'mypass'
	}
console.log(modify5); */

//  deleting the object element
/* 
const fav = [...data.user.favorites];
const indx = fav.indexOf('java')

fav.splice(indx, 1)

console.log(fav);

console.log(indx);


const modify4 = {
	...data,
	user: {
		...data.user,
		favorites: fav
	},
	topResults: {
		...data.topResults,
		score: []
	}
}

console.log(modify4); */



/* const modify3 = {
	...data,
	topResults: {
		...data.topResults,
		amount: 'hello',
		score: [...data.topResults.score, 70]

	}
}

console.log(modify3); */

/* 

// modifying the data in object :

const modify1 = {
	...data,
	['user']: {
		...data['user'], isLoggedIn: false, name: 'haseeb'
	}
}

console.log(modify1);


const modify2 = {
	...data,
	['user']: {
		...data['user'], name: 'amer',
	},
	['topResults']: {
		...data['topResults'], amount: 50
	}
}


console.log(modify2); */