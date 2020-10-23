

function weatherSearch(location) {
    var APIkey = "c63f974443533f9d0aaefd04573e9b35";
    var queryURL = "api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&cnt=7&appid=" + key;
    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function (response) {
        console.log(response);
        var place = $("<h1>").text(response.name);
    });

}
$(".startsearch").on("click", function (event) {
    event.preventDefault();
    var location = $("#townState").val().trim();
    weatherSearch(location);
});