"use strict";

var Player = require("./Player");

var Human = function (name) {
  this.name = name;
  this.intelligience = null;
  this.attackType = "punch";
  this.weapon = null;
};

Human.prototype = new Player();

module.exports = Human;

