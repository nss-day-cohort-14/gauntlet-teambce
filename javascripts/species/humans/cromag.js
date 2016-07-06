"use strict";

var Human = require("../../Human");

var Cromag = function (name) {
  this.name = name;
  this.habitat = "land";
  this.species = "Cromagnon";
};

Cromag.prototype = new Human();

module.exports = Cromag;