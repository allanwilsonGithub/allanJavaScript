/********************
* Objects and Properties
*/

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