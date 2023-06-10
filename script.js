function Start(){
 document.getElementById("box").style.display = "block";
}
function exit(){
 document.getElementById("box").style.display = "none";
}
function restart(){
 document.getElementById("quiz").style.display = "block"
}

const quizData = [
 {
  question: "What does HTML stand for?",
  a: "Home Tool markup language",
  b: "Hyperlink and Text markup language",
  c: "Hyper Text markup language",
  d: "Hyper Tool markup language",
  correct: "c",
 },
 {
  question: "What does CSS stand for?",
  a: "Cascading Style Sheet ",
  b: "Central Style Sheet",
  c: "Cascading Simple Sheet",
  d: "Cars SUV`s Sailboats",
  correct: "a",
 },
 {
  question: "The correct place to refer to an external sheet in html file?",
  a: "In <body> tag",
  b: "In <head> tag",
  c: "In the end of document",
  d: "none",
  correct: "b",
 },
 {
  question: "Which HTML tag is used to define an internal style sheet?",
  a: "<JavaScript>",
  b: "<style>",
  c: "<css>",
  d: "none",
  correct: "b",
 },
 {
  question: "All are JavaScript Data Types Except?",
  a: "String",
  b: "Number",
  c: "Booleans",
  d: "Array",
  correct: "d",
 }
 // {
 //  question: "What does HTML stand for?",
 //  a: "Home Tool markup language",
 //  b: "Hyperlink and Text markup language",
 //  c: "Hyper Text markup language",
 //  d: "Hyper Tool markup language",
 //  correct: "c",
 // },
 // {
 //  question: "What does HTML stand for?",
 //  a: "Home Tool markup language",
 //  b: "Hyperlink and Text markup language",
 //  c: "Hyper Text markup language",
 //  d: "Hyper Tool markup language",
 //  correct: "c",
 // },
 // {
 //  question: "What does HTML stand for?",
 //  a: "Home Tool markup language",
 //  b: "Hyperlink and Text markup language",
 //  c: "Hyper Text markup language",
 //  d: "Hyper Tool markup language",
 //  correct: "c",
 // },
 // {
 //  question: "What does HTML stand for?",
 //  a: "Home Tool markup language",
 //  b: "Hyperlink and Text markup language",
 //  c: "Hyper Text markup language",
 //  d: "Hyper Tool markup language",
 //  correct: "c",
 // },
 // {
 //  question: "What does HTML stand for?",
 //  a: "Home Tool markup language",
 //  b: "Hyperlink and Text markup language",
 //  c: "Hyper Text markup language",
 //  d: "Hyper Tool markup language",
 //  correct: "c",
 // }
];

const quiz = document.getElementById("quiz");
const resultEle = document.getElementById("result");
const answerEls = document.querySelectorAll('.answer');
const labelEls = document.querySelectorAll('.op_label');
const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const scoreEle = document.getElementById("score")
const reStart = document.getElementById("continue")
let currentQtn = 0;
let answered = 0;
let userSelected = {

} 

loadQuiz()

function loadQuiz(){
 questionEle.innerText = quizData[currentQtn].question;
 a_text.innerText = quizData[currentQtn].a;
 b_text.innerText = quizData[currentQtn].b;
 c_text.innerText = quizData[currentQtn].c;
 d_text.innerText = quizData[currentQtn].d;
 deSelectAnswer()
 if(userSelected[currentQtn]){
  let selected = userSelected[currentQtn];
  document.getElementById(selected).checked = true
 }
 if(currentQtn == quizData.length-1){
  nextBtn.style.display = "none";
  submitBtn.style.display = "block";
 }
}

function deSelectAnswer(){
 answerEls.forEach(
  (answerEle)=>{
   answerEle.checked = false
  }
 )
}

nextBtn.addEventListener(
 'click', () =>{
  let answer = getSelected();
  if(answer){
   if (answer == quizData[currentQtn].correct){
    answered++
   }
   currentQtn++
   if(currentQtn<quizData.length){
    loadQuiz()
   }
  }
 }
)

prevBtn.addEventListener(
 'click', ()=>{
  currentQtn--
  if(currentQtn<quizData.length){
   loadQuiz()
  }
 }
)

submitBtn.addEventListener(
 'click', ()=>{
  if(getSelected()){
   quiz.style.display = "none";
   resultEle.style.display = "block";
   scoreEle.innerText = answered + "/" + quizData.length + " question answered correctly.";
  }
 }
)

function getSelected(){
 let answer;
 answerEls.forEach(
  (answerEle)=>{
   if(answerEle.checked){
    answer = answerEle.id
    userSelected[currentQtn] = answer
   }
  }
 )
 return answer
}
reStart.addEventListener(
 'click', ()=>{
  let timer_limit = 60
  let timer_out = setInterval(
   () => {
    if (timer_limit == 0) {
     quiz.style.display = "none";
     resultEle.style.display = "block";
     scoreEle.innerText = answered + "/" + quizData.length + " question answered correctly.";
    }
    else {
     document.getElementById('timer').innerHTML = "Time :" + " 00 :" + " " + timer_limit;
     timer_limit -= 1;
    }
   }, 1000)
 }
)
// let timer_limit = 30
// let timer_out = setInterval(
//  () => {
//   if (timer_limit == 0) {
//    quiz.style.display = "none";
//    resultEle.style.display = "block";
//    scoreEle.innerText = answered + "/" + quizData.length + " question answered correctly.";
//   }
//   else {
//    document.getElementById('timer').innerHTML = "Time :" + " 00 :" + " " + timer_limit;
//    timer_limit -= 1;
//   }
//  }, 1000)