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