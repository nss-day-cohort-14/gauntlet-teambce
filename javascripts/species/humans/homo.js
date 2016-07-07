"use strict";

var Human = require("../../Human");

var Homo = function (name) {
  this.name = name;
  this.habitat = "water";
  this.species = "Homo-Sapien";
};

Homo.prototype = new Human();

module.exports = Homo;
