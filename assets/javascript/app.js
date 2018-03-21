
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
