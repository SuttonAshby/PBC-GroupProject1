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


        var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categorie + "&difficulty=" + difficulty + "&type=multiple";
    }
  

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

  var userName = undefined; //user name get from opening submit form. Make input required
  var TOTALTIME; // starts at zero ends at time value to complete game 
  var categoryChoice; //user category choice get from opening submit form. Make input required

  // random locations array to be sent to if there is bad weather
  var randLocs = ["argentina", "venezuela", "norway", "southAfrica", "morocco", "djibouti",
    "yemen", "malta", "india", "turkmenistan", "indonesia", "china", "russia"]

  //open trivia api call
  var categorie = "10";
  var difficulty = "hard";
  var questionButtons = [];
  var qResponse

  var easyOption
  var hardOption
  var card1
  var card2

  var getQuestion = function () {
    var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categorie + "&difficulty=" + difficulty + "&type=multiple";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      qResponse = response
    });
  };

  getQuestion();

  //question functions
  function makeQuestionButtons() {
    questionText = $("<h4 id='questionText'>").html(qResponse.results[0].question);
    option1 = $("<button id='option1'>").html(qResponse.results[0].correct_answer).addClass("option correct");
    questionButtons[0] = option1;
    option2 = $("<button id='option2'>").html(qResponse.results[0].incorrect_answers[0]).addClass("option incorrect");
    questionButtons[1] = option2;
    option3 = $("<button id='option3'>").html(qResponse.results[0].incorrect_answers[1]).addClass("option incorrect");
    questionButtons[2] = option3;
    option4 = $("<button id='option4'>").html(qResponse.results[0].incorrect_answers[2]).addClass("option incorrect");
    questionButtons[3] = option4;
    questionButtons.sort(function (a, b) { return 0.5 - Math.random() });
  };

  function renderQuestionButtons() {
    /* $(".card").remove(); */
    $(".cardQuestion").replaceWith(questionText, "<br>", questionButtons[0], "<br>", questionButtons[1], "<br>", questionButtons[2], "<br>", questionButtons[3]);
  };

  $(document).on("click", "#card1", function () {
    makeQuestionButtons();
    renderQuestionButtons();
  });

  $(document).on("click", "#card2", function () {
    makeQuestionButtons();
    renderQuestionButtons();
  });

  function NewCards() {
    $("#questionText").remove();
    $(".option").remove();
    $("#card1").replaceWith(card1);
    console.log("card1 " + card1);
    $("#card2").replaceWith(card2);
    console.log("card2 " + card2);
  }

  // Calling weather API, getting current conditions in city user is going to, and changing TOTALTIME according to degree of weather
  function getWeather() {
    var city = currentLocation.country + "/" + currentLocation.city + ".json";
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
      $("#weather").text("Current weather: " + weather);
    });
  }

  $(document).on("click", ".correct", function () {
    var city = currentLocation.country + "/" + currentLocation.city + ".json";
    console.log(city);
    getWeather();
      // Changing TOTALTIME based on current weather condition of user travel location
      if ((weather === "Clear") || (weather === "Partly Cloudy") || (weather === "Scattered Clouds")) {
        TOTALTIME = TOTALTIME - 2; // Take 2 hours off total time for good weather travel
      } else if ((weather === "Squalls") || (weather === "Small Hail") || (weather === "Funnel Cloud")) {
        // Go to random location for really bad weather
      } else {
        TOTALTIME = TOTALTIME + 2; // Add 2 hours to total time for bad weather travel
      }
  })

  //returns a random location from the array to be sent to due to bad weather
  var goRand = function () {
    return randLocs[Math.floor(Math.random() * randLocs.length)]
  }

  //when reaching final destination
  var endgame = function () {
    playerToLeaderboard() //push player info to leaderboard
    getLeaderboard() //get leaderboard for display
    //restart game button
  }
  var currentLocation = countries.key(0);
  var displayLocation = currentLocation.city + ", " + currentLocation.country;
  $("#current").text(displayLocation);

  function cardDestination() {
    easyOption = currentLocation.easyLoc;
    hardOption = currentLocation.hardLoc;

    card1 = countries[easyOption].city + ", " + countries[easyOption].country;
    card2 = countries[hardOption].city + ", " + countries[hardOption].country;

    $(".card1").text(card1);
    $(".card2").text(card2);

    $(document).on("click", ".card", function () {
      if ($(this).attr("id", "card1")) {
        currentLocation = countries[easyOption];
        displayLocation = card1;
      } else {
        currentLocation = countries[hardOption];
        displayLocation = card2;
      }
    });
  };

  $(document).on("click", ".correct", function () {
    $("#current").text(displayLocation);
    cardDestination();
    NewCards();
    getQuestion();
  })

  $(document).on("click", ".incorrect", function () {
    // Show other question
  })

  cardDestination();
  getWeather();

  var config = {
    apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
    databaseURL: "https://pbc-groupproject1.firebaseio.com/"
  };
  firebase.initializeApp(config);
  var database = firebase.database()//on click to submit player name
  var playerChoices = function () {
    if (userName === undefined) {
      userName = $(nameInput).val().trim();
      userName = JSON.stringify(userName);
    }
    categoryChoice = $(categoryInput)
  }
  $("#submit").on("click", playerChoices)

  //add to firebase leaderboard
  var playerToLeaderboard = function () {
    // time it took to finish
    database.ref().child(userName).set({
      Name: userName,
      Score: userScore,
      Category: categoryChoice
    })
  }

  //pull leaderboard for display at the end of game
  var getLeaderboard = function () {
    //add to leaderboard
    database.orderByChild("Score").limitToFirst(10).once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        var name = child.val().Name;
        var score = child.val().Score;
        var category = child.val().Category;
        $("#leaderboard").append("<tr><td>" + name + "</td><td>" + score + "</td><td>" + category + "</td><tr>");
      })
    });
  };

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
  });
});
