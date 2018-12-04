///////////////////////////////////////
// Lecture: Hoisting

// works before the function declaration because it's created in the execution context
calculateAge(1990);

function calculateAge(year) {
    console.log(2018 - year);
}

// Doesn't work because this is a function expression. Not a declaration
//retirement(1990);

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1990);

// variable is created as 'undefined' datetype in the execution context
console.log(age);
var age = 27;
console.log(age);






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









