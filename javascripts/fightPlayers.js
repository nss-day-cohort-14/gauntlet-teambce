"use strict";

const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");
const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");
const currentAttacker = require('./currentAttacker');

function fightPlayers(playerOne, playerTwo) {

  // var currentAttacker = playerOne;

  if (playerOne.health > 0 && playerTwo.health > 0) {

    var attackLog = null;

    // Attack Math
    if (currentAttacker.getCurrentAttacker() === playerOne) {
      // RANDOM MISS
      if ((Math.floor(Math.random() * (4 - 1 + 1)) + 1) === 3) {
        console.log(`${playerOne.name} missed with their ${playerOne.attackType}! Oops!`);
        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      } else {
        playerTwo.health = playerTwo.health - playerOne.attack();
        attackLog = `${playerOne.name} attacked ${playerTwo.name} with a ${playerOne.attackType} and dealt ${playerOne.attack()} hit points`;
        console.log(attackLog);
        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      }
    } else if (currentAttacker.getCurrentAttacker() === playerTwo) {
      // RANDOM MISS
      if ((Math.floor(Math.random() * (4 - 1 + 1)) + 1) === 3) {
        console.log(`${playerTwo.name} missed with their ${playerTwo.attackType}! Oops!`);
        // Set playerOne to be currentAttacker
        currentAttacker.setCurrentAttacker(playerOne);
      } else {
        playerOne.health = playerOne.health - playerTwo.attack();
        attackLog = `${playerTwo.name} attacked ${playerOne.name} with a ${playerTwo.attackType} and dealt ${playerTwo.attack()} hit points`;
        console.log(attackLog);
        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerOne);
      }
    }

    console.log(`Current health for ${playerOne.name}:`, playerOne.health);
    console.log(`Current health for ${playerTwo.name}:`, playerTwo.health);

    // Test if latest attack caused a win
    if (playerOne.health <= 0) {
      console.log(`${playerTwo.name} Wins!`);
    } else if (playerTwo.health <= 0) {
      console.log(`${playerOne.name} Wins!`);
    }

  }

}

module.exports = fightPlayers;
