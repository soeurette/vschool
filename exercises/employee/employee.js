var employees = [];
function Employee (name,jobTitle,salary,status) {  
    this.name = name;
    this.jobTitle = jobTitle;
  this.status= status || "FullTime";
    this.salary = salary ;
 this.printEmployeeForm = function(){
   console.log("Name="+this.name+"jobTitle"+ this.jobTitle+"status" this.status+"salary"+this.salary);
}
}
employees.push(new Employee("soeurette","mlt",111111,"contract"));
employees.push(new Employee("rima","mlt",111111,"contract"));
employees.push(new Employee("jacob","mlt",111111,"contract"));
for (var i=0;i<employees.length;i++){
    employees[i].printEmployeeForm();
}