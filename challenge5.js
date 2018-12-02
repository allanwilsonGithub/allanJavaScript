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


calcTip = function(sum){
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

calcTotal= function(sum){
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

console.log('~ ~ ~ J O H N ~ ~ ~');

for (i in billValuesJohn){
    console.log('Bill:   ' + billValuesJohn[i]);
    console.log('Tip :   ' + calcTip(billValuesJohn[i]));
    allTipsJohn.push(calcTip(billValuesJohn[i]))
    console.log('Total : ' + calcTotal(billValuesJohn[i]));
    allTotalsJohn.push(calcTotal(billValuesJohn[i]));
}

console.log('~ ~ ~ M A R K ~ ~ ~');

for (i in billValuesMark){
    console.log('Bill:   ' + billValuesMark[i]);
    console.log('Tip :   ' + calcTip(billValuesMark[i]));
    allTipsMark.push(calcTip(billValuesMark[i]))
    console.log('Total : ' + calcTotal(billValuesMark[i]));
    allTotalsMark.push(calcTotal(billValuesMark[i]));
}

console.log(allTipsJohn);
console.log(allTotalsJohn);
console.log(allTipsMark);
console.log(allTotalsMark);


calcAverage = function(amounts) {
    numberOfElements = 0;
    runningTotal = 0;
    for (i in amounts) {
        runningTotal = runningTotal + amounts[i];
        numberOfElements++;
        console.log(runningTotal);
    console.log(numberOfElements);
    average = runningTotal / numberOfElements;
    return average;
    }
}

tipAverageJohn = calcAverage(allTipsJohn);
tipAverageMark = calcAverage(allTipsMark);

console.log(tipAverageJohn);
console.log(tipAverageMark);

if (tipAverageJohn > tipAverageMark){
    console.log('John\'s family paid more tips on average')
} else if (tipAverageJohn < tipAverageMark) {
    console.log('Mark\'s family paid more tips on average')
} else {
    console.log('Both families paid an equal amount of tips on average')
}
