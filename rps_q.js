$(document).ready(function(){

  function userWins(userChoice, cmptChoice) {
    $("content").hide;
    $("outcome").html = "<img src=\"angry_computer.gif\" style=\"width:400px;height:275px;\">";
    $("headertext").text = "" + cmptChoice.toUpperCase() + " beats "  + userChoice.toUpperCase() + ". You choose poorly. The computer wins!";
  }

  function userLoses(userChoice, cmptChoice) {
    $("content").hide;
    $("outcome").html = "<img src=\"winner.gif\" style=\"width:400px;height:275px;\">";
    $("headertext").text = "" + userChoice.toUpperCase() + " beats " + cmptChoice.toUpperCase() + ". Victory!!";
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
      userWins(userChoice, cmptChoice)
      console.log = "user wins";
    } else if (cmptChoice == "paper" && userChoice == "rock") {
      userWins(userChoice, cmptChoice)
    } else if (cmptChoice == "scissors" && userChoice == "paper") {
      userWins(userChoice, cmptChoice)
    } else if (cmptChoice == "paper" && userChoice == "scissors") {
      userLoses(userChoice, cmptChoice)
    } else if (cmptChoice == "rock" && userChoice == "paper") {
      userLoses(userChoice, cmptChoice)
    } else if (cmptChoice == "scissors" && userChoice == "rock") {
      userLoses(userChoice, cmptChoice)
    } else {
      $("content").hide;
      $("outcome").html = "<img src=\"draw.gif\" style=\"width:400px;height:275px;\">";
      $("headertext").text = "You both choose " + userChoice + ". Nobody wins."
    }


  }

  $("#rock").click(playGame("rock"));
  $("#paper").click(playGame("paper"));
  $("#scissors").click(playGame("scissors"));




});
