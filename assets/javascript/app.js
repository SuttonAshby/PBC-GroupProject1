
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


var config = {
  apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
  databaseURL: "https://pbc-groupproject1.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database()

//add to leaderboard
database.once("value", function(snapshot){
	var userName;//submit form name
	var userScore; // time remaining
	database.ref().push({
		Name: userName, 
		Score: userScore
	})
})


//pull leaderboard

database.orderByChild("Score").limitToFirst(10).once("value", function(snapshot){
	snapshot.forEach(function(child){
		var name = child.val().Name
		var score = child.val().Score
		$("#leaderboard").append("<tr><td>" + name + "</td><td>" + score + "</td><tr>")
	})
})

$('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    //ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //console.log(modal, trigger);
   // },
   //!!!!!!!!!!!!!!!!!!!!CALLBACK FOR MODAL CLOSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //complete: function() { alert('Closed'); }  
  }
  );

