const amounts = [124, 48, 268];

const addTip = sum => {
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

let finalBillsArray = amounts.map(a => addTip(a));
console.log("Final bills: " + finalBillsArray)




//let , map
let newArray = amounts.map(a => addTip(a));
console.log(newArray)


//filter
function showIt(whatever){
    console.log(whatever);
}

// All dates after 2000
let dates = [1999, 2012, 2019, 2023]
dates.filter(a => a =>2000).map(a => showIt(a))