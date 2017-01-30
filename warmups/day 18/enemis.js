function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Enemy = function (type){
    
 var type = type;
   this.arrayEnemy = "";
    this.hitPoints = 0;
     this.defense = 0;   

this.generate = function() {
    var index = getRandom(0,type.length -1);
    this.arrayEnemy = type[index];
    
this.hitpoints = function(){
    if(this.type === "Ancient Dragon"){
this.hitpointsnb =getRandom(80,100);
        this.defense=this.hitpointsnb*3;
    }else if(this.type === "Prowler"){
   this.hitpointsnb=getRandom(50,79);
    }else {this.hitpointsnb=getRandom(20,49);        this.defense=this.hitpointsnb*3;}
        
        
}
}
}

   var allEnemy = ["Ancient Dragon","Prowler","Mighty Grunt"];
for(var i = 0; i < 100; i++){
    var newEnemy = new Enemy(allEnemy);
    newEnemy.generate();
    newEnemy.hitpoints();
    console.log(newEnemy.arrayEnemy + newEnemy.hitpointsnb+" defense number"+newEnemy.defense );
}

