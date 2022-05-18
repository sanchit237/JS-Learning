let sayhello = function (){
    console.log('hello');
}

sayhello();


let Fullname = function(fname, lname){
    console.log(`Full name is: ${fname} ${lname}`);
}

Fullname('test','user');

let multiplier = function(num1, num2){
    let mul_result = num1 * num2;
    return mul_result;
}

console.log(multiplier(2,3));