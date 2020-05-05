var quizWrapper = document.getElementById("wrapper");
var number = document.getElementById("number");
var score = document.getElementById("score");
var questionElem = document.getElementById("question");
var button = document.getElementById("button");
var introDiv = document.getElementById("intro-div");
var start = document.getElementById("start");
var intro = document.getElementById("intro");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var stats = document.getElementById("stats");
var optionDiv = document.getElementById("option-div");
var optionss = document.querySelectorAll(".options");
var finish = document.getElementById("finish");
var postQuiz = document.getElementById("post-quiz");
var finalText = document.getElementById("final-text");
var finalScore = document.getElementById("final-score");
var restart = document.getElementById("restart");
var userScore = 0;
var counter = 2;
var questionCounter = 1;


var questions = [
    {
        question: "Question 1",
        options:
        {
            option1: "This is option 1 of 1",
            option2: "This is option 2 of 1",
            option3: "This is option 3 of 1",
            option4: "This is option 4 of 1",
            correctAns: "This is option 2 of 1"
        }
    },
    {
        question: "Question 2",
        options:
        {
            option1: "This is option 1 of 2",
            option2: "This is option 2 of 2",
            option3: "This is option 3 of 2",
            option4: "This is option 4 of 2",
            correctAns: "This is option 4 of 2"
        }
    },
    {
        question: "Question 3",
        options:
        {
            option1: "This is option 1 of 3",
            option2: "This is option 2 of 3",
            option3: "This is option 3 of 3",
            option4: "This is option 4 of 3",
            correctAns: "This is option 4 of 3"
        }
    },
    {
        question: "Question 4",
        options:
        {
            option1: "This is option 1 of 4",
            option2: "This is option 2 of 4",
            option3: "This is option 3 of 4",
            option4: "This is option 4 of 4",
            correctAns: "This is option 1 of 4"
        }
    },
    {
        question: "Question 5",
        options:
        {
            option1: "This is option 1 of 5",
            option2: "This is option 2 of 5",
            option3: "This is option 3 of 5",
            option4: "This is option 4 of 5",
            correctAns: "This is option 2 of 5"
        }
    }
];

//to reverse changes for next round
function reverseChanges() {
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;

    option1.style.backgroundColor = "rgba(85,159,247,.07)";
    option2.style.backgroundColor = "rgba(85,159,247,.07)";
    option3.style.backgroundColor = "rgba(85,159,247,.07)";
    option4.style.backgroundColor = "rgba(85,159,247,.07)";

    option1.style.color = "black";
    option2.style.color = "black";
    option3.style.color = "black";
    option4.style.color = "black";

    button.style.visibility = "hidden";

}

start.addEventListener("click", populateDocument);

function populateDocument() {
    stats.style.visibility = "visible";
    question.style.visibility = "visible";
    optionDiv.style.visibility = "visible";
    start.style.visibility = "hidden";
    intro.style.visibility = "hidden";
    introDiv.style.display = "none";

    questionElem.textContent = questions[0].question;
    option1.textContent = questions[0].options.option1;
    option2.textContent = questions[0].options.option2;
    option3.textContent = questions[0].options.option3;
    option4.textContent = questions[0].options.option4;

    optionDiv.addEventListener("click", optionClick);

}



function optionClick() {
    var target = event.target;
    if(questionCounter < 5) {
        button.style.visibility = "visible";
    }
    if(questionCounter === 5) {
        finish.style.visibility = "visible";
    }
    

    if(target.classList == "options"){
        if(target.textContent == questions[questionCounter-1].options.correctAns) {
            console.log("correct");
            target.style.backgroundColor = "#42C16D";
            target.style.color = "white";
            userScore++;
            score.textContent = "Score: " + userScore + "/5";
        }
        else {
            console.log("Wrong!!");
            target.style.backgroundColor = "#F75454";
            target.style.color = "white";
            for(var i=0; i<4; i++) {
                if(optionDiv.children[i].textContent == questions[questionCounter-1].options.correctAns) {
                    if(optionDiv.children[i] != target) {
                        optionDiv.children[i].style.backgroundColor = "#42C16D";
                        optionDiv.children[i].style.color = "white";
                    }
                }
            }
        }
    }
   option1.disabled = true;
   option2.disabled = true;
   option3.disabled = true;
   option4.disabled = true;
}

button.addEventListener("click", next);

function next() {
    if(counter <= 5) {
        number.textContent = counter + "/5";
        reverseChanges();
    }
    counter++;

    questionElem.textContent = questions[questionCounter].question;
    option1.textContent = questions[questionCounter].options.option1;
    option2.textContent = questions[questionCounter].options.option2;
    option3.textContent = questions[questionCounter].options.option3;
    option4.textContent = questions[questionCounter].options.option4;
    questionCounter++;

    optionDiv.addEventListener("click", optionClick);
}

if(questionCounter === 5) {
    option1.addEventListener("click", displayfinish);
    option2.addEventListener("click", displayfinish);
    option3.addEventListener("click", displayfinish);
    option4.addEventListener("click", displayfinish);
}

function displayfinish() {
    button.style.visibility = "hidden";
    finish.style.visibility = "visible";
}


finish.addEventListener("click", displayResult);

function displayResult() {
    stats.style.visibility = "hidden";
    question.style.visibility = "hidden";
    optionDiv.style.visibility = "hidden";
    finish.style.visibility = "hidden";

    postQuiz.style.visibility = "visible";

    finalText.style.visibility = "visible";
    finalScore.style.visibility = "visible";
    restart.style.visibility = "visible";

    finalScore.textContent = userScore + "/5";
}

restart.addEventListener("click", function() {
    window.location.reload(true);
});