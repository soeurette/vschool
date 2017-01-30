$("#get").click(function() {
  $.ajax({
    url: "http://api.vschool.io:6543/pokemon.json",
    success: function(result) {
        var results= result["objects"][0]["pokemon"][$("#number").val()].name
      $("#name").html(results);
    }
  });
});