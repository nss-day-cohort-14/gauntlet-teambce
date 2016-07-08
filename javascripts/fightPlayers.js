"use strict";

// Require necessary modules
const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");
const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");
const currentAttacker = require('./currentAttacker');
const resetGamePressed = require('./resetGamePressed');

// fightPlayers function takes two players and battles them out
function fightPlayers(playerOne, playerTwo) {

  // Get page elements
  var newHeading = document.createElement("h1");
  let playerOneDiv = $('#pOneCard');
  let playerTwoDiv = $('#pTwoCard');

  // Runs only if both players have health
  if (playerOne.health > 0 && playerTwo.health > 0) {
    let newP = document.createElement("p");
    var attackLog = null;

    // If playerOne is the currentAttacker
    if (currentAttacker.getCurrentAttacker() === playerOne) {

      // Sets player battle card to left of page
      $(newP).addClass('left');

      // Random miss for attack with 1 in 12 chance
      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {

        // Get random attackName
        let attackIndex = Math.floor(Math.random() * (4 - 0)) + 0;
        let selectedAttackName = playerTwo.attackType[attackIndex].attack;

        // Build up miss string and print to DOM
        attackLog = `<b>${playerOne.name}</b> missed with their <b>${selectedAttackName}</b>! Oops!`;
        newP.innerHTML = attackLog;
        $('#fightLog').prepend(newP);

        //Remove animation classes for each div if there is a miss to reset animations
        playerOneDiv.addClass('PlayerMiss');
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);

      // else, if attack did not miss
      } else {

        // Sets player battle card to left
        $(newP).addClass('left');

        // Gets random attack and random attack points for selected player
        let attackIndex = Math.floor(Math.random() * (4 - 0)) + 0;
        let selectedAttack = playerOne.attackType[attackIndex];
        let selectedAttackName = selectedAttack.attack;
        let attackPoints = Math.floor(Math.random() * (selectedAttack.attackMax - selectedAttack.attackMin + 1)) + selectedAttack.attackMin;

        // Decreases playerTwo health by attack amount and prints to playerCard
        playerTwo.health = playerTwo.health - attackPoints;
        $("#pTwoHealth").text("Health: " + playerTwo.health);

        // Prints attack log to fight log
        attackLog = `<b>${playerOne.name}</b> attacked <b>${playerTwo.name}</b> with a <b>${selectedAttackName}</b> and dealt <b>${attackPoints}</b> hit points`;
        newP.innerHTML = attackLog;
        $('#fightLog').prepend(newP);

        // Animation for player cards
        playerTwoDiv.addClass('AttackedPlayerDiv');
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerOneDiv.removeClass('PlayerMiss');
        playerTwoDiv.removeClass('PlayerMiss');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      }

    // else, if currentAttacker is playerTwo
    } else if (currentAttacker.getCurrentAttacker() === playerTwo) {

      // Sets player battle card to right of page
      $(newP).addClass('right');

      // Random miss for attack with 1 in 12 chance
      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {

        // Get random attackName
        let attackIndex = Math.floor(Math.random() * (4 - 0)) + 0;
        let selectedAttackName = playerTwo.attackType[attackIndex].attack;

        // Build up attack string and print to DOM
        attackLog = `<b>${playerTwo.name}</b> missed with their <b>${selectedAttackName}</b>! Oops!`;
        newP.innerHTML = attackLog;
        $('#fightLog').prepend(newP);

        //Remove animation classes for each div if there is a miss to reset animations
        playerTwoDiv.addClass('PlayerMiss');
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        // Sets currentAttacker back to playerOne
        currentAttacker.setCurrentAttacker(playerOne);

      // If playerTwo did not miss attack
      } else {

        // Sets player battle card to right of page
        $(newP).addClass('right');

        // Gets random attack and random attack points for selected player
        let attackIndex = Math.floor(Math.random() * (4 - 0)) + 0;
        let selectedAttack = playerTwo.attackType[attackIndex];
        let selectedAttackName = selectedAttack.attack;
        let attackPoints = Math.floor(Math.random() * (selectedAttack.attackMax - selectedAttack.attackMin + 1)) + selectedAttack.attackMin;

        // Decreases playerTwo health by attack amount and prints to playerCard
        playerOne.health = playerOne.health - attackPoints;
        $("#pOneHealth").text("Health: " + playerOne.health);

        // Prints attack log to fight log
        attackLog = `<b>${playerTwo.name}</b> attacked <b>${playerOne.name}</b> with a <b>${selectedAttackName}</b> and dealt <b>${attackPoints}</b> hit points`;
        newP.innerHTML = attackLog;
        $('#fightLog').prepend(newP);

        //animation begin
        playerOneDiv.addClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');
        playerOneDiv.removeClass('PlayerMiss');
        playerTwoDiv.removeClass('PlayerMiss');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerOne);
      }
    }

    // If latest attack caused playerOne to lose
    if (playerOne.health <= 0) {

      // Declare winner
      newHeading.innerText = `${playerTwo.name} Wins!`;

      // Prettyify playerOne's health
      playerOne.health = 0;

      // Clean up DOM elements
      $('#pOneCard, #pTwoCard').empty();
      $('#fightLog').prepend(newHeading);
      $('#button-div').empty();

      // Create reset button and add to page with event listener
      let resetButton = $('<button id="resetButton" class="btn btn-success center-block">New Game!</button>');
      $('header').prepend(resetButton);
      resetButton.click(resetGamePressed);

    // If latest attack caused playerTwo to lose
    } else if (playerTwo.health <= 0) {

      // Declare winner
      newHeading.innerText = `${playerOne.name} Wins!`;

      // Prettyify playerTwo's health
      playerTwo.health = 0;

      // Clean up DOM elements
      $('#pOneCard, #pTwoCard').empty();
      $('#fightLog').prepend(newHeading);
      $('#button-div').empty();

      // Create reset button and add to page with event listener
      let resetButton = $('<button id="resetButton" class="btn btn-success center-block">New Game!</button>');
      $('header').prepend(resetButton);
      resetButton.click(resetGamePressed);

    }
  }
}

module.exports = fightPlayers;
