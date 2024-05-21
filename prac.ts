let MyBudget = 1300000;
let Have = true;
console.log(MyBudget >= 1000000 && Have == true);
console.log("\n");

let haveDegree = "yes";
let isHamzahsStd = "no";
console.log(haveDegree == "yes" || isHamzahsStd == "yes");

let num = 5;
console.log(!(num <= 6));

// for comaparision of true and false condition we use srting datatype instead of boolean
let isRaining = "false";
if (isRaining == "true") {
    console.log("wear raincoart");
} else {
    console.log("wear sunglasses");
}

let weather = "cloudy";
if (weather == "cloudy") {
    console.log("Weather is cloudy");
} else if (weather == "rainy") {
    console.log("Weather is rainy");
} else {
    console.log("Weather is not cloudy and not rainy");
}