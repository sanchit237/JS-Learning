class User {
	constructor(firstname, middlename, lastname){
		this.firstname = firstname
		this.middlename = middlename
		this.lastname = lastname
	}

	//Normal function
	// getFullname(){
	// 	const fullname = `My full name is ${this.firstname} ${this.middlename} ${this.lastname}`
	// 	return fullname
	// }

	//arrow function way
	getFullname = () =>  `My full name is ${this.firstname} ${this.middlename} ${this.lastname}`;

	edituser(fullname){
		const name = fullname.split(' ')
		this.firstname = name[0]
		this.middlename = name[1]
		this.lastname = name[2]
	}
}


class student extends User {
	constructor(firstname, middlename, lastname, subject){
		super(firstname, middlename, lastname)
		this.subject = subject
	}

	getFullname = () =>  `My full name is ${this.firstname} ${this.middlename} ${this.lastname} and my subject is ${this.subject}`;

}


// const result = new User('hey','there','everyone');
const result = new student('hey','there','everyone','javascript');

console.log(result.getFullname())

result.edituser('hey hi there')
console.log(result.getFullname())


