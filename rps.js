// $('#rock').click(function(){
//   $('#rock').val("rock").html("You choose rock!")
// });
// $('#paper').click(function(){
//   $('#paper').val("paper").html("<p> You choose paper!</p>")
// });
// $('#scissors').click(function(){
//   $('#scissors').val("scissors").html("<p> You choose scissors!</p>")
// });
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
    document.getElementById("outcome").innerHTML = "Computer choose " + cmptChoice + " and  " + cmptChoice + " beats " + userChoice + "! Machines will take over soon!"
  } else if (cmptChoice == "paper" && userChoice == "rock") {
    document.getElementById("outcome").innerHTML = "Computer choose " + cmptChoice + " and  " + cmptChoice + " beats " + userChoice + "! Machines will take over soon!"
  } else if (cmptChoice == "scissors" && userChoice == "paper") {
    document.getElementById("outcome").innerHTML = "Computer choose " + cmptChoice + " and  " + cmptChoice + " beats " + userChoice + "! Machines will take over soon!"
  } else if (cmptChoice == "paper" && userChoice == "scissors") {
    document.getElementById("outcome").innerHTML = "You choose " + userChoice + "!  The computer choose " + cmptChoice + " and  " + userChoice + " beats " + cmptChoice + "!  Woo-hoo, you beat the computer!"
  } else if (cmptChoice == "rock" && userChoice == "paper") {
    document.getElementById("outcome").innerHTML = "You choose " + userChoice + "!  The computer choose " + cmptChoice + " and  " + userChoice + " beats " + cmptChoice + "!  Woo-hoo, you beat the computer!"
  } else if (cmptChoice == "scissors" && userChoice == "rock") {
    document.getElementById("outcome").innerHTML = "You choose " + userChoice + "!  The computer choose " + cmptChoice + " and  " + userChoice + " beats " + cmptChoice + "!  Woo-hoo, you beat the computer!"
  } else {
    document.getElementById("outcome").innerHTML = "Draw!"
  }
}
