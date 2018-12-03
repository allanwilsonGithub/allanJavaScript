var billValuesJohn= [124, 48, 268, 180, 42];
var billValuesMark= [77, 375, 110, 45];


calcTipTotalJohn = function(sum){
    if (sum > 0 && sum < 50){
        tip   = sum*0.2;
        total = sum*1.2;
    } else if (sum => 50 && sum < 200) {
        tip   = sum*0.15;
        total = sum*1.15;
    } else if (sum >= 200) {
        tip   = sum*0.1;
        total = sum*1.1;
    } else {
        tip   = 0;
        total = 0;
    }
    return [tip,total];
}

calcTipTotalMark = function(sum){
    if (sum > 0 && sum < 100){
        tip   = sum*0.2;
        total = sum*1.2;
    } else if (sum => 100 && sum < 300) {
        tip   = sum*0.10;
        total = sum*1.10;
    } else if (sum >= 300) {
        tip   = sum*0.25;
        total = sum*1.25;
    } else {
        tip   = 0;
        total = 0;
    }
    return [tip,total];
}


allTipsJohn = [];
allTotalsJohn= [];
allTipsMark = [];
allTotalsMark= [];


for (i in billValuesJohn){
    allTipsJohn.push(calcTipTotalJohn(billValuesJohn[i])[0]);
    allTotalsJohn.push(calcTipTotalJohn(billValuesJohn[i])[1]);
}


for (i in billValuesMark){
    allTipsMark.push(calcTipTotalMark(billValuesMark[i])[0]);
    allTotalsMark.push(calcTipTotalMark(billValuesMark[i])[1]);
}


console.log(allTipsJohn);
console.log(allTotalsJohn);
console.log(allTipsMark);
console.log(allTotalsMark);


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
