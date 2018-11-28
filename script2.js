/*

var john = {
    firstname: 'John',
    birthYear: 1994,
    family: ['Jane', 'Mark'],
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear; //this
    }
}

console.log(john.firstname); //dot notation
console.log(john['isMarried']); //brackets notation
john.calcAge();
console.log(john);

*/

var john = {
    fullName : 'John Burrows',
    mass : 80,
    height : 1.8,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    fullName : 'Mark Reid',
    mass : 80,
    height : 1.8,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
                                
john.calcBMI();
console.log(john);
johnsBMI = john.calcBMI();
console.log(johnsBMI);
mark.calcBMI();
console.log(mark);
marksBMI = mark.calcBMI();
console.log(marksBMI);

if (johnsBMI > marksBMI) {
    console.log("John is a fat sod!")
} else if (marksBMI > johnsBMI) {
    console.log("Mark could do with less cake!")
} else {
    console.log("Both seem to be as HUGE as each other!")
}