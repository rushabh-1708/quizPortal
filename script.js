const quizDB = [
    {
        question:"What is 2+2?",
        a :"2",
        b: "3",
        c: "4",
        d:"5",
        ans : "ans3"
    },
    {
        question:"What is 2+0?",
        a :"2",
        b: "3",
        c: "4",
        d:"5",
        ans : "ans1"
    },
    {
        question:"What is 2+1?",
        a :"2",
        b: "3",
        c: "4",
        d:"5",
        ans : "ans2"
    },
    {
        question:"What is 2+3?",
        a :"2",
        b: "3",
        c: "4",
        d:"5",
        ans : "ans4"
    },
    {
        question:"What is 2+2?",
        a :"2",
        b: "3",
        c: "4",
        d:"5",
        ans : "ans3"
    }   
];


  


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

let quesCount= 0 ;
let score = 0 ;


const loadQuestion = () => {
    question.innerText = quizDB[quesCount].question;
    option1.innerText = quizDB[quesCount].a;
    option2.innerText = quizDB[quesCount].b;
    option3.innerText = quizDB[quesCount].c;
    option4.innerText = quizDB[quesCount].d;
};

loadQuestion();

const getAnswer = () => {
    let ans;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            ans =curAnsElem.id;
        }
    });
    return ans;
};

submit.addEventListener('click', () => {
    
    const checkedAns=getAnswer();

    if(checkedAns == quizDB[quesCount].ans){
        score++;
    };

    quesCount++;

    const deselect=()=>{
        answers.forEach((curAnsElem)=> curAnsElem.checked=false)
    }

    deselect();

    if(quesCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You scored ${score} out of ${quizDB.length}</h3>
        <button class="btn" onClick="location.href='start.html'">Try Again!</button>
        `;

        showScore.classList.remove('scoreArea');

    }
});
