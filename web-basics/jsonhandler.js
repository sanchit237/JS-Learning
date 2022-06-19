const student = {
	name: 'test',
	age: 26,
	city: 'mumbai'
}

console.log(student)

//object to string
const stringConverison = JSON.stringify(student)
console.log(stringConverison)
console.log(typeof stringConverison);

//String to object 
const objectConversion = JSON.parse(stringConverison)
console.log(objectConversion)
console.log(typeof objectConversion)