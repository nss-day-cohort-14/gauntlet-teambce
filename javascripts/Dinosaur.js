"use strict";

var Player = require("./Player");

var Dinosaur = function () {
  this.class = "Dinosaur";
  this.strength = null;
  this.mutation = null;
  this.attackType = [
    {
      attack: "bite",
      attackMin: 7,
      attackMax: 12
    },
    {
      attack: "growl",
      attackMin: 5,
      attackMax: 9
    },
    {
      attack: "tailwhip",
      attackMin: 8,
      attackMax: 10
    },
    {
      attack: "slash",
      attackMin: 6,
      attackMax: 10
    }

  ];
  this.healthMin = 85;
  this.healthMax = 125;
  this.health = Math.floor(Math.random() * (this.healthMax - this.healthMin + 1)) + this.healthMin;

};

Dinosaur.prototype = new Player();

module.exports = Dinosaur;
