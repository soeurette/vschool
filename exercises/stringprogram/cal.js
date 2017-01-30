var readlineSync = require("readline-sync");
var number1= Number(readlineSync.question("the first Number :"));
var operator= (readlineSync.question("operator you want to use:"));
var number2= Number(readlineSync.question("the secoond Number:"));
 
if(operator=='+'){

   console.log(number1 + "+"+ number2 + "=" + (number1+number2));
}else if(operator=='-'){

   console.log(number1 + "-"+ number2 + "=" + (number1-number2));
}      else if(operator=='*'){

   console.log(number1 + "*"+ number2 + "=" + (number1*number2));
   
} else if(operator=='/'){

   console.log(number1 + "/"+ number2 + "=" + (number1/number2));
   
}