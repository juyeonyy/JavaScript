function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let number;

  if (player == "rock") {
    if (computerSelection == "Rock") {
      number = 0;
      console.log("It's a tie.");
      return number;
    } else if (computerSelection == "Paper") {
      number = -1;
      console.log("You Lose! Paper beats Rock");
      return number;
    } else {
      number = 1;
      console.log("You Win! Rock beats Scissors");
      return number;
    }
  } else if (player == "paper") {
    if (computerSelection == "Rock") {
      number = 1;
      console.log("You Win! Paper beats Rock");
      return number;
    } else if (computerSelection == "Paper") {
      number = 0;
      console.log("It's a tie.");
      return number;
    } else {
      number = -1;
      console.log("You Lose! Scissors beat Paper");
      return number;
    }
  } else {
    if (computerSelection == "Rock") {
      number = -1;
      console.log("You Lose! Rock beats Scissors");
      return number;
    } else if (computerSelection == "Paper") {
      number = 1;
      console.log("You Win! Scissors beat Paper");
      return number;
    } else {
      number = 0;
      console.log("It's a tie.");
      return number;
    }
  }
}

function getComputerChoice() {
  const data = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * data.length);

  return data[random];
}

function game() {
  let score = [];

  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Pick one Rock, Paper, Scissors ");
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    console.log(result);
    score.push(result);
  }

  console.log(score);

  const resultScore = score.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  console.log(resultScore);

  console.log("the number of wins :" + resultScore[1]);
  console.log("the number of draws :" + resultScore[0]);
  console.log("the number of loses :" + resultScore[-1]);
}

console.log(game());
