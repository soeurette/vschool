var ask = require('readline-sync');  
 function CaesarCipher(){
var str = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var num = parseInt(ask.question('How many letters would you like to shift? ')); 
                              
    str = str.toLowerCase();
    
   var alphaBit=[];

    for (var i = 0; i < str.length; i++){
        if (i=97)&&(i<=122)
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}
                               
console.log(CaesarCipher(),num);