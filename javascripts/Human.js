"use strict";

var Player = require("./Player");

var Human = function () {
  this.class = "Human";
  this.intelligience = null;
  this.attackType = "punch";
  this.weapon = null;
};

Human.prototype = new Player();

module.exports = Human;
