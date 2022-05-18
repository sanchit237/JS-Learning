const subjects = ['physics','chemistry','bio'];


console.log(subjects);
console.log(subjects[0]);
console.log(subjects.length);
console.log(subjects[subjects.length-1]);

console.log(`total number of subjects are : ${subjects.length}`);

// subjects.shift();

// console.log(subjects);

subjects.splice(2,1,'mango','apple');

console.log(subjects);