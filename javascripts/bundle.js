(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Player = require("./Player");

var Dinosaur = function (name) {
  this.name = name;
  this.strength = null;
  this.mutation = null;
  this.attackType = "bite";
};

Dinosaur.prototype = new Player();

module.exports = Dinosaur;
},{"./Player":3}],2:[function(require,module,exports){
"use strict";

var Player = require("./Player");

var Human = function (name) {
  this.name = name;
  this.intelligience = null;
  this.attackType = "punch";
  this.weapon = null;
};

Human.prototype = new Player();

module.exports = Human;


},{"./Player":3}],3:[function(require,module,exports){
"use strict";

var Player = function () {
  this.class = null;
  this.species = null;
  this.health = 100;
  this.attack = 10;
  this.defense = 10;
  this.attackType = null;
  this.habitat = null;
  this.name = null;
};

module.exports = Player;
},{}],4:[function(require,module,exports){
"use strict";

var Human = require("./Human");
var Dinosaur = require("./Dinosaur");

var bender = new Dinosaur("Bender");
var domi = new Human("Dominic");

console.dir(bender);
console.dir(domi);

},{"./Dinosaur":1,"./Human":2}]},{},[4]);
