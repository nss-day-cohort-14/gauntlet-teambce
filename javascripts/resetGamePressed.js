"use strict";

var resetGamePressed = function() {

  // Remove new game button
  $("#resetButton").remove();

  // Clear class-select
  $('#class-select').val("");

  // Clear class-select
  $('#char-name').val("");

  // Clear class-select
  $('#species-output').val("");

  // Hide players
  $("#pOneCard").hide();
  $("#pTwoCard").hide();

  // Clear fightLog
  $("#fightLog").empty();

  // Show top-form
  $('#top-form').show();

  // Show game title
  $('#headings').show();
};

module.exports = resetGamePressed;
