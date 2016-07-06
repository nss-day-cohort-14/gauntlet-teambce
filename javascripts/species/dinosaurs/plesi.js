"use strict";

var Dinosaur = require("../../Dinosaur");

var Plesi = function (name) {
  this.name = name;
  this.habitat = "water";
  this.species = "Plesiosaurus";
};

Plesi.prototype = new Dinosaur();

module.exports = Plesi;