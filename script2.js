var john = {
    fullName : 'John Burrows',
    mass : 80,
    height : 1.8
    }

var mark = {
    fullName : 'Mark Reid',
    mass : 80,
    height : 1.8
    }

function calcBMI (){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
}

calcBMI.bind(john)();
calcBMI.bind(mark)();
console.log(john);
console.log(mark);

if (john.BMI > mark.BMI) {
    console.log("John is a fat sod!")
} else if (mark.BMI > john.BMI) {
    console.log("Mark could do with less cake!")
} else {
    console.log("Both seem to be as HUGE as each other!")
}
