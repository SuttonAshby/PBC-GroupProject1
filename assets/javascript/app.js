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
    var categorie = $(this).attr("data-name");
    var difficulty = $(this).attr("data-name");

    var getQuestions = function () {
        var queryURL = "https://opentdb.com/api.php?amount=1&" + categorie + "&" + difficulty;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            //question functions
            function makeQuestionButtons() {
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