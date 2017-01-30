//var seconds_left = 10;
//var interval = setInterval(function() {
//    document.getElementById('timer_div').innerHTML = --seconds_left;
//
//   if (seconds_left <= 0)
//    {
//        document.getElementById('timer_div').innerHTML = 'The end of the world has come upon us';
//        clearInterval(interval);
//    }
//}, 1000);

$("#btn").click(function(){
  var timeInterval = setInterval(function(){
      var second = parseInt($("#second").val());
      var minute = parseInt($("#minute").val());
      var hour = parseInt($("#hour").val());
      second -- ;
      if(second <= 0 && minute > 0) {
          minute--;
          second = 59;
      } else if( minute <= 0 && hour > 0) {
           hour--;
            minute = 59;
          second = 59;
        }else if(second<=0 && minute <= 0 && hour <= 0){
               
            $("#world").html("the End");
            clearInterval(timeInterval);
        }
         $("#second").val(second);
      $("#minute").val(minute);
      $("#hour").val(hour);   
        
           
  }, 1000);
  });  