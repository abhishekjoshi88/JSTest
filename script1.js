// Constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Elements
const container = document.querySelector(".container");
const handactions = document.querySelector(".hand-action");
const action2 = document.querySelector(".game-results");
const next = document.querySelector(".btn-nextpage");
const hurray = document.querySelector(".hurray");
const userScoreDisplay = document.querySelector(".userScore h3");
const comScoreDisplay = document.querySelector(".comScore h3");
const userCircle = document.querySelector(".circle");
const comCircle = document.querySelector(".circle1");
const pcDecision = document.querySelector(".decisions h3");

// User and Computer Scores
let UserScore = JSON.parse(localStorage.getItem("userScore")) || 0;
let ComScore = JSON.parse(localStorage.getItem("comScore")) || 0;

userScoreDisplay.innerText = UserScore;
comScoreDisplay.innerText = ComScore;

// Game Logic
const decide = (Userhand, ComHand) => {
  const WIN = "YOU WIN";
  const LOSS = "YOU LOST";
  const TIE = "TIE UP";

  const results = {
    [ROCK]: { [SCISSORS]: WIN, [PAPER]: LOSS },
    [PAPER]: { [ROCK]: WIN, [SCISSORS]: LOSS },
    [SCISSORS]: { [PAPER]: WIN, [ROCK]: LOSS },
  };

  if (Userhand === ComHand) {
    decision(TIE);
    hideCircles();
    hideDecision();
  } else if (results[Userhand][ComHand] === WIN) {
    decision(WIN);
    UScore(UserScore + 1);
    showUserWin();
  } else {
    decision(LOSS);
    CScore(ComScore + 1);
    showComputerWin();
  }
};

const showUserWin = () => {
  next.style.display = "block";
  userCircle.style.display = "block";
  comCircle.style.display = "none";
  pcDecision.style.display = "block";
};

const showComputerWin = () => {
  next.style.display = "none";
  userCircle.style.display = "none";
  comCircle.style.display = "block";
  pcDecision.style.display = "block";
};

const hideCircles = () => {
  userCircle.style.display = "none";
  comCircle.style.display = "none";
};

const hideDecision = () => {
  pcDecision.style.display = "none";
};

// User and Computer Score Update
const updateScore = (score, type) => {
  if (type === "user") {
    UserScore = score;
    userScoreDisplay.innerText = UserScore;
    localStorage.setItem("userScore", JSON.stringify(UserScore));
  } else {
    ComScore = score;
    comScoreDisplay.innerText = ComScore;
    localStorage.setItem("comScore", JSON.stringify(ComScore));
  }
};

const UScore = (score) => {
  updateScore(score, "user");
};

const CScore = (score) => {
  updateScore(score, "com");
};

// Restart and Next Modal
const restart = () => {
  container.style.display = "flex";
  handactions.style.display = "block";
  action2.style.display = "none";
  next.style.display = "none";
  hurray.style.display = "none";
};

const NextModal = () => {
  container.style.display = "none";
  action2.style.display = "none";
  next.style.display = "none";
  hurray.style.display = "flex";
};

// Event Listeners
document.querySelectorAll(".hand").forEach((hand) => {
  hand.addEventListener("click", () => {
    const userHand = hand.getAttribute("id");
    const comHand = ComActions();
    decide(userHand, comHand);
  });
});

document.querySelector(".btn-restart").addEventListener("click", restart);
document.querySelector(".btn-nextpage").addEventListener("click", NextModal);
