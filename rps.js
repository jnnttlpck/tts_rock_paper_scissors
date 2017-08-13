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
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"angry_computer.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = "" + cmptChoice.toUpperCase() + " beats "  + userChoice.toUpperCase() + ". You choose poorly. The computer wins!";
  } else if (cmptChoice == "paper" && userChoice == "rock") {
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"angry_computer.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = "" + cmptChoice.toUpperCase() + " beats " + userChoice.toUpperCase() + ". You choose poorly. The computer wins!";
  } else if (cmptChoice == "scissors" && userChoice == "paper") {
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"angry_computer.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = "" + cmptChoice.toUpperCase() + " beats " + userChoice.toUpperCase() + ". You choose poorly. The computer wins!";
  } else if (cmptChoice == "paper" && userChoice == "scissors") {
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"winner.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = + userChoice.toUpperCase() + " beats " + cmptChoice.toUpperCase() + ". Victory!!";
  } else if (cmptChoice == "rock" && userChoice == "paper") {
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"winner.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = + userChoice.toUpperCase() + " beats " + cmptChoice.toUpperCase() + ". Victory!!";
  } else if (cmptChoice == "scissors" && userChoice == "rock") {
    document.getElementById("content").style.display = "none";
    document.getElementById("outcome").innerHTML = "<img src=\"winner.gif\" style=\"width:400px;height:275px;\">";
    document.getElementById("headertext").innerHTML = + userChoice.toUpperCase() + " beats " + cmptChoice.toUpperCase() + ". Victory!!";
  } else {
    document.getElementById("outcome").innerHTML = "Draw!"
  }
}
