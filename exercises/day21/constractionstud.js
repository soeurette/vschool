var Students = function (name,dob,phone,grades){
  this.stdName = name;
  this.stdDob = parseInt(dob);
  this.stdPhone = phone;
  this.stdGrades = grades;
  this.age = function() {
    var D = new Date();
    var date = D.getFullYear();
    age = date -this.stdDob ;
    
    console.log(age);
  }
 
};
    var student1 =  new Students  ("soeurette",1980,"25/25",[20,30,40,50]);
    var student2 =  new Students  ("rima","23/06/1992","03-347996",[20,30,40,50]);
    var student3 =  new Students  ("mostapha","23/06/1998","03-347996",[20,30,40,50]);
    var student4 =  new Students  ("ola","23/06/1990","03-347996",[20,30,40,50]);
    var student5 =  new Students  ("omar","23/06/1970","03-347996",[20,30,40,50]);
    
//  console.log(student1)
 student1.age();