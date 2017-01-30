var printArray = function (lyricsArray) {
    var result = '';
    for(var i = 0; i<lyricsArray.length; i++) {
        result+=lyricsArray[i]+' ';
    }
    console.log(result);
};
var lyricsArray = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


printArray(lyricsArray);

