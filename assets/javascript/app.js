$(document).ready(function () {

    // example question

    /* {
        "response_code": 0,
        "results": [
        {
        "category": "General%20Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "This%20field%20is%20sometimes%20known%20as%20%E2%80%9CThe%20Dismal%20Science.%E2%80%9D",
        "correct_answer": "Economics",
        "incorrect_answers": [
        "Philosophy",
        "Politics",
        "Physics"
        ]
        }, */
    // question topics
    var questionCategories = [
        "General Knowledge",
        "Entertainment: Books",
        "Entertainment: Film",
        "Entertainment: Music",
        "Entertainment: Musicals & Theater",
        "Entertainment: Television",
        "Entertainment: Video Games",
        "Entertainment: Board Games",
        "Entertainment: Japanese Anime & Manga",
        "Entertainment: Cartoons & Animation",
        "Entertainment: Comics",
        "Science & Nature",
        "Science: Computers",
        "Science: Mathematics",
        "Science: Gadgets",
        "Mythology",
        "Sports",
        "Geography",
        "History",
        "Politics",
        "Art",
        "Celebrities",
        "Animals",
        "Vehicles",
    ];

    //open trivia api call
    var categorie = "9";
    var difficulty = "hard";

    var getQuestions = function () {

<<<<<<< HEAD
        var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categorie + "&difficulty=" + difficulty + "&type=multiple";
=======
});
        var queryURL = "https://opentdb.com/api.php?amount=1&" + 
>>>>>>> 53e1bfa018f21548820294d1c47147a716a687fa
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            //question functions
            function makeQuestionButtons() {
<<<<<<< HEAD
                questionText = $("<h4 id='questionText'>").text(response.results[0].question);
                option1 = $("<button id='option1'>").text(question.answers.correct_answer).addClass("option correct");
                questionButtons[0] = option1;
                option2 = $("<button id='option2'>").text(response.results[0].incorrect_answers[0]).addClass("option incorrect");
                questionButtons[1] = option2;
                option3 = $("<button id='option3'>").text(response.results[0].incorrect_answers[1]).addClass("option incorrect");
                questionButtons[2] = option3;
                option4 = $("<button id='option4'>").text(response.results[0].incorrect_answers[2]).addClass("option incorrect");
                questionButtons[3] = option4;
                questionButtons.sort(function (a, b) { return 0.5 - Math.random() });
            }

            function renderQuestionButtons() {
                if ("NOT AT FINAL ESTINATION") {
                    $(".card").remove();
                    $("#questionText").replaceWith(questionText, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
                    run();
                } else if ("AT FINAL DESTINATION"); {
                    endGameGood();
                } else ("OUT OF TIME"); {
                    endGameBad();
                };
            };
    });
=======
                askedQuestion = results[index];
                questionText = $("<h4 id='questionText'>").text(results[index].question);
                option1 = $("<button id='option1'>").text(question.answers.correct_answer).addClass("option correct");
                questionButtons[0] = option1;
                option2 = $("<button id='option2'>").text(results[index].incorrect_answers[0]).addClass("option incorrect");
                questionButtons[1] = option2;
                option3 = $("<button id='option3'>").text(results[index].incorrect_answers[1]).addClass("option incorrect");
                questionButtons[2] = option3;
                option4 = $("<button id='option4'>").text(results[index].incorrect_answers[2]).addClass("option incorrect");
                questionButtons[3] = option4;
                questionButtons.sort(function (a, b) { return 0.5 - Math.random() });
            };

        });
>>>>>>> 53e1bfa018f21548820294d1c47147a716a687fa

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
<<<<<<< HEAD
    apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
    databaseURL: "https://pbc-groupproject1.firebaseio.com/"
=======
  apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
  databaseURL: "https://pbc-groupproject1.firebaseio.com/"
>>>>>>> 53e1bfa018f21548820294d1c47147a716a687fa
};

firebase.initializeApp(config);

var database = firebase.database()

//add to leaderboard
<<<<<<< HEAD
database.once("value", function (snapshot) {
    var userName;//submit form name
    var userScore; // time remaining
    database.ref().push({
        Name: userName,
        Score: userScore
    })
=======
database.once("value", function(snapshot){
	var userName;//submit form name
	var userScore; // time remaining
	database.ref().push({
		Name: userName, 
		Score: userScore
	})
>>>>>>> 53e1bfa018f21548820294d1c47147a716a687fa
})


//pull leaderboard

<<<<<<< HEAD
database.orderByChild("Score").limitToFirst(10).once("value", function (snapshot) {
    snapshot.forEach(function (child) {
        var name = child.val().Name
        var score = child.val().Score
        $("#leaderboard").append("<tr><td>" + name + "</td><td>" + score + "</td><tr>")
    })
=======
database.orderByChild("Score").limitToFirst(10).once("value", function(snapshot){
	snapshot.forEach(function(child){
		var name = child.val().Name
		var score = child.val().Score
		$("#leaderboard").append("<tr><td>" + name + "</td><td>" + score + "</td><tr>")
	})
>>>>>>> 53e1bfa018f21548820294d1c47147a716a687fa
})

$('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    //ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
<<<<<<< HEAD
    //console.log(modal, trigger);
    // },
    //!!!!!!!!!!!!!!!!!!!!CALLBACK FOR MODAL CLOSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //complete: function() { alert('Closed'); }  
}
)
}
});
=======
      //console.log(modal, trigger);
   // },
   //!!!!!!!!!!!!!!!!!!!!CALLBACK FOR MODAL CLOSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //complete: function() { alert('Closed'); }  
  }
  );
>>>>>>> 53e1bfa018f21548820294d1c47147a716a687fa
