var APIkey = "c63f974443533f9d0aaefd04573e9b35";
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    $("#date").text(d)
};
// click function for when user hits search button
$("#startsearch").on("click", function (event) {
    event.preventDefault();
    var city = $("#city").val().trim();
    weatherSearch(city)
});
// api call for requested city
function weatherSearch(city) {
    var querytodayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    $.ajax({
        url: querytodayURL,
        method: "get"
    }).then(function (response) {
        console.log(response);
        // changing celsius to fareinheit 
        var tempF = Math.round((response.main.temp - 273.15) * 1.80 + 32);

        // calling the id's from the html and text/copying the info from the object into the selected area's
        $("#currentCity").text(response.name);
        $("#temperature").text("Temperature: " + tempF);
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#windspeed").text("Windspeed: " + response.wind.speed);
    })
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey,
        method: "get"
    }).then(function (response) {
        console.log(response);
        var days = response.list;
        for (var i = 0; i < days.length; i++) {
            var week = $("#fiveday");

            var weekday = days[i](new Date());
            var temp = days[i].main.temp;
            var humid = days[i].main.humidity;

            var dates = $("<h3>").text(weekday);
            var temppart = $("<p>").text("Temperature: " + temp);
            var humpart = $("<p>").text("Humidity: " + humid);

            week.append(dates);
            week.append(temppart);
            week.append(humpart);
        };
    });
}
