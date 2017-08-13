function userWins(userChoice, cmptChoice) {
  document.getElementById("content").style.display = "none";
  document.getElementById("outcome").innerHTML = "<img src=\"angry_computer.gif\" style=\"width:400px;height:275px;\">";
  document.getElementById("headertext").innerHTML = "" + cmptChoice.toUpperCase() + " beats "  + userChoice.toUpperCase() + ". You choose poorly. The computer wins!";
}

function userLoses(userChoice, cmptChoice) {
  document.getElementById("content").style.display = "none";
  document.getElementById("outcome").innerHTML = "<img src=\"winner.gif\" style=\"width:400px;height:275px;\">";
  document.getElementById("headertext").innerHTML = "" + userChoice.toUpperCase() + " beats " + cmptChoice.toUpperCase() + ". Victory!!";
}

function playGame(userChoice) {
  cmptChoice = Math.floor((Math.random() * 3) + 1);

  switch (cmptChoice) {
    case 1:
    cmptChoice = "rock";
    break;
    case 2:
    cmptChoice = "scissors";
    break;
    case 3:
    cmptChoice = "paper";
    break;
  }

  if (cmptChoice == "rock" && userChoice == "scissors") {
    userWins(userChoice, cmp)
  } else if (cmptChoice == "paper" && userChoice == "rock") {
    userWins(userChoice, cmp)
  } else if (cmptChoice == "scissors" && userChoice == "paper") {
    userWins(userChoice, cmp)
  } else if (cmptChoice == "paper" && userChoice == "scissors") {
    userLoses(userChoice, cmptChoice)
  } else if (cmptChoice == "rock" && userChoice == "paper") {
    userLoses(userChoice, cmptChoice)
  } else if (cmptChoice == "scissors" && userChoice == "rock") {
    userLoses(userChoice, cmptChoice)
  } else {
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"draw.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = "You both choose " + userChoice + ". Nobody wins."
  }
}
