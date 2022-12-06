// set query selectors
var navContainer = document.querySelector('.nav-container');
var divTags = document.querySelector('#question-container');
var questions = document.querySelector('#questions');
var buttons = document.querySelectorAll('.btn');
var sButton = document.querySelector('#start-btn');
var timeEl = document.querySelector('.time');
var headerEl = document.querySelector('#tittle')
var header = document.createElement("h1");
var timerInterval;

header.textContent = "Mini Quiz";
// Style the appended h1
header.setAttribute("style", "display:flex; font-size: 60px; font-weight: bold; text-decoration: underLine;");

// append it to the doc.body
headerEl.append(header);

// questions for the quiz
var questions = [{
    question: "What does var stand for?",
    choices: ["variable", "varicosity", "variances", "vargueno"],
    answer: "variable",
}, {
    //make 4 question in the same format. done
    question: "What does the 'click' refer to?",
    choices: ["the page", "the img", "the screen", "the Button"],
    answer: "the Button",

}, {
    question: "what is setAttibute a",
    choices: ["function", "element", "method", "property"],
    answer: "method",
},
{
    question: "What can a querySelector grab from HTML?",
    choices: ["element", "img", "p", "all of the above"],
    answer: "all of the above",
}
]

var currentQuestionIndex = 0

function displayQuestions() {
divTags.innerHTML = `
<div id="question">${questions[currentQuestionIndex].question}</div>
<div id="answer-button" class="btn-grid">
    <button class="btn">${questions[currentQuestionIndex].choices[0]}</button>
    <button class="btn">${questions[currentQuestionIndex].choices[1]}</button>
    <button class="btn">${questions[currentQuestionIndex].choices[2]}</button>
    <button class="btn">${questions[currentQuestionIndex].choices[3]}</button>
</div>
`
var btnEl = document.querySelectorAll('.btn')
for (i=0; i< btnEl.length; i++){
    btnEl[i].addEventListener('click', nextquestion)
}
}

function nextquestion(){
    var userChoice = this.textContent
    var answer = questions[currentQuestionIndex].answer
    if (userChoice=== answer){
        alert('correct')
    } else{
        alert('wrong')
    }
    console.log(currentQuestionIndex);
    currentQuestionIndex++
    console.log(currentQuestionIndex);
    console.log(questions.length);
    if (currentQuestionIndex< questions.length){
        displayQuestions()
    } else {
        // hide the questions
               // displayQuestions().classList.add('hide')
        // displayQuestions() = hide
        // stop the timer, done
        clearInterval(timerInterval)
        // give them text box and submit button
        // show submit button 
    }
}



// add event listener for submit button
// grab the response and grab the score put it local storage 


// final score and there name 

sButton.addEventListener('click', startGame);


// Game Timer
var secondsLeft = questions.length * 15;

function setTime() {
    // Sets interval in variable
     timerInterval = setInterval(function () {
        if (secondsLeft > 1) {
            timeEl.textContent = secondsLeft + " Until Game Over";
            secondsLeft--;
        } else {
            timeEl.textContent = 'Game Over';
        }

    }, 1000);
}


function startGame() {
    setTime();
    sButton.classList.add('hide')
    divTags.classList.remove('hide')
    currentQuestionIndex = 0;
    displayQuestions()
    //    questionContainerElementList.remove('hide')


}

// Action to be performed on click store in named function
function showResponse(event) {
    // Prevent default action
    event.preventDefault();
    console.log(event);
    var response = "Thank you for your submission " + ".";
    submissionResponseEl.textContent = response;
}


function saveScore(event) {
    event.preventDefault();
    var initials = InputEvent.value
    var newScore = {
        score: timeleft,
        initials: initials
    }

    scoreArrey.push(newScore)

    localStorage.setItem("high score", JSON.stringify(scoreArrey))

    scoreEl.textContent = "high score" +JSON.stringify(scoreArrey)

    for (var i=0; i < scoreArrey.length; i++) {
        formEl.append(scorelist);
        console.log(scorelist)
    }
}

