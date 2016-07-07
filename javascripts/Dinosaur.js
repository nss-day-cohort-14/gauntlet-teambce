"use strict";

var Player = require("./Player");

var Dinosaur = function () {
  this.class = "Dinosaur";
  this.strength = null;
  this.mutation = null;
  this.attackType = "bite";
  this.healthMin = 85;
  this.healthMax = 125;
  this.attackMin = 7;
  this.attackMax = 12;
  this.health = Math.floor(Math.random() * (this.healthMax - this.healthMin + 1)) + this.healthMin;
  this.attack = function() {
    return Math.floor(Math.random() * (this.attackMax - this.attackMin + 1)) + this.attackMin;
  };
};

Dinosaur.prototype = new Player();

module.exports = Dinosaur;
