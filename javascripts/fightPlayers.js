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
  // var currentAttacker = playerOne;

  if (playerOne.health > 0 && playerTwo.health > 0) {
    var newP = document.createElement("p");
    var attackLog = null;

    // Attack Math
    if (currentAttacker.getCurrentAttacker() === playerOne) {
      // RANDOM MISS
      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {
        attackLog = `${playerOne.name} missed with their ${playerOne.attackType}! Oops!`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);
        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      } else {
        let attackPoints = playerOne.attack();
        playerTwo.health = playerTwo.health - attackPoints;
        $("#pTwoHealth").text("Health: " + playerTwo.health);
        attackLog = `${playerOne.name} attacked ${playerTwo.name} with a ${playerOne.attackType} and dealt ${attackPoints} hit points`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);
        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      }
    } else if (currentAttacker.getCurrentAttacker() === playerTwo) {
      // RANDOM MISS
      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {
        attackLog = `${playerTwo.name} missed with their ${playerTwo.attackType}! Oops!`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);
        // Set playerOne to be currentAttacker
        currentAttacker.setCurrentAttacker(playerOne);
      } else {
        let attackPoints = playerTwo.attack();
        playerOne.health = playerOne.health - attackPoints;
        $("#pOneHealth").text("Health: " + playerOne.health);
        attackLog = `${playerTwo.name} attacked ${playerOne.name} with a ${playerTwo.attackType} and dealt ${attackPoints} hit points`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);
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
