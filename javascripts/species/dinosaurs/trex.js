"use strict";

var Dinosaur = require("../../Dinosaur");

var Trex = function (name) {
  this.name = name;
  this.habitat = "land";
  this.species = "Tyranosaurus-Rex";
  // this.varName = "Trex"
};

Trex.prototype = new Dinosaur();

module.exports = Trex;
