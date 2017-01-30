var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newarray =[];
for(var i=0; i<people.length;i++){
    newarray.push(people[i]);
    for(var j=0; j<alphabet.length;j++){
       newarray.push(alphabet[j]);
}}
console.log("["+newarray.join(", ")+"]");