"use strict";

// On load, set currentAttacker to null
var currentAttacker = null;

// Set currentAttacker
var setCurrentAttacker = function(player) {
  currentAttacker = player;
};

// Get currentAttacker
var getCurrentAttacker = function() {
  return currentAttacker;
};

// Export
module.exports = {
  currentAttacker,
  setCurrentAttacker,
  getCurrentAttacker
};
