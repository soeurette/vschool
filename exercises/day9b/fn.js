var myNb = function ( nb1, nb2) {
console.log ( nb1 + nb2 )
};

myNb(5,9);


var quadriEquation = function ( a, b, c ) {
var delta = (b*b) - ( 4*a*c ); 
   var x1;
    var x2;
     if (delta==0){
       console.log ( ' this equation has one solution',-b/(2*a));
     } else if ( delta > 0) {
         x1 = (-b + math.sqrt(delta)) / (2*a);
         x2 = (-b-math.sqrt(delta)) / (2*a);
         console.log
     }else{
         console.log ( 'no solution')
     }
           
     }