function loadData() {
    $.ajax({
        url: "http://api.vschool.io/soeurette/todo",
        type: "GET",
        success: function (data) {
            $("#output").html("");
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<li id='" + data[i]._id + "'>" + data[i].title + "</li>");
            }
        }

    });
}
$(document).ready(function () {
    loadData();
});

//function putData() {
//    $.ajax({
//        url: "http://api.vschool.io/soeurette/todo/",
//        type: "PUT",
//        data: {},
//        success: function (data) {
//            alert("Load was performed.");
//        }
//    });
//}

function addData() {
    var title = $("#title").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var imgurl = $("#imgurl").val();
    var comleted = $("#comleted").val();
    var data = {
        title: title,
        description:description,
        price: price,
        imgurl:imgurl
    };
    $.ajax({
        url: "http://api.vschool.io/soeurette/todo/",
        type: "POST",
        data: data,
        success: function (data) {
            loadData();
        }
    });
}

$("#submit").click(function(){
    
    addData();
});