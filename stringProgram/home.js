var readlineSync = require("readline-sync");
var number1= Number(readlineSync.question("The first Number :"));
var opp= (readlineSync.question("The operator to use:"));
var number2= Number(readlineSync.question(" The secoond Number:"));
  
if(operator=='+'){

   console.log(number1 + "+"+ number2 + "=" + (number1+number2));
}else if(operator=='-'){

   console.log(number1 + "-"+ number2 + "=" + (number1-number2));
}      else if(operator=='*'){

   console.log(number1 + "*"+ number2 + "=" + (number1*number2));
   
} else if(operator=='/'){

   console.log(number1 + "/"+ number2 + "=" + (number1/number2));
   
}