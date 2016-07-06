"use strict";

var Dinosaur = require("../../Dinosaur");

var Terror = function (name) {
  this.name = name;
  this.habitat = "air";
  this.species = "Terrordactyl";
};

Terror.prototype = new Dinosaur();

module.exports = Terror;