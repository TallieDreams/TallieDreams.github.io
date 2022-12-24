    var questions = [
        {
            id: 1,
            question: "Intro",
            answer: "subconscious",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 2,
            question: "Shamate",
            answer: "consciousness",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 3,
            question: "When I'm lonely I dream of you",
            answer: "consciousness",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 4,
            question: "Narrator",
            answer: "consciousness",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 5,
            question: "Abandoned",
            answer: "consciousness",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 6,
            question: "Toys",
            answer: "subconscious",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 7,
            question: "Experiment",
            answer: "subconscious",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 8,
            question: "Melolagniaphilia",
            answer: "consciousness",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 9,
            question: "On Mount Fuji",
            answer: "consciousness",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 10,
            question: "Daesang",
            answer: "subconscious",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 11,
            question: "In comparison",
            answer: "subconscious",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
        {
            id: 12,
            question: "The flood",
            answer: "subconscious",
            options: [
            "consciousness",
            "subconscious"
            ]
        },
    ];

let question_count = 0;
let points = 0;

window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second] = questions[count].options;

    question.innerHTML = `<h2>Story ${count+1}. ${questions[count].question}</h2>
    <ul class = "option_group">
    <li class="options">${first}</li>
    <li class="options">${second}</li>
    </ul>`;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelector("li.option");
    for(let i = 0; i<option.length; i++) {
        option[i].onclick = function(){
            for(let i=0; i<option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next() {

    if(i<questions.length-1) {
        i=i+1;
        show();
        }
    else{
        points.innerHTML= score+ '/'+ questions.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
next.addEventListener('click', next);