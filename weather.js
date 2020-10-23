

function searchWeather(location) {
    var API = "c63f974443533f9d0aaefd04573e9b35";
    var queryURL = "api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&cnt=7&appid=" + API;
    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        console.log(location);

    });
}
$(".startsearch").on("click", function (event) {
    event.preventDefault();
    var location = $("#townState").val().trim();
    searchWeather(location)
});