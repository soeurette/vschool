var word = "";

var count = 0;

word.toLowerCase();
var vowel = function (word) {
    var str = word.toLocaleLowerCase();
    for (var i = 0 ; i < str.length ; i++ ){
        if( str[i] === "a" || str[i]  === "e" || str[i]  === "o" || str[i]  === "i" || str[i]  === "u" || str[i]  !=" " ){
           count ++;
        }
    }
    
   console.log(count) ;
}

vowel("how are you soeurette");

var anotherSolution = function(word){
   var countersss = 0;
  countersss = word.length - count;
   console.log(countersss);
}
anotherSolution("how are you soeurette");