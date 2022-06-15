// console.log(document.body);
// console.log(document.head);
// console.log(document.children);
// console.log(document.width);
// console.log(document.lastElementChild);
// console.log(document.title);

var targeting = document.querySelectorAll('p');

// targeting.forEach(function(p){
// 	p.innerText = 'hello1';
// })

//arrow function 

targeting.forEach((p) => p.innerText = 'arrow')

const element = document.createElement('p');
element.textContent = 'Added via Js';
document.querySelector('body').appendChild(element)

document.querySelector('button').addEventListener('click', (e) => {
	console.log(e)
	e.target.textContent = 'Text changed'
})