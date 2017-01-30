$("#btn").click(function() {
  var counter = -1;
  var words = "The end of the world has come upon us".split(" ");
  var repeat = setInterval(function() {
    counter++;
    if(counter >= words.length) {
      clearInterval(repeat);
    }
    $("p").html(words[counter]);
  }, 1000)
});