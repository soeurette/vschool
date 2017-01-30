document.getElementById("submit-ariel").addEventListener("click",function(){
   var worth1 = document.getElementById("ariel-worth").innerHTML;
    var amount1 = document.getElementById("ariel-amount").value;
    document.getElementById("ariel-result").value = worth1 *amount1; 
    totalcoins();
});
document.getElementById("submit-cinderella").addEventListener("click",function(){
   var worth2 = document.getElementById("cinderelle-worth").innerHTML;
    var amount2 = document.getElementById("cinderella-amount").value;
    document.getElementById("cinderella-result").value = worth2 * amount2;
    totalcoins();
});
document.getElementById("submit-snowWhite").addEventListener("click",function(){
   var worth3 = document.getElementById("snowWhite-worth").innerHTML;
    var amount3 = document.getElementById("snowWhite-amount").value;
    document.getElementById("snowWhite-result").value = worth3 * amount3;
    totalcoins();
});
var totalcoins = function() {
    var one =
    document.getElementById("ariel-result").value; 
  var second =
    document.getElementById("cinderella-result").value; 
    var third =
    document.getElementById("snowWhite-result").value; 
    console.log(one,second,third);
    document.getElementById("total").value = Number(one) + Number(second) + Number(third);
}