var input = 'bookkeeper larry';
var strnoduplicate =''
var strduplicate =''
    for(var i=0 ; i< input.length; i++) {
        var isduplicate = false;
        for(var j=i+1; j < input.length; j++){
          if(input[i]==input[j]){
              strduplicate += input[i];
              isduplicate = true;
              break;
          }  
    
        }
        if(!isduplicate){
            strnoduplicate += input[i];
        }
            
  }
  console.log(strduplicate);
console.log(strnoduplicate);