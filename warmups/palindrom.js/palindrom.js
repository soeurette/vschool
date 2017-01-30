//function palindrome(str) {
//    var len = str.length;
//    for ( var i = 0; i < Math.floor(len/2); i++ ) {
//        if (str[i] !== str[len - 1 - i]) {
//            return false;
//        }
//    }
//    return true;
//}
//console.log()


function palindrome(stringPal){
    var str = stringPal.toLowerCase();
    var i =0,j=str.length-1,count=0;
    while (i<j){
        if(str[i]=== str[j]){
            i++;
            j--;

        }
        else{
            return false;}
    }

        return true;
}
console.log(palindrome("harah"));