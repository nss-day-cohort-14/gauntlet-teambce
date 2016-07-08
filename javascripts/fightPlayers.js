"use strict";

const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");
const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");
const currentAttacker = require('./currentAttacker');
const resetGamePressed = require('./resetGamePressed');

function fightPlayers(playerOne, playerTwo) {
  var newHeading = document.createElement("h1");
  let playerOneDiv = $('#pOneCard');
  let playerTwoDiv = $('#pTwoCard');

  // var currentAttacker = playerOne;

  if (playerOne.health > 0 && playerTwo.health > 0) {
    // let newP = document.createElement("p");
    var attackLog = null;

    // Attack Math
    if (currentAttacker.getCurrentAttacker() === playerOne) {
      let newP = document.createElement("p");
      $(newP).addClass('left');
      // RANDOM MISS
      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {
        attackLog = `${playerOne.name} missed with their ${playerOne.attackType}! Oops!`;
        newP.innerText = attackLog;
        // //add player battle log styling
        $('#fightLog').prepend(newP);


        //Remove animation classes for each div if there is a miss to reset animations
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      } else {
        //add player battle log styling
        let newP = document.createElement("p");
        $(newP).addClass('left');

        playerTwo.health = playerTwo.health - playerOne.attack();
        $("#pTwoHealth").text("Health: " + playerTwo.health);
        attackLog = `${playerOne.name} attacked ${playerTwo.name} with a ${playerOne.attackType} and dealt ${playerOne.attack()} hit points`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);

        //animation begin
        playerTwoDiv.addClass('AttackedPlayerDiv');
        playerOneDiv.removeClass('AttackedPlayerDiv');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      }
    } else if (currentAttacker.getCurrentAttacker() === playerTwo) {
      // RANDOM MISS

      //add player battle log styling
      let newP = document.createElement("p");
      $(newP).addClass('right');

      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {
        attackLog = `${playerTwo.name} missed with their ${playerTwo.attackType}! Oops!`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);

        //Remove animation classes for each div if there is a miss to reset animations
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        currentAttacker.setCurrentAttacker(playerOne);
      } else {
        //add player battle log styling
        let newP = document.createElement("p");
        $(newP).addClass('right');

        playerOne.health = playerOne.health - playerTwo.attack();
        $("#pOneHealth").text("Health: " + playerOne.health);
        attackLog = `${playerTwo.name} attacked ${playerOne.name} with a ${playerTwo.attackType} and dealt ${playerTwo.attack()} hit points`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);

        //animation begin
        playerOneDiv.addClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerOne);
      }
    }

    // Test if latest attack caused a win
    if (playerOne.health <= 0) {
      newHeading.innerText = `${playerTwo.name} Wins!`;
      playerOne.health = 0;
      $("#pOneHealth").text("Health: " + playerOne.health);
      $('#fightLog').prepend(newHeading);
      $('#button-div').empty();
      let resetButton = $('<button id="resetButton" class="btn btn-success center-block">New Game!</button>');
      $('#battleground').prepend(resetButton);
      resetButton.click(resetGamePressed);
    } else if (playerTwo.health <= 0) {
      newHeading.innerText = `${playerOne.name} Wins!`;
      playerTwo.health = 0;
      $("#pTwoHealth").text("Health: " + playerTwo.health);
      $('#fightLog').prepend(newHeading);
      $('#button-div').empty();
      let resetButton = $('<button id="resetButton" class="btn btn-success center-block">New Game!</button>');
      $('#battleground').prepend(resetButton);
      resetButton.click(resetGamePressed);
    }

  }

}

module.exports = fightPlayers;
