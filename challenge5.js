/*
const amounts = [124, 48, 268];

const tips = sum => {
    if (sum > 0 && sum < 50){
        return sum*0.2;
    } else if (sum => 50 && sum < 200) {
        return sum*0.15;   
    } else if (sum >= 200) {
        return sum*0.1;
    } else {
        return 0;
    }
}

let tipsArray = amounts.map(a => tips(a));
console.log("Tips: " + tipsArray)

let finalBillsArray = amounts.map(a => a + tips(a));
console.log("Final bills: " + finalBillsArray)


//let , map
let newArray = amounts.map(a => a + tips(a));
console.log(newArray)


//filter
function showIt(whatever){
    console.log(whatever);
}

// All dates after 2000
let dates = [1999, 2012, 2019, 2023]
dates.filter(a => a =>2000).map(a => showIt(a))

*/

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
var billValuesJohn= [124, 48, 268, 180, 42];
var billValuesMark= [77, 375, 110, 45];


calcTipJohn = function(sum){
    if (sum > 0 && sum < 50){
        return sum*0.2;
    } else if (sum => 50 && sum < 200) {
        return sum*0.15;   
    } else if (sum >= 200) {
        return sum*0.1;
    } else {
        return 0;
    }
}

calcTotalJohn= function(sum){
    if (sum > 0 && sum < 50){
        return sum*1.2;
    } else if (sum => 50 && sum < 200) {
        return sum*1.15;   
    } else if (sum >= 200) {
        return sum*1.1;
    } else {
        return 0;
    }
}

calcTipMark = function(sum){
    if (sum > 0 && sum < 100){
        return sum*0.2;
    } else if (sum => 100 && sum < 300) {
        return sum*0.10;   
    } else if (sum >= 300) {
        return sum*0.25;
    } else {
        return 0;
    }
}

calcTotalMark= function(sum){
    if (sum > 0 && sum < 100){
        return sum*1.2;
    } else if (sum => 100 && sum < 300) {
        return sum*1.10;   
    } else if (sum >= 300) {
        return sum*1.25;
    } else {
        return 0;
    }
}

allTipsJohn = [];
allTotalsJohn= [];
allTipsMark = [];
allTotalsMark= [];


for (i in billValuesJohn){
    allTipsJohn.push(calcTipJohn(billValuesJohn[i]))
    allTotalsJohn.push(calcTotalJohn(billValuesJohn[i]));
}


for (i in billValuesMark){
    allTipsMark.push(calcTipJohn(billValuesMark[i]))
    allTotalsMark.push(calcTotalJohn(billValuesMark[i]));
}


calcAverage = function(amounts) {
    numberOfElements = 0;
    runningTotal = 0;
    for (i in amounts) {
        runningTotal += amounts[i];
        numberOfElements++;
    average = runningTotal / numberOfElements;
    return average;
    }
}

tipAverageJohn = calcAverage(allTipsJohn);
tipAverageMark = calcAverage(allTipsMark);


if (tipAverageJohn > tipAverageMark){
    console.log('John\'s family paid more tips on average')
} else if (tipAverageJohn < tipAverageMark) {
    console.log('Mark\'s family paid more tips on average')
} else {
    console.log('Both families paid an equal amount of tips on average')
}
