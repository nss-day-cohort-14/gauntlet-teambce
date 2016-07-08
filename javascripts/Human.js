"use strict";

var Player = require("./Player");

var Human = function () {
  this.class = "Human";
  this.intelligience = null;
  this.weapon = null;
  this.healthMin = 85;
  this.healthMax = 125;
  this.attackType = [
    {
      attack: "punch",
      attackMin: 7,
      attackMax: 12
    },
    {
      attack: "eye gouge",
      attackMin: 5,
      attackMax: 9
    },
    {
      attack: "knife",
      attackMin: 8,
      attackMax: 10
    },
    {
      attack: "choke",
      attackMin: 6,
      attackMax: 10
    }

  ];
  this.attackMin = 7;
  this.attackMax = 12;
  this.health = Math.floor(Math.random() * (this.healthMax - this.healthMin + 1)) + this.healthMin;

};

Human.prototype = new Player();

module.exports = Human;
