let myTodos = {
    day : 'monday',
    meetings : 0,
    meetDone : 0,
    calc: function (){
        console.log(`Total meets for the day are ${this.meetings}`);
    },
    meetsavail: function(num){
        this.meetings = this.meetings + num;
        console.log(`Meets to be done are ${this.meetings}`);
    }
} 

myTodos.calc();
myTodos.meetsavail(10);