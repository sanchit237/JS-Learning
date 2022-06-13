const todos = [{
    title: 'abc',
    isdone: true
},{
    title: 'def',
    isdone: true
},{
    title: 'ghi',
    isdone: true
},{
    title: 'jkl',
    isdone: false
},{
    title: 'mno',
    isdone: false
},{
    title: 'pqr',
    isdone: false
}]

const result = todos.filter((todo) => todo.isdone === true )

console.log(result)
		
