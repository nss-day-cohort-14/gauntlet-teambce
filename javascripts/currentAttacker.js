"use strict";

var currentAttacker = null;

var setCurrentAttacker = function(player) {
  currentAttacker = player;
};

var getCurrentAttacker = function() {
  return currentAttacker;
};

module.exports = {
  currentAttacker,
  setCurrentAttacker,
  getCurrentAttacker
};
