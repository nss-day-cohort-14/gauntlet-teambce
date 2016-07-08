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
    let newP = document.createElement("p");
    var attackLog = null;

    // Attack Math
    if (currentAttacker.getCurrentAttacker() === playerOne) {
      $(newP).addClass('left');
      // RANDOM MISS
      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {
        attackLog = `<b>${playerOne.name}</b> missed with their <b>${playerOne.attackType}</b>! Oops!`;
        newP.innerHTML = attackLog;
        // //add player battle log styling
        $('#fightLog').prepend(newP);


        //Remove animation classes for each div if there is a miss to reset animations
        // playerOne.addClass('PlayerMiss');
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        // Set playerTwo to be currentAttacker
        currentAttacker.setCurrentAttacker(playerTwo);
      } else {
        //add player battle log styling
        $(newP).addClass('left');

        let attackPoints = playerOne.attack();
        playerTwo.health = playerTwo.health - attackPoints;
        $("#pTwoHealth").text("Health: " + playerTwo.health);
        attackLog = `<b>${playerOne.name}</b> attacked <b>${playerTwo.name}</b> with a <b>${playerOne.attackType}</b> and dealt <b>${attackPoints}</b> hit points`;
        newP.innerHTML = attackLog;
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
      $(newP).addClass('right');

      if ((Math.floor(Math.random() * (12 - 1 + 1)) + 1) === 3) {
        attackLog = `<b>${playerTwo.name}</b> missed with their <b>${playerTwo.attackType}</b>! Oops!`;
        newP.innerHTML = attackLog;
        $('#fightLog').prepend(newP);

        //Remove animation classes for each div if there is a miss to reset animations
        playerOneDiv.removeClass('AttackedPlayerDiv');
        playerTwoDiv.removeClass('AttackedPlayerDiv');

        currentAttacker.setCurrentAttacker(playerOne);
      } else {
        //add player battle log styling
        $(newP).addClass('right');

        let attackPoints = playerTwo.attack();
        playerOne.health = playerOne.health - attackPoints;
        $("#pOneHealth").text("Health: " + playerOne.health);
        attackLog = `<b>${playerTwo.name}</b> attacked <b>${playerOne.name}</b> with a <b>${playerTwo.attackType}</b> and dealt <b>${attackPoints}</b> hit points`;
        newP.innerHTML = attackLog;
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
      $('#pOneName, #pTwoName, #pOneHealth, #pOneClass, #pOneSpecies, #pTwoHealth, #pTwoClass, #pTwoSpecies').empty();
      // $("#pOneHealth").text("Health: " + playerOne.health);
      $('#fightLog').prepend(newHeading);
      $('#button-div').empty();
      let resetButton = $('<button id="resetButton" class="btn btn-success center-block">New Game!</button>');
      $('header').prepend(resetButton);
      resetButton.click(resetGamePressed);
    } else if (playerTwo.health <= 0) {
      newHeading.innerText = `${playerOne.name} Wins!`;
      playerTwo.health = 0;
      $('#pOneName, #pTwoName, #pOneHealth, #pOneClass, #pOneSpecies, #pTwoHealth, #pTwoClass, #pTwoSpecies').empty();
      // $("#pTwoHealth").text("Health: " + playerTwo.health);
      $('#fightLog').prepend(newHeading);
      $('#button-div').empty();
      let resetButton = $('<button id="resetButton" class="btn btn-success center-block">New Game!</button>');
      $('header').prepend(resetButton);
      resetButton.click(resetGamePressed);

    }

  }

}

module.exports = fightPlayers;
