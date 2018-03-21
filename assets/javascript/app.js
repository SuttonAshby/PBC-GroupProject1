$(".location").on("click", function () {
    var city = $(this).html() + ".json";
    console.log(city);

    var queryURL = "http://api.wunderground.com/api/c2f13b0c2d6e1c55/conditions/q/" + city;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.current_observation;
        var weather = results.weather;
        console.log(weather);


    })
})

