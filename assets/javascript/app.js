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

    };
    var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categorie + "&difficulty=" + difficulty + "&type=multiple";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        //question functions
        function makeQuestionButtons() {
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
        };
        function renderQuestionButtons() {
            if ("NOT AT FINAL ESTINATION") {
                $(".card").remove();
                $("#questionText").replaceWith(questionText, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
                run();
            } else if ("AT FINAL DESTINATION") {
                endGameGood();
            } else ("OUT OF TIME"); {
                endGameBad();
            };
        };
    });

});

var config = {
    apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
    databaseURL: "https://pbc-groupproject1.firebaseio.com/"
};


// Calling weather API, getting current conditions in city user is going to, and changing TOTALTIME according to degree of weather

$(".correct").on("click", function () {
    var city = $("CITY NAME").val() + ".json";
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

        // Changing TOTALTIME based on current weather condition of user travel location
        if ((weather === "Clear") || (weather === "Partly Cloudy") || (weather === "Scattered Clouds")) {
            TOTALTIME = TOTALTIME - 2; // Take 2 hours off total time for good weather travel
        } else if ((weather === "Squalls") || (weather === "Small Hail") || (weather === "Funnel Cloud")) {
            // Go to random location for really bad weather
        } else {
            TOTALTIME = TOTALTIME + 2; // Add 2 hours to total time for bad weather travel
        }
    })
})

var config = {
    apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
    databaseURL: "https://pbc-groupproject1.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database()

//add to leaderboard
var userName;//submit form name
var userScore; // time it took to finish
var categoryChoice; //what category did they play
database.ref().child(userName).set({
    Name: userName,
    Score: userScore,
    Category: categoryChoice
})


//pull leaderboard

database.orderByChild("Score").limitToFirst(10).once("value", function (snapshot) {
    snapshot.forEach(function (child) {
        var name = child.val().Name;
        var score = child.val().Score;
        var category = child.val().Category;
        $("#leaderboard").append("<tr><td>" + name + "</td><td>" + score + "</td><td>" + category + "</td><tr>");
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

$(document).on("")
var countries = {
    usa: {
        city: "New York City",
        country: "United States of America",
        questionType: "easy",
        easyLoc: "canada",
        easyTime: 4,
        hardLoc: "mexico",
        hardTime: 8
    },
    mexico: {
        city: "Mexico City",
        country: "Mexico",
        questionType: "hard",
        easyLoc: "venezuela",
        easyTime: 4,
        hardLoc: "argentina",
        hardTime: 8
    },
    canada: {
        city: "Montreal",
        country: "Canada",
        questionType: "easy",
        easyLoc: "venezuela",
        easyTime: 4,
        hardLoc: "norway",
        hardTime: 8
    },
    argentina: {
        city: "Buenos Aires",
        country: "Argentina",
        questionType: "hard",
        easyLoc: "morocco",
        easyTime: 4,
        hardLoc: "southAfrica",
        hardTime: 8
    },
    venezuela: {
        city: "Caracas",
        country: "Venezuela",
        questionType: "easy",
        easyLoc: "morocco",
        easyTime: 4,
        hardLoc: "southAfrica",
        hardTime: 8
    },
    norway: {
        city: "Oslo",
        country: "Norway",
        questionType: "hard",
        easyLoc: "morocco",
        easyTime: 4,
        hardLoc: "southAfrica",
        hardTime: 8
    },
    southAfrica: {
        city: "Cape Town",
        country: "South Africa",
        questionType: "hard",
        easyLoc: "yemen",
        easyTime: 4,
        hardLoc: "djibouti",
        hardTime: 8
    },
    morocco: {
        city: "Casablanca",
        country: "Morocco",
        questionType: "easy",
        easyLoc: "yemen",
        easyTime: 4,
        hardLoc: "malta",
        hardTime: 8
    },
    djibouti: {
        city: "Djibouti",
        country: "Djibouti",
        questionType: "hard",
        easyLoc: "turkmenistan",
        easyTime: 4,
        hardLoc: "india",
        hardTime: 8
    },
    yemen: {
        city: "Sana'a",
        country: "Yemen",
        questionType: "easy",
        easyLoc: "turkmenistan",
        easyTime: 4,
        hardLoc: "india",
        hardTime: 8
    },
    malta: {
        city: "Valletta",
        country: "Malta",
        questionType: "hard",
        easyLoc: "turkmenistan",
        easyTime: 4,
        hardLoc: "india",
        hardTime: 8
    },
    india: {
        city: "New Delhi",
        country: "India",
        questionType: "hard",
        easyLoc: "china",
        easyTime: 4,
        hardLoc: "indonesia",
        hardTime: 8
    },
    turkmenistan: {
        city: "Ashgabat",
        country: "Turkmenistan",
        questionType: "easy",
        easyLoc: "china",
        easyTime: 4,
        hardLoc: "Russia",
        hardTime: 8
    },
    indonesia: {
        city: "Jakarta",
        country: "Indonesia",
        questionType: "hard",
        easyLoc: "japan",
        easyTime: 4,
        hardLoc: "papuaNewGuinea",
        hardTime: 8
    },
    china: {
        city: "Beijing",
        country: "China",
        questionType: "easy",
        easyLoc: "japan",
        easyTime: 4,
        hardLoc: "papuaNewGuinea",
        hardTime: 8
    },
    russia: {
        city: "Moscow",
        country: "Russia",
        questionType: "hard",
        easyLoc: "japan",
        easyTime: 4,
        hardLoc: "papuaNewGuinea",
        hardTime: 8
    },
    papuaNewGuinea: {
        city: "Port Moresby",
        country: "Papua New Guinea",
        questionType: "hard",
        easyLoc: "Australia",
        easyTime: 4,
        hardLoc: "Australia",
        hardTime: 8
    },
    japan: {
        city: "Tokyo",
        country: "Japan",
        questionType: "easy",
        easyLoc: "Australia",
        easyTime: 4,
        hardLoc: "Australia",
        hardTime: 8
    },
    australia: {
        city: "Canberra",
        country: "Australia",
        questionType: "easy",
        easyLoc: "Australia",
        easyTime: 4,
        hardLoc: "Australia",
        hardTime: 8
    }
};
