let course = {
    name : 'javascript',
    author : 'sanchit',
    price : 2000,
    description : 'javascript from scratch'
}


console.log(`New course ${course.name} written by ${course.author} priced at Rs. ${course.price} contains ${course.description} `);

console.log(course['name']);


let objfunction = function(myobject){
    // console.log(`Name of the course is ${myobject.name}`);
    return {
        case1 : myobject.author,
        case2 : myobject.price
    }
}

let result = objfunction(course);

console.log(result.case1);
console.log(result.case2);


