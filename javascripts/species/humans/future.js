"use strict";

var Human = require("../../Human");

var Future = function (name) {
  this.name = name;
  this.habitat = "air";
  this.species = "Future-Sapien";
};

Future.prototype = new Human();


module.exports = Future;
