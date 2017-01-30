var students =[ {
    name:"soeurette",
    dob:"23/06/1980",
    phone:"03-3477996",
    grades:[50,80,90,70],
  
    results:""
},{
    name:"rima",
    dob:"09/10/1982",
    phone:"03-041189",
    grades:[30,50,60,70],
    results:""
},{
    name:"mostafa",
    dob:"12/06/1992",
    phone:"76-695539",
    grades:[60,90,80,90],
    results:""
},{
    name:"omar",
    dob:"18/02/1995",
    phone:"71-010397",
    grades:[90,100,80,70],
    results:""
    
},{
    name:"ola",
    dob:"26/10/1987",
    phone:"76-873138",
    grades:[30,10,50,80],
    results:""
}];




function average (stds){
  var summ = 0;
  var avg = 0;
    var count = 0;
  for(var i = 0; i <stds.length; i++){
   for(var j=0; j<stds[i].grades.length; j++) {
    summ = summ + stds[i].grades[j];
       
   }
    stds[i].summGrades = summ;
    avg = summ / students[i].grades.length;
      if(avg > 60){
    stds[i].results ="pass";
  } else {
    stds[i].results = "fail";
  }
      summ = 0;
      avg = 0;
      ;
}
}
average(students);

//for(var i=0; i<students.length; i++){
//    console.log(students[i].name+" total grades: "+ students[i].summGrades + " result " + students[i].results);
//}

function sortNumber(a,b) {
    return   b.summGrades -a.summGrades;
}

students.sort(sortNumber);


for(var i=0; i<students.length; i++){
    console.log(students[i].name+" total grades: "+ students[i].summGrades + " result " + students[i].results);
}


