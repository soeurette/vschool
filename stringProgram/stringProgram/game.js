 var asking = require("readline-sync");  

       var playerName=asking.question("what is your name please?");   
     
function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
var player={
    name:playerName,
    inv:[],
    hp:100,
    attack:getRandom(100,70),
    };

var Enemies =function(type)
{
    var type =type;
    this.EnemiesType="";
    this.attack=100;
    this.health=100;
  
    this.generate=function(){
        var index = getRandom(0,type.length-1);
        this.EnemiesType=type[index];
        if(type[index] =="Ancient Dragon")
        {
            this.attack=getRandom(80,100);
             

        }else if (type[index]=="Prowler")
        {
            this.attack=getRandom(50,79);
                    
        }else if (type[index]=="Mighty Grunt")
        {
            this.attack=getRandom(20,49);
            
        }
    
        }
}
var type=["Ancient Dragon","Prowler","Mighty Grunt"];
var inv=["sword","chocolate","phone","laptop"];
var RandomAward=function(inv){
    inv=inv;
    this.YourAward="";
    this.generateAward=function(){
        var index=getRandom(0,inv.length-1);
        this.YourAward=inv[index];
    }
}
var rew=new RandomAward(inv);
while(type.length > 0) {
   
   var action=asking.question( "what else ?");
   if(action=="view"){
       console.log("your name is "+ player.name +"\n number of attacks = "+player.attack+"\n your health is ="+player.hp+"\n you inventory rewards"+player.inv+"rewaRDS "+rew);
   }
    if(action == "w") {
        var chance = getRandom(0,100);
        if(chance > 50) {
            var enemy = new Enemies(type);
            enemy.generate();
            console.log("You have met an enemy " + enemy.EnemiesType);
            
                console.log("Attack or run")
                var action2=asking.question( " Attack or Run?");
                if(action2 == "r") {
                    chance =getRandom(0,100);
                    if(chance > 50) {
                        console.log("good for you");
                       // break;
                    } else {
                        console.log("loser");
                    }
                } else if(action2 == "a") {
                    if(chance > 50) {
                        var damage = enemy.attack;
                        console.log(" you hit the enemy " + damage);
                        enemy.health -= damage;
                    rew.generateAward();
                          player.inv.push(rew.YourAward);
                        if(enemy.health <= 0) {
                            console.log("reward");
                           rew.generateAward();
                            player.inv.push(rew.YourAward);
                        }
                    } else {
                        console.log("you missed")
                    }
                    
                } else {
                    console.log(playerName +" thats not an option");
                }
                console.log("attention It will hit you ");
                chance = getRandom(0,100);
                if(chance > 50) {
                    var damage = enemy.attack;;
                    console.log("hard to see you have hitten " + damage);
                    player.hp -= damage;
                } else {
                    console.log("Good the enemy missed you ");
                }
                
            }
            if(player.hp <= 0) {
                console.log("nice");
                break;
            }
 
        }
    }

if(player.hp <= 0) {
    console.log("Game over");
} else {
    console.log("you won this game");
    console.log(player.inv);
}
