function loadData() {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD",
        type: "GET",
        success: function (data) {

            for (var itm in data.rates) {

                $("#select").append("<option value= '" + data.rates[itm] + "'>" + itm + "</option>")
            }


        }

    });
}
$(document).ready(function () {
    loadData();
});



$('#select').on('change', function () {
    $("#Result").val(parseFloat(this.value) * parseFloat($("#ammount").val()));
})