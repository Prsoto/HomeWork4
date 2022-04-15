// First we define the variable questions in which we define not only the question to be display but also the answers and the correct answer*/
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Who invented JavaScript?",
        choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
];


var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");


var startDiv = document.getElementById("startQuiz");
var startQuizBtn = document.getElementById("startQuizBtn");


var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerMessage");

/* Variable used to show the final results in div*/
var summary = document.getElementById("results");

/*Variables used for input the initials to be store */
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");

/*Variables used to display highScoresSection and finalScore */
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

/*Variables used for Buttons and enable actions for them */

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");


/* This questionIndex variable will be used to move to different types of questions inside the array of questions*/
var questionIndex = 0
/* This Variable is a counter for the correct Answers */
var correctAns = 0





/* Enable the Star button to initiate the Quiz */

startQuizBtn.addEventListener("click", newQuiz);

/* Enable the Choice  buttons during  the Quiz */ 
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);


/* Enable Submit Button to store results */
submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

/* Enable ViewHighScore  Button in the Nav to go to highscores-quiz div */
viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

/* Enable goBackBtn from div highScoreSection */

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
    

});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});

/* Once its Click The Start Button this function starts the timer for the test*/
//var totalTime = 60;
function newQuiz() {
   
    questionIndex = 0;
    totalTime = 60;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";
    timeLeft.style.display = "block";
    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    /*
    timer.style.display = "block";
    timesUp.style.display = "none";
    */
    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            gameOver();
        }
    },1000);
 /* once the timer is set this functions invokes the startQuiz function to display questions*/
    startQuiz ();
};
 /* This startQuiz is the function to Use to begin showing question */

 function startQuiz (){
    nextQuestion()
};

  /* This function is to get from the question defined as variable to be display in order to select*/
function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

/* The following Functions get the chosen option from de question display and invoke the CheckAnswer Function*/

function chooseA() { validateAnswer(0); }
function chooseB() { validateAnswer(1); }
function chooseC() { validateAnswer(2); }
function chooseD() { validateAnswer(3); }

 /* Validate Answer Function for the selected option */

 function validateAnswer(answer) {

    var lineBreak = document.getElementById("spaceBrake");
    lineBreak.style.display = "block";
    answerMessage.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // If we select the correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        //  Otherwise is the wrong answer and will deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }
        // Then we sum 1 to the questionIndex variable to select the next questions in the array
    questionIndex++;
    // also we control that if the questionIndex is less than questions.length there are still questions to display */
    if (questionIndex < questions.length) {
        nextQuestion();
    // otherwise will finish the test
    } else {
        // if no more question, run game over function
        gameOver();
    }

 }
/* This function will be called when the time is up or questions are depleted*/
 
 function gameOver(){
     /* first set the result div to display the message*/
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timesUp.style.display = "block";
    timeLeft.style.display = "none";
   

    // show final score and display the message in the div Result
    finalScore.textContent = correctAns;
}


// checked if  initial are there  and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // stop function is initial is blank
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 
    
    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    summary.style.display = "none";
    timesUp.style.display = "none";
    highScoreSection.style.dispay = "block";
  
   // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
     scoresArray = [];}
    else {
     scoresArray = JSON.parse(savedHighScores)
    }

     var userScore = {
     initials: initialInput.value,
     score: finalScore.textContent
    };

    /* For internal checking that is being local stored the highscores */
 console.log(userScore);
    
 scoresArray.push(userScore);

 // stringify array in order to store in local
 var scoresArrayString = JSON.stringify(scoresArray);
 window.localStorage.setItem("high scores", scoresArrayString);
 
 // show current highscores
 showHighScores();
}


// function to show high scores when clicking the View High HighScores button in NAV or from the results of submit the initials with high Score*/
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}
