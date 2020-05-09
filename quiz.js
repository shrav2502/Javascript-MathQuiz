const timer = document.getElementById("timer");
const start = document.getElementById("start");
const game = document.getElementById("game");
const next = document.getElementById("next");
const numValue = document.getElementById("answerBox");
const results = document.getElementById("results");
const stop = document.getElementById("stop");
const instructions = document.getElementById("instructions");
const header = document.getElementById("header");
const scoreCard = document.getElementById("scoreCard");

let correct = 0;
let clear;
let step = 0;

const math = [
  {
    question: "8 X 7",
    answer: "56",
  },
  {
    question: "57 + 32",
    answer: "89",
  },
  {
    question: "100 - 64",
    answer: "36",
  },
  {
    question: "2 X 8",
    answer: "16",
  },
  {
    question: "20 / 5",
    answer: "4",
  },
  {
    question: "45 + 45",
    answer: "90",
  },
  {
    question: "9 X 4",
    answer: "36",
  },
  {
    question: "11 - 7",
    answer: "4",
  },
  {
    question: "12 - 5",
    answer: "7",
  },
  {
    question: "100 - 67",
    answer: "33",
  },
];

start.addEventListener("click", startGame);

function startGame() {
  timer.classList.remove("hide");
  start.classList.add("hide");
  numValue.classList.remove("hide");
  stop.classList.remove("hide");
  game.classList.remove("hide");
  next.classList.remove("hide");
  instructions.classList.add("hide");
  header.classList.add("hide");
  mathGame();
}

let count = 15;
function timerStart() {
  count--;
  timer.textContent = count;
  clear = setTimeout(() => {
    timerStart();
  }, 1000);
  if (count <= 0) {
    clearTimeout(clear);
  }
  if (count == 0) {
    if (numValue.value == "") {
      nextQuestion();
    }
  }
}

function mathGame() {
  timerStart();
  game.textContent = math[step].question;
}

stop.addEventListener("click", stopGame);
function stopGame() {
  clearTimeout(clear);
}

next.addEventListener("click", nextQuestion);
function nextQuestion() {
  clearTimeout(clear);
  if (step == 9) {
    next.innerHTML = "Submit";
  }
  if (step >= 10) {
    next.classList.add("hide");
    results.classList.remove("hide");
    stop.classList.add("hide");
  } else {
    if (numValue.value == math[step].answer) {
      correct++;
      console.log(correct);
      numValue.value = "";
    }
    step++;
    console.log(step);
    game.textContent = math[step].question;
    count = 15;
    timerStart();
  }
}

results.addEventListener("click", getResults);

function getResults() {
  scoreCard.classList.remove("hide");
  game.classList.add("hide");
  numValue.classList.add("hide");
  timer.classList.add("hide");
  scoreCard.innerHTML = "You scored " + correct + " / 10";
}
