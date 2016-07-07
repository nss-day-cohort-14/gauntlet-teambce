"use strict";

var Player = function () {
  this.class = null;
  this.species = null;
  this.health = 100;
  // this.health = Math.floor(Math.random() * (this.healthMax - this.healthMin + 1)) + this.healthMin;
  // this.attack = function() {
  //   return Math.floor(Math.random() * (this.attackMax - this.attackMin + 1)) + this.attackMin;
  // }
  this.attack = 10;
  this.defense = 10;
  this.attackType = null;
  this.habitat = null;
  this.name = null;
};

module.exports = Player;
