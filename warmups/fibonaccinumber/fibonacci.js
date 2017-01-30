//var i;
//var fib = [];
//
//fib[0]= 0;
//fib[1]= 1;
//for(i=2;i<100;i++){
//  
//  fib[i] = fib [ i-2 ] + fib [i-1];
//  console.log(fib[i]);
//}



function sous(){
  

var fib = [0,1];

for(var i=1;i<=98;i++){
  
  fib.push(fib[i] + fib[i-1]);
}
  
console.log(fib.reduce(function(a,b){
    return a + b
  
}))
     }
sous();