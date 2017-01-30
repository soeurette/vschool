function happyNb(number) {
     var nb =[];
     var newNb= number.toString();
     var power =0;
        for(var i = 0 ; i<newNb.length;i++){
            nb.push(parseInt(newNb[i]));
          power += (nb[i] * nb[i])
        }
    if (power >1 ){
        happyNb(power)
    }else{
        console.log("happy number")
    }
}
    
happyNb(19);

