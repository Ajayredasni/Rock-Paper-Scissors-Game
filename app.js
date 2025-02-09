let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

const genCompChoice = () => {
  const itemsChoice = ["rock", "paper", "scissors"];
  return itemsChoice[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWinner, userChoice, compChoice) => {
  if (userWinner) {
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreBoard.innerText = userScore;
  } else {
    msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreBoard.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWinner = true;
    if (userChoice === "rock") {
      userWinner = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWinner = compChoice === "scissors" ? false : true;
    } else {
      userWinner = compChoice === "rock" ? false : true;
    }
    showWinner(userWinner, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
