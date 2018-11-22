var amounts = [124, 48, 268];

function addTip(sum){
    if (sum > 0 && sum < 50){
        return sum*1.2;
    } else if (sum => 50 && sum < 200) {
        return sum*1.15;   
    } else if (sum >= 200) {
        return sum*1.1;
    } else {
        return 0
    }
}

for (i in amounts){
    var withTip = addTip((amounts[i]));
    console.log(i + ": " + withTip);
}