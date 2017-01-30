var students = [{name:"soeurette",grade:60},{name:"rima",grade:99},{name:"mostapha",grade:70}];

var pass = [];
var fail = [];
for(var i = 0; i<students.length; i++){
    if(students[i].grade < 60){
        fail.push(students[i])
    }else{
        pass.push(students[i])
    }
};
 for(var j = 0; j<pass.length; j++){
     if(pass[j].grade > 90 && pass[j].grade < 100){
         console.log(pass[j].name + " exellent");
     }else if(pass[j].grade >80 && pass[j].grade <89){
         console.log(pass[j].name + " verygood");
             }else{
                 pass[j].grade <70
                 {
                 console.log(pass[j].name +" good");}
             }
         
     };
console.log(pass);