$(document).ready(function () {

    /* countries object with nested specific country
     sample country object
     var countries = {
        country object name: {
            city: "Name of city for visuals and weather api call"
            country: "Name of city for visuals and weather api call"
            questionType: "question difficulty of this country object"
            easyLoc: "the easy destination from this country object"
            easyTime: time in hours as a number to easyLoc
            hardLoc: "the hard destination from this country object"
            hardTime: time in hours as a number to hardLoc
        }
    }
    */
   //initializes the dropdown in the start modal
   $('select').formSelect();
    
    var countries = {
        usa: {
            city: "New York City",
            country: "United States of America",
            questionType: "easy",
            easyLoc: "canada",
            easyTime: 4,
            hardLoc: "mexico",
            hardTime: 8,
            imgLink: "assets/images/usa.jpg"
        },
        mexico: {
            city: "Mexico City",
            country: "Mexico",
            questionType: "hard",
            easyLoc: "venezuela",
            easyTime: 4,
            hardLoc: "argentina",
            hardTime: 8,
            imgLink: "assets/images/mexico.jpg"
        },
        canada: {
            city: "Montreal",
            country: "Canada",
            questionType: "easy",
            easyLoc: "venezuela",
            easyTime: 4,
            hardLoc: "norway",
            hardTime: 8,
            imgLink: "assets/images/canada.jpg"
        },
        argentina: {
            city: "Buenos Aires",
            country: "Argentina",
            questionType: "hard",
            easyLoc: "morocco",
            easyTime: 4,
            hardLoc: "southAfrica",
            hardTime: 8,
            imgLink: "assets/images/argentia.jpg"
        },
        venezuela: {
            city: "Caracas",
            country: "Venezuela",
            questionType: "easy",
            easyLoc: "morocco",
            easyTime: 4,
            hardLoc: "southAfrica",
            hardTime: 8,
            imgLink: "assets/images/venezuela.jpg"
        },
        norway: {
            city: "Oslo",
            country: "Norway",
            questionType: "hard",
            easyLoc: "morocco",
            easyTime: 4,
            hardLoc: "southAfrica",
            hardTime: 8,
            imgLink: "assets/images/norway.jpg"
        },
        southAfrica: {
            city: "Cape Town",
            country: "South Africa",
            questionType: "hard",
            easyLoc: "yemen",
            easyTime: 4,
            hardLoc: "djibouti",
            hardTime: 8,
            imgLink: "assets/images/southAfrica.jpg"
        },
        morocco: {
            city: "Casablanca",
            country: "Morocco",
            questionType: "easy",
            easyLoc: "yemen",
            easyTime: 4,
            hardLoc: "malta",
            hardTime: 8,
            imgLink: "assets/images/morocco.jpg"
        },
        djibouti: {
            city: "Djibouti",
            country: "Djibouti",
            questionType: "hard",
            easyLoc: "turkmenistan",
            easyTime: 4,
            hardLoc: "india",
            hardTime: 8,
            imgLink: "assets/images/djibouti.jpg"
        },
        yemen: {
            city: "Sana'a",
            country: "Yemen",
            questionType: "easy",
            easyLoc: "turkmenistan",
            easyTime: 4,
            hardLoc: "india",
            hardTime: 8,
            imgLink: "assets/images/yemen.jpg"
        },
        malta: {
            city: "Valletta",
            country: "Malta",
            questionType: "hard",
            easyLoc: "turkmenistan",
            easyTime: 4,
            hardLoc: "india",
            hardTime: 8,
            imgLink: "assets/images/malta.jpg"
        },
        india: {
            city: "New Delhi",
            country: "India",
            questionType: "hard",
            easyLoc: "china",
            easyTime: 4,
            hardLoc: "indonesia",
            hardTime: 8,
            imgLink: "assets/images/india.jpg"
        },
        turkmenistan: {
            city: "Ashgabat",
            country: "Turkmenistan",
            questionType: "easy",
            easyLoc: "china",
            easyTime: 4,
            hardLoc: "Russia",
            hardTime: 8,
            imgLink: "assets/images/turkmenistan.jpg"
        },
        indonesia: {
            city: "Jakarta",
            country: "Indonesia",
            questionType: "hard",
            easyLoc: "japan",
            easyTime: 4,
            hardLoc: "papuaNewGuinea",
            hardTime: 8,
            imgLink: "assets/images/indonesia.jpg"
        },
        china: {
            city: "Beijing",
            country: "China",
            questionType: "easy",
            easyLoc: "japan",
            easyTime: 4,
            hardLoc: "papuaNewGuinea",
            hardTime: 8,
            imgLink: "assets/images/china.jpg"
        },
        russia: {
            city: "Moscow",
            country: "Russia",
            questionType: "hard",
            easyLoc: "japan",
            easyTime: 4,
            hardLoc: "papuaNewGuinea",
            hardTime: 8,
            imgLink: "assets/images/russia.jpg"
        },
        papuaNewGuinea: {
            city: "Port Moresby",
            country: "Papua New Guinea",
            questionType: "hard",
            easyLoc: "australia",
            easyTime: 4,
            hardLoc: "australia",
            hardTime: 8,
            imgLink: "assets/images/papuaNewGuinea.jpg"
        },
        japan: {
            city: "Tokyo",
            country: "Japan",
            questionType: "easy",
            easyLoc: "australia",
            easyTime: 4,
            hardLoc: "australia",
            hardTime: 8,
            imgLink: "assets/images/japan.jpg"
        },
        australia: {
            city: "Canberra",
            country: "Australia",
            questionType: "easy",
            easyLoc: "australia",
            easyTime: 4,
            hardLoc: "australia",
            hardTime: 8,
            imgLink: "assets/images/australia.jpg"
        },
        key: function (n) {
            return this[Object.keys(this)[n]];
        }
    };

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
    var easyQuestionButtons = [];
    var hardQuestionButtons = [];
    var easyResponse
    var hardResponse

    var easyOption
    var hardOption
    var card1
    var card2

    function getEasyQuestion() {
        var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categorie + "&difficulty=easy&type=multiple";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            easyResponse = response
            makeEasyQuestionButtons();
            renderEasyQuestionButtons();
        });
    };

    //question functions
    function makeEasyQuestionButtons() {
        easyQuestionText = $("<h4 id='easyQuestionText'>").html(easyResponse.results[0].question);
        easyOption1 = $("<button id='easyOption1'>").html(easyResponse.results[0].correct_answer).addClass("option correct");
        easyQuestionButtons[0] = easyOption1;
        easyOption2 = $("<button id='easyOption2'>").html(easyResponse.results[0].incorrect_answers[0]).addClass("option incorrect");
        easyQuestionButtons[1] = easyOption2;
        easyOption3 = $("<button id='easyOption3'>").html(easyResponse.results[0].incorrect_answers[1]).addClass("option incorrect");
        easyQuestionButtons[2] = easyOption3;
        easyOption4 = $("<button id='easyOption4'>").html(easyResponse.results[0].incorrect_answers[2]).addClass("option incorrect");
        easyQuestionButtons[3] = easyOption4;
        easyQuestionButtons.sort(function (a, b) { return 0.5 - Math.random() });
    };

    function renderEasyQuestionButtons() {
        $("#cardEasyQuestion").replaceWith(easyQuestionText, "<br>", easyQuestionButtons[0], "<br>", easyQuestionButtons[1], "<br>", easyQuestionButtons[2], "<br>", easyQuestionButtons[3]);
    };

    function getHardQuestion() {
        var queryURL = "https://opentdb.com/api.php?amount=1&categorie=" + categorie + "&difficulty=hard&type=multiple";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            hardResponse = response
            makeHardQuestionButtons();
            renderHardQuestionButtons();
        });
    };

    //question functions
    function makeHardQuestionButtons() {
        hardQuestionText = $("<h4 id='hardQuestionText'>").html(hardResponse.results[0].question);
        hardOption1 = $("<button id='hardOption1'>").html(hardResponse.results[0].correct_answer).addClass("option correct");
        hardQuestionButtons[0] = hardOption1;
        hardOption2 = $("<button id='hardOption2'>").html(hardResponse.results[0].incorrect_answers[0]).addClass("option incorrect");
        hardQuestionButtons[1] = hardOption2;
        hardOption3 = $("<button id='hardOption3'>").html(hardResponse.results[0].incorrect_answers[1]).addClass("option incorrect");
        hardQuestionButtons[2] = hardOption3;
        hardOption4 = $("<button id='hardOption4'>").html(hardResponse.results[0].incorrect_answers[2]).addClass("option incorrect");
        hardQuestionButtons[3] = hardOption4;
        hardQuestionButtons.sort(function (a, b) { return 0.5 - Math.random() });
    };

    function renderHardQuestionButtons() {
        $("#cardHardQuestion").replaceWith(hardQuestionText, "<br>", hardQuestionButtons[0], "<br>", hardQuestionButtons[1], "<br>", hardQuestionButtons[2], "<br>", hardQuestionButtons[3]);
    };

    function NewCards() {
        $("#questionText").remove();
        $(".option").remove();
        cardEasyDestination();
        cardHardDestination();
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

    function cardEasyDestination() {
        easyOption = currentLocation.easyLoc;
        card1 = countries[easyOption].city + ", " + countries[easyOption].country;
        $(".card1").text(card1);
        $("#card1img").attr("src", countries[easyOption].imgLink);
        getEasyQuestion();
    };

    function cardHardDestination() {
        hardOption = currentLocation.hardLoc;
        card2 = countries[hardOption].city + ", " + countries[hardOption].country;
        $(".card2").text(card2);
        $("#card2img").attr("src", countries[hardOption].imgLink);
        getHardQuestion();
    };

    $(document).on("click", ".card", function () {
        if ($(this).attr("id", "card1")) {
            currentLocation = countries[easyOption];
            displayLocation = card1;
            console.log(this);
            console.log("going to the easy place");
        } else {
            currentLocation = countries[hardOption];
            displayLocation = card2;
            console.log(this);
            console.log("going to the hard place");
        }

    });
    
    $(document).on("click", ".correct", function () {
        $("#current").text(displayLocation);
        cardEasyDestination();
        cardHardDestination();
        NewCards();
    })


    $(document).on("click", ".incorrect", function () {
        // Show other question
    })

    cardEasyDestination();
    cardHardDestination();
    getWeather();

    var config = {
        apiKey: "AIzaSyDhuFW_sSUhJhs9WifwBaQK1RpzFdG04uI",
        databaseURL: "https://pbc-groupproject1.firebaseio.com/"
    };
    firebase.initializeApp(config);
    var database = firebase.database()
    var playerChoices = function () { //on click to submit player name
        if (userName === undefined) {
            userName = $(nameInput).val().trim();
            userName = JSON.stringify(userName);
        }
        categoryChoice = $(categoryInput)
    }

    $("#submit").on("click", playerChoices)

    //add to firebase leaderboard
    var playerToLeaderboard = function () {
        database.ref().child(userName).set({
            Name: userName,
            Score: userScore,
            sortBy: userScore * -1,
            Category: categoryChoice
        })
    }

    //pull leaderboard for display at the end of game
    var getLeaderboard = function () {
        //add to leaderboard
        database.orderByChild("sortBy").limitToFirst(10).once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                var name = child.val().Name;
                var score = child.val().Score;
                var category = child.val().Category;
                $("#leaderboard").append("<tr><td>" + name + "</td><td>" + score + "</td><td>" + category + "</td><tr>");
            })
        });
        $("#leaderboard").append("<hr><tr><td>" + userName + "</td><td>" + TOTALTIME + "</td><td>" + categoryChoice + "</td><tr>")
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
