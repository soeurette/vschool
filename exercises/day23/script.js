var names = ["soeurette","rima","talal","mostapha"];

function dontCall(name){
  console.log("you didnot call:" + name );
};
function willCall(name){
  console.log("you call:" + name );
};
function sendText(name){
  console.log("you send text to:" + name );
};
  
var attemptCall = function(name,willCall,dontCall,sendText){
  for(var i = 0; i<names.length; i++){
    if(names.length % 2 === 0){
      willCall();
    }else if(names.length % 2 !==0){
      dontCall();
    }else{
      sendText();
    }
  }
}
attemptCall();