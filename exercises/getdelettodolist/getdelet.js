$("#submit").click(function(){
var addItem = $("#item").val();
    $("#output").append("<li id ="+addItem+">"+addItem+"<button id ="+addItem+" onclick='deleteItem("+addItem+")'>delete</button></li>");
    $("#item").val("");
});


function deleteItem(id){
    $(id).remove();
}
