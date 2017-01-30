
var array = []
var creatEvenArray = function(highestNum) {
    for (var i = 2; i <= highestNum ; i++){
       if( i % 2 == 0){
           array.push(i);
       }
    }
};
var odd = function(highestNum) {
    for (var i = 2; i <= highestNum ; i++){
       if( i % 2 != 0){
           array.push(i);
       }
    }
};

creatEvenArray(10);
console.log(array);
odd(10);
console.log(array);
console.log(array.sort(function(a,b){
    return a-b;
}))