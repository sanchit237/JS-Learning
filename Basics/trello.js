const months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

// months.forEach(function(months, index){
//     console.log(`Month no. ${index+1} - ${months}`);
// });


// for (i=0; i <= months.length - 1; i++){
//     console.log(months[i]);
// }

// for (let i = months.length - 1; i >= 0; i--){
//     console.log(months[i]);
// }


const Todos = [];

Todos.unshift('workout');
Todos.unshift('Reading');
Todos.unshift('Work');


for (let i = 0; i <= Todos.length - 1; i++){
    console.log(`Task no. ${i+1} is ${Todos[i]}`);
}

