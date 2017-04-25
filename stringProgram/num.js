var readlineSync = require("readline-sync");
//var number1= Number(readlineSync.question("The first Number :"));
//var number2= Number(readlineSync.question(" The secoond Number:"));
//var number3= Number(readlineSync.question(" The third Number:"));
//var arr=[];
//arr.push(number1);
//arr.push(number2);
//arr.push(number3);
//arr.sort(function(a,b){return a-b;});
//console.log(arr);
var readlineSync = require("readline-sync");
var nums = [];

for(var i = 0; i < 3; i++) {
  nums.push(parseInt(readlineSync.question("Enter a number : ")));
}

// nums.sort(function(a, b) {
//   return a - b;
// });

function sort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

//console.log(sort(nums));