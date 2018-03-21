var config = {
  apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
  databaseURL: "https://pbc-groupproject1.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database()

//add to leaderboard
database.once("value", function(snapshot){
	var userName = //submit form name
	var userScore = // time remaining
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
