var cars = [];
function Car (color,model,miles){
    this.color=color;
    this.model=model;
    this.miles=miles;
    this.run=function(){
        console.log("color :" + this.color + " model :" + this.model + "miles:" + this.miles +"is running");
    }
};

cars.push( new Car("red","honda",200000));
cars.push(new Car("red","bmw",30000));
cars.push(new Car("red","mercedes",555555));

for (var i=0;i<cars.length;i++){
    cars[i].run();
}