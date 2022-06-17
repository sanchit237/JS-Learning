function validate(e){
	let input_value = document.getElementById('input-check').value;
	let manipulate = document.querySelector('.test');
	
	if (isNaN(input_value) || input_value < 1 || input_value > 20){
		console.log('invalid input');
		manipulate.textContent = 'invalid input';
	}
	else {
		console.log('Valid input');
	}
}

//Form 1
document.querySelector('.practice').addEventListener('submit', function(event){
	event.preventDefault()
	console.log(event.target.username.value)
	console.log(event.target.realname.value)
	event.target.username.value = ''
	event.target.realname.value = ''
})


//Form 2 and task
document.querySelector('.userdata').addEventListener('submit', function(event){
	event.preventDefault()
	console.log(event.target.username.value)
	console.log(event.target.realname.value)
	console.log(event.target.email.value)
	console.log(event.target.password.value)
	console.log(event.target.ver_password.value)


	let password = event.target.password.value
	let ver_password = event.target.ver_password.value

	if (password !== ver_password){
		let result = document.createElement('p')
		result.textContent = 'Passwords are not matching'
		document.querySelector('body').appendChild(result)
	}
	
	event.target.username.value = ''
	event.target.realname.value = ''
	event.target.email.value = ''
	event.target.password.value = ''
	event.target.ver_password.value = ''
})