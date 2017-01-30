var Table = function (height,color,weidth) {
    this.height = height;
    this.color = color;
    this.weidth = weidth;
    this.print = function (){
     console.log (this.color);  
    }
}

var Students = function (age,gender,major) {
    this.age = age;
    this.gender = gender;
    this.major = major;
    this.print = function (){
     console.log (this.major);  
    }
}
var Car = function (height,color,weidth,model) {
    this.height = height;
    this.color = color;
    this.weidth = weidth;
    this.model = model;
    this.print = function (){
     console.log (this.model);  
    }
}
var Teachers = function (cute,gender,height) {
    this.height = height;
    this.cute = cute;
    this.gender = gender;
    this.print = function (){
     console.log (this.gender);  
    }
}
var Laptops = function (height,color,weidth) {
    this.height = height;
    this.color = color;
    this.weidth = weidth;
    this.print = function (){
     console.log (this.weidth);  
    }
}
 var chair = {
     type:"regular";
     color:"blue";
     numbers:40;
      }
console.log(chair.color);
 var bag = {
     type:"mc";
     color:"black";
     numbers:40;
      }
console.log(bag.color); 
var phones = {
     type:"iphone";
     color:"blue";
     numbers:40;
      }
console.log(phones.type); 
var dress = {
     type:"regular";
     color:"blue";
     numbers:40;
      }
console.log(dress.color);
var pencil = {
     type:"regular";
     color:"blue";
     numbers:40;
      }
console.log(pencil.color);