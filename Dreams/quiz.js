//Question bank
var questionBank= [
    {
        question : 'Intro',
        option : ['consciousness','subconscious'],
        answer : 'subconscious'
    },
    {
        question : 'Shamate',
        option : ['consciousness','subconscious'],
        answer : 'consciousness'
    },
    {
        question : 'When I\'m lonely I dream of you',
        option : ['consciousness','subconscious'],
        answer : 'consciousness'
    },
    {
        question : 'The Narrator',
        option : ['consciousness','subconscious'],
        answer : 'consciousness'
    },
    {
        question : 'Abandoned',
        option : ['consciousness','subconscious'],
        answer : 'consciousness'
    },
    {
        question : 'The Toy',
        option : ['consciousness','subconscious'],
        answer : 'subconscious'
    },
    {
        question : 'The Experiment',
        option : ['consciousness','subconscious'],
        answer : 'subconscious'
    },
    {
        question : 'Melolagniaphilia',
        option : ['consciousness','subconscious'],
        answer : 'consciousness'
    },
    {
        question : 'On a mount Fuji',
        option : ['consciousness','subconscious'],
        answer : 'consciousness'
    },
    {
        question : 'Daesang',
        option : ['consciousness','subconscious'],
        answer : 'subconscious'
    },
    {
        question : 'In comparison',
        option : ['consciousness','subconscious'],
        answer : 'subconscious'
    },
    {
        question : 'The flood',
        option : ['consciousness','subconscious'],
        answer : 'subconscious'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Story '+(i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'black';
    }
    else{
        document.getElementById(e.id).style.background= 'black';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();