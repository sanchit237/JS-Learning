var john = {
	name: 'john',
	age: 20
}
var mary = {
	name: 'mary',
	age: 30
}

var sam = {
	name: 'sam',
	age: 40
}

let users = new Map()

users.set('john',john)
users.set('sam',sam)
users.set('mary',mary)

// console.log(users)

// console.log(users.get('sam'))

for (const x of users.entries()) {
	console.log(x)
}

