// set query selectors
var navContainer = document.querySelector('.nav-container');
var divTags = document.querySelector('#question-container');
var questions = document.querySelector('#questions');
var buttons = document.querySelectorAll('.btn');
var sButton = document.querySelector('#start-btn');
var timeEl = document.querySelector('.time');
var headerEl = document.querySelector('#tittle')
var header = document.createElement("h1");
header.textContent = "Mini Quiz";
// Style the appended h1
header.setAttribute("style", "display:flex; font-size: 60px; font-weight: bold; text-decoration: underLine;");
// append it to the doc.body
headerEl.append(header);

var questions = [{
    question: "What does var stand for?",
    choices: ["variable", "varicosity", "variances", "vargueno"],
    answer: "variable",
}, {
    //make 4 question in the same format 
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
    choices: ["element", "img", "<p>", "all of the above"],
    answer: "all of the above",
}
]

var index = 0

function displayQuestions() {
divTags.innerHTML = `
<div id="question">${questions[index].question}</div>
<div id="answer-button" class="btn-grid">
    <button class="btn">${questions[index].choices[0]}</button>
    <button class="btn">${questions[index].choices[1]}</button>
    <button class="btn">${questions[index].choices[2]}</button>
    <button class="btn">${questions[index].choices[3]}</button>
</div>
`
var btnEl = document.querySelectorAll('.btn')
for (i=0; i< btnEl.length; i++){
    btnEl[i].addEventListener('click', nextquestion)
}
}
function nextquestion(){
    var userChoice = this.textContent
    var answer = questions[index].answer
    if (userChoice=== answer){
        alert('correct')
    } else{
        alert('wrong')
    }
    index++
    if (index< questions.length){
        displayQuestions()
    }
}

sButton.addEventListener('click', startGame);


// Game Timer
var secondsLeft = questions.length * 15;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
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

