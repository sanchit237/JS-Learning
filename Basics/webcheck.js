let username = 'abc';
let userpass = 123;


let usercheck = function(user){
    if (user.includes(123) && (user.length > 6)){
        return false;
    }
    else {
        return true;
    }
}

console.log(usercheck(username));