var ul = document.getElementById('list')
var li;
var add_btn = document.getElementById('add')
var remove_btn = document.getElementById('remove')

//Adding listener
add_btn.addEventListener('click', addItem)

//Removing listener
remove_btn.addEventListener('click', removeItem)


function addItem(){
	console.log('Add button clicked');
}

function removeItem(){
	li = ul.children

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
