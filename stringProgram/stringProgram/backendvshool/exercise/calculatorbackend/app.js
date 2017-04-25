var readlineSync = require("readline-sync");

var calculator = require("./calculator.js");


var valueA = readlineSync.question("enter value a =");
var valueB = readlineSync.question("enter value b =");
var operator = readlineSync.question("enter value operator =");

if (operator == "+") {
    console.log(calculator.add(parseInt(valueA), parseInt(valueB)))

} else if (operator == "-") {
    console.log(calculator.minus(parseInt(valueA), parseInt(valueB)))

} else if (operator == "*") {
    console.log(calculator.multip(parseInt(valueA), parseInt(valueB)))
} else if (operator == "/") {

    console.log(calculator.divnum(parseInt(valueA), parseInt(valueB)))
} else if (operator == "sq") {
    console.log(calculator.expo(parseInt(valueA), parseInt(valueB)))

}