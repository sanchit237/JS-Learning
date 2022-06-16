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