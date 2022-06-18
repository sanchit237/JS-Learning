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
	console.log('remove button clicked');
}