"use strict";

const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");
const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");
const currentAttacker = require('./currentAttacker');

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
        playerTwo.health = playerTwo.health - playerOne.attack();
        $("#pTwoHealth").text("Health: " + playerTwo.health);
        attackLog = `${playerOne.name} attacked ${playerTwo.name} with a ${playerOne.attackType} and dealt ${playerOne.attack()} hit points`;
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
        playerOne.health = playerOne.health - playerTwo.attack();
        $("#pOneHealth").text("Health: " + playerOne.health);
        attackLog = `${playerTwo.name} attacked ${playerOne.name} with a ${playerTwo.attackType} and dealt ${playerTwo.attack()} hit points`;
        newP.innerText = attackLog;
        $('#fightLog').prepend(newP);
        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerOne);
      }
    }

    // console.log(`Current health for ${playerOne.name}:`, playerOne.health);
    // console.log(`Current health for ${playerTwo.name}:`, playerTwo.health);

    // Test if latest attack caused a win
    if (playerOne.health <= 0) {

      newHeading.innerText = `${playerTwo.name} Wins!`;
      $('#fightLog').prepend(newHeading);
    } else if (playerTwo.health <= 0) {
      newHeading.innerText = `${playerOne.name} Wins!`;
      $('#fightLog').prepend(newHeading);
    }

  }

}

module.exports = fightPlayers;
