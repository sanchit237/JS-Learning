let grade = function(marks, total){
    let percentage = (marks/total) * 100;

    let Mygrade = '';

    if (percentage > 90){
        Mygrade = 'A'
    }
    else{
        Mygrade = 'B';
    }

    return `Your Grade is ${Mygrade} and Percentage is ${percentage}`;

}

let result = grade(95, 100);

console.log(result);