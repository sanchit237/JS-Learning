const convertRs = (dollars) => {
	if (typeof dollars === 'number'){
		return dollars * 64
	}
	else {
		throw Error('Please enter the correct data type')
	}
}


// const result = convertRs('five')
// console.log(result)

try {
	const result = convertRs('five')
	console.log(result)
} catch (error) {
	console.log(error)
}

console.log('freeze testing')