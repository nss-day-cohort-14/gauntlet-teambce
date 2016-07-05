(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Player = require("./Player");

var Dinosaur = function () {
  this.class = "Dinosaur";
  this.strength = null;
  this.mutation = null;
  this.attackType = "bite";
};

Dinosaur.prototype = new Player();

module.exports = Dinosaur;
},{"./Player":4}],2:[function(require,module,exports){
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


},{"./Player":4}],3:[function(require,module,exports){
"use strict";

var Trex = require("./species/dinosaurs/trex");
var Terror = require("./species/dinosaurs/terror");
var Plesi = require("./species/dinosaurs/plesi")

var Cromag = require("./species/humans/cromag");
var Future = require("./species/humans/future");
var Homo = require("./species/humans/homo")

var bender = new Trex("Bender");
var domi = new Terror("Dominic");
var ceo = new Plesi("Tim")

var steve = new Cromag("Steve");
var joe = new Homo("Joe");
var john = new Future("John");

console.dir(bender);
console.dir(domi);
console.dir(ceo);
console.dir(steve);
console.dir(joe);
console.dir(john);
},{"./species/dinosaurs/plesi":5,"./species/dinosaurs/terror":6,"./species/dinosaurs/trex":7,"./species/humans/cromag":8,"./species/humans/future":9,"./species/humans/homo":10}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";

var Dinosaur = require("../../Dinosaur");

var Plesi = function (name) {
  this.name = name;
  this.habitat = "water";
  this.species = "Plesiosaurus";
};

Plesi.prototype = new Dinosaur();

module.exports = Plesi;
},{"../../Dinosaur":1}],6:[function(require,module,exports){
"use strict";

var Dinosaur = require("../../Dinosaur");

var Terror = function (name) {
  this.name = name;
  this.habitat = "air";
  this.species = "Terrordactyl";
};

Terror.prototype = new Dinosaur();

module.exports = Terror;
},{"../../Dinosaur":1}],7:[function(require,module,exports){
"use strict";

var Dinosaur = require("../../Dinosaur");

var Trex = function (name) {
  this.name = name;
  this.habitat = "land";
  this.species = "Tyranosaurus Rex";
};

Trex.prototype = new Dinosaur();

module.exports = Trex;
},{"../../Dinosaur":1}],8:[function(require,module,exports){
"use strict";

var Human = require("../../Human");

var Cromag = function (name) {
  this.name = name;
  this.habitat = "land";
  this.species = "Cromagnon";
};

Cromag.prototype = new Human();

module.exports = Cromag;
},{"../../Human":2}],9:[function(require,module,exports){
"use strict";

var Human = require("../../Human");

var Future = function (name) {
  this.name = name;
  this.habitat = "air";
  this.species = "Future Sapien";
};

Future.prototype = new Human();


module.exports = Future;
},{"../../Human":2}],10:[function(require,module,exports){
"use strict";

var Human = require("../../Human");

var Homo = function (name) {
  this.name = name;
  this.habitat = "water";
  this.species = "Homo Sapien";
};

Homo.prototype = new Human();

module.exports = Homo;
},{"../../Human":2}]},{},[3]);
