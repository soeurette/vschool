function loadData() {
    $.ajax({
        url:"http://swapi.co/api/films/1/" ,
        type: "GET",
        success: function (data) {
            
               console.log(data.opening_crawl)
               $("#word").html(data.opening_crawl)
            
        }

    });
}
$(document).ready(function () {
    var myAudio = new Audio('http://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3');
myAudio.loop = true;
myAudio.play();
    loadData();
});

  