const container = (document.querySelector('.container').style.display = 'flex');
const next = document.querySelector('.btn-nextpage');
next.style.display = 'none';
const hurray = document.querySelector('.hurray');
hurray.style.display = 'none';
const footerbtn = (document.querySelector('.footer-btn').style.display =
  'flex');
const rock = document.getElementById('rock').outerHTML;
const paper = document.getElementById('paper').outerHTML;
const scissors = document.getElementById('scissors').outerHTML;

const hand = {
  rock: rock,
  paper: paper,
  scissors: scissors,
};
//UserScore and localStorage
let UserScore = JSON.parse(localStorage.getItem('userScore')) || 0;
document.querySelector('.userScore h3').innerHTML = UserScore;
console.log('UserScore =' + ' ' + UserScore);

let ComScore = JSON.parse(localStorage.getItem('comScore')) || 0;
document.querySelector('.comScore h3').innerHTML = ComScore;
console.log('ComScore =' + ' ' + ComScore);

//UserhandActions
const handaction = (actions) => {
  console.log(actions);
  const handactions = document.querySelector('.hand-action');
  handactions.style.display = 'none';
  const action2 = document.querySelector('.game-results');
  action2.style.display = 'flex';
  document.getElementById('UserPicked').innerHTML = hand[actions];

  let computerHand = ComActions();
  decide(actions, computerHand);
};

//ComputerHandAction
const ComActions = () => {
  let compick = ['rock', 'paper', 'scissors'];
  let comhand = compick[Math.floor(Math.random() * 3)];
  console.log(comhand);
  document.getElementById('PcPicked').innerHTML = hand[comhand];
  return comhand;
};

//Game-Logic
const decide = (Userhand, ComHand) => {
  if (Userhand == 'rock' && ComHand == 'scissors') {
    decision('YOU WIN');
    UScore(UserScore + 1);
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'block';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'block';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'none';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'block';
  }
  if (Userhand == 'paper' && ComHand == 'rock') {
    decision('YOU WIN');
    UScore(UserScore + 1);
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'block';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'block';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'none';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'block';
  }
  if (Userhand == 'scissors' && ComHand == 'paper') {
    decision('YOU WIN');
    UScore(UserScore + 1);
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'block';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'block';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'none';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'block';
  }
  if (Userhand == 'paper' && ComHand == 'scissors') {
    decision('YOU LOST');
    CScore(ComScore + 1);
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'none';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'none';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'block';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'block';
  }
  if (Userhand == 'scissors' && ComHand == 'rock') {
    decision('YOU LOST');
    CScore(ComScore + 1);
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'none';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'none';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'block';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'block';
  }
  if (Userhand == 'rock' && ComHand == 'paper') {
    decision('YOU LOST');
    CScore(ComScore + 1);
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'none';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'none';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'block';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'block';
  }
  if (Userhand == 'rock' && ComHand == 'rock') {
    decision('TIE UP');
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'none';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'none';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'none';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'none';
  }
  if (Userhand == 'paper' && ComHand == 'paper') {
    decision('TIE UP');
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'none';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'none';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'none';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'none';
  }
  if (Userhand == 'scissors' && ComHand == 'scissors') {
    decision('TIE UP');
    const next = document.querySelector('.btn-nextpage');
    next.style.display = 'none';
    const usercircle = document.querySelector('.circle');
    usercircle.style.display = 'none';
    const comcircle = document.querySelector('.circle1');
    comcircle.style.display = 'none';
    const pc = document.querySelector('.decisions h3');
    pc.style.display = 'none';
  }
};
// Computer Score AND UserScore

const UScore = (userScore) => {
  UserScore = userScore;
  //Storing the scores in local Storage
  if (localStorage) {
    localStorage.setItem('userScore', JSON.stringify(userScore));
  }
  if (UserScore) {
    console.log('UserScore = ' + ' ' + userScore);
    document.querySelector('.userScore h3').innerText = userScore;
  }
};

const CScore = (comScore) => {
  ComScore = comScore;
  if (localStorage) {
    localStorage.setItem('comScore', JSON.stringify(comScore));
  }
  if (ComScore) {
    console.log('ComScore = ' + ' ' + comScore);
    document.querySelector('.comScore h3').innerText = comScore;
  }
};

//Game Decision
const decision = (decide) => {
  document.querySelector('.decisions h1').innerText = decide;
};

//Restart game
const restart = () => {
  const container = document.querySelector('.container');
  container.style.display = 'flex';
  const handactions = document.querySelector('.hand-action');
  handactions.style.display = 'block';
  const action2 = document.querySelector('.game-results');
  action2.style.display = 'none';
  const next = document.querySelector('.btn-nextpage');
  next.style.display = 'none';
  const hurray = document.querySelector('.hurray');
  hurray.style.display = 'none';
};

//Next button opertion
const NextModal = () => {
  const container = document.querySelector('.container');
  container.style.display = 'none';
  const action2 = document.querySelector('.game-results');
  action2.style.display = 'none';
  const rules = document.querySelector('.btn-rules');
  rules.style.display = 'block';
  const next = document.querySelector('.btn-nextpage');
  next.style.display = 'none';
  const hurray = document.querySelector('.hurray');
  hurray.style.display = 'flex';
};

//Games Rules board modal
const modal = document.querySelector('.rule-board');
const openModalbtn = document.querySelector('.btn-open');
const closeModalbtn = document.querySelector('.btn-close');

const closeModal = function () {
  modal.classList.add('hidden');
};
closeModalbtn.addEventListener('click', closeModal);

const openModal = function () {
  modal.classList.remove('hidden');
};

openModalbtn.addEventListener('click', openModal);
