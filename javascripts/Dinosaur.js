"use strict";

var Player = require("./Player");

var Dinosaur = function () {
  this.class = "Dinosaur";
  this.strength = null;
  this.mutation = null;
  this.attackType = "bite";
};

Dinosaur.prototype = new Player();

module.exports = Dinosaur;