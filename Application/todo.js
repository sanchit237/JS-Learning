var ul = document.getElementById('list')
var li;
var add_btn = document.getElementById('add')
var remove_btn = document.getElementById('remove')

//Adding listener
add_btn.addEventListener('click', addItem)

//Removing listener
remove_btn.addEventListener('click', removeItem)


function addItem(){
	var user_input = document.getElementById('input')
	var user_value = user_input.value
	var textnode = document.createTextNode(user_value)

	if (user_value === ''){
		return false
	}
	else {

		// create li
		var li = document.createElement('li')
		li.setAttribute('class','mycheck')

		//create checkbox
		var checkbox = document.createElement('input')
		checkbox.type = 'checkbox'
		checkbox.setAttribute('id','check')
		
		//create Label
		var label = document.createElement('label')

		//Addition to the list
	
		li.appendChild(checkbox)
		li.appendChild(label)
		label.appendChild(textnode)
		ul.insertBefore(li, ul.children[0])

		user_input.value = ''
	}

	// console.log(user_value)
}

function removeItem(){
	li = ul.children

	console.log(li)

	//using for loop
	for (let index = 0; index < li.length; index++) {
		while (li[index] && li[index].children[0].checked) {
			ul.removeChild(li[index])
		}
	}

	//Using for in loop
	// for (const data in li) {
	// 	while (li[data] && li[data].children[0].checked) {
	// 		ul.removeChild(li[data])
	// 	}
	// }
}
