const quizData = [{
    question: "What is a full form of HTML?",
    a: "Hey Taxt Markup Language",
    b: "Hyper Text Markup Language",
    c: "High Test Markup Language",
    d: "Hyper Tech Mixing Language",
    correct: "b",
},
{
    question: "What is a full form of CSS?",
    a: "Cascading Style Shifting",
    b: "Cascading Style Sheet",
    c: "Hyper Text Markup Language",
    d: "Computer Style Sheet",
    correct: "b",
},
{
    question: "What is a full form of JS?",
    a: "Joint Source",
    b: "Hyper Text Markup Language",
    c: "Java Script",
    d: "Cascading Style Sheet",
    correct: "c",
},
{
    question:"Independace Day Off Pakistan?",
    a: "14 Augast",
    b: "15 Augast",
    c: "16 Augast",
    d: "13 Augast",
    correct: "a",
},
{
    question: "Independace Day Off India?",
    a: "17 Augast",
    b: "16 Augast",
    c: "14 Augast",
    d: "15 Augast",
    correct: "d",
},
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
