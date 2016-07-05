"use strict";

var Player = require("./Player");

var Dinosaur = function (name) {
  this.name = name;
  this.strength = null;
  this.mutation = null;
  this.attackType = "bite";
};

Dinosaur.prototype = new Player();

module.exports = Dinosaur;