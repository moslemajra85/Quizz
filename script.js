// information source
const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'JavaScript',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'Cascading Style Sheets',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'Hypertext Markup Language',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: '1995',
  },
];

// Select The quizz container
const quizzContainer = document.querySelector('#quizz-container');

// select the h2: Question
const questionEl = document.querySelector('#question');

// Select the answers: radio buttons
// we need the answers to check if the user entered the correct answer
const answersEl = document.querySelectorAll('.answer');

// Select labels
const a_text = document.querySelector('#a-text');
const b_text = document.querySelector('#b-text');
const c_text = document.querySelector('#c-text');
const d_text = document.querySelector('#d-text');

// select Button
const submitBtn = document.querySelector('#submit');
let currentQuizz = 0; // 0 is the index of the firstElement
let score = 0;

function deselectAnswers() {
  answersEl.forEach((answer) => (answer.checked = false));
}
// display the current question
function loadQuizz() {
  deselectAnswers();
  const myQuizz = quizData[currentQuizz];
  questionEl.innerText = myQuizz.question;
  a_text.innerText = myQuizz.a;
  b_text.innerText = myQuizz.b;
  c_text.innerText = myQuizz.c;
  d_text.innerText = myQuizz.d;
}

loadQuizz();

// undefined | radio
function getSelected() {
  let selected; //undefined

  answersEl.forEach((answer) => {
    if (answer.checked === true) {
      selected = answer;
    }
  });

  return selected;
}

submitBtn.addEventListener('click', () => {
  // check if the user has selected an answer
  const answer = getSelected();
  if (answer) {
    if (quizData[currentQuizz].correct === quizData[currentQuizz][answer.id]) {
      // update score
      score++;
    }

    // update currentQuizz to go to the next page
    currentQuizz++;

    if (currentQuizz < quizData.length) {
      loadQuizz();
    } else {
      quizzContainer.innerHTML = ` 
      <h2>Your Score is : ${score}/${quizData.length}</h2>
      <button onclick="location.reload()">Reload</button>
       
      `;
    }
  }
});
