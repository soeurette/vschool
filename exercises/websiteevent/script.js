$("#square").hover(function(){
    $(this).css("background-color", "blue");
});

$("#square").on("dblclick",function(){
    $(this).css("background-color", "green");
});
$("#square").on("mousedown",function(){
    $(this).css("background-color", "red");
});

$(window).scroll(function(){
    $("#square").css("background-color", "orange");
});
$("#square").on("mouseout",function(){
    $(this).css("background-color", "yellow");
});