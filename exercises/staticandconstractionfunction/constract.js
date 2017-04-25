var sous = {
name: "soeurette",
    age : 31
}
console.log(sous.name);

var Car = function (model,color,status) {
    this.model = model;
    this.color = color;
    this.status = status;
    this.condition = function(){
        console.log(this.model + " is running" );
    }
    
}

var newCar = new Car (1980,"red","good");
console.log(newCar.status);
newCar.condition();