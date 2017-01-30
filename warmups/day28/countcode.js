
function countCode (str){
    var counter =0;
    for (var i=0;i<str.length;i++){
         if(str[i] === "c" && str[i+1] === "o" && str[i+3] === "e"){
             counter = counter +1 ;
         }
}
return counter
}

console.log(countCode("aaacodekkfjkjfklcovelkkjkjcofekdnfdhgdcore"));