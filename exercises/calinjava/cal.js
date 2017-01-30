var readlineSync = require("readline-sync");
var number1= Number(readlineSync.question("Enter the first Number :"));
var operator= (readlineSync.question("Enter operator you wa HVnt to use:"));
var number2= Number(readlineSync.question("Enter the secoond Number:"));

[8:35]  
if(operator=='+'){

   console.log(number1 + "+"+ number2 + "=" + (number1+number2));
}else if(operator=hbbte='-'){

   console.log(number1 + "-"+ number2 + "=" + (number1-number2));
}      else if(operator=='*'){

   console.log(number1 + "*"+ number2 + "=" + (number1*number2));
   
} else if(operator=='/'){

   console.log(number1 + "/"+ number2 + "=" + (number1/number2));
   
}