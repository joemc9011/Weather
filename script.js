

$("#startsearch").on("click", function(){

    var APIKey = "ecc63f974443533f9d0aaefd04573e9b35";
    var searchInput = $("#search")
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q="+searchInput+"&appidc63f974443533f9d0aaefd04573e9b35";

$.ajax({
    url: queryURL,
    method: "GET" 
}) .then(function(response){
    console.log(queryURL);
    console.log(response);
// for now just checking to see if this works based off prior activity
    $(".info").html(response);
});

})