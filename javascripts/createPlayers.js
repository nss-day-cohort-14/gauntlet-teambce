"use strict";


const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");

const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");

const Create = require("./createPlayers.js");

let dinosaurs = [ Trex, Terror, Plesi ];
let humans = [ Cromag, Future, Homo ];

//var oneHealthDiv = $('#pOneHealth');
// var twoHealthDiv = $('#pTwoHealth');

let createPlayerOne = function( selectedClass, selectedSpecies, characterName) {

  if ( selectedClass === "dinosaur" ) {
    let store = selectPlayer(dinosaurs, selectedSpecies, characterName);
    return store;
  }
  else if ( selectedClass === "human" ) {
    let store = selectPlayer(humans, selectedClass, characterName);
    return store;
  }

};//end  function


let selectPlayer = function( classID, selectedClass, characterName ) {

      let playerOne;
        //loop through dinosaur array and find the user selected species
        for ( let i = 0; i < classID.length; i++ ) {
          //instatiate new object and set to player one
          playerOne = new classID[i](characterName);
          //write info from the player object to the page
          $("#pOneName").text("Name: " + playerOne.name);
          $("#pOneHealth").text("Health: " + playerOne.health);
          $("#pOneClass").text("Class: " + playerOne.class);
          return playerOne;
        }

};//end selectPlayer



//function that randomly generates opponent that is not the same class as the users class
let setOpponent = function ( opponent ) {

  var pTwoHead = document.createElement("h1");
  var pTwoHealth = document.createElement("p");
  var pTwoClass = document.createElement("p");

  //function that determines a random number 0-2
  let randomIndex = Math.floor(Math.random() * 3);


  if ( opponent === "dinosaur" ) {
    //loop through dinosaurs array and selects a random constructor
    let randomHuman = new humans[randomIndex]("Opponent");
    //prints opponents object info to document
    $("#pTwoName").text("Name: " + randomHuman.name);
    $("#pTwoHealth").text("Health: " + randomHuman.health);
    $("#pTwoClass").text("Class: " + randomHuman.class);
    return randomHuman;
  }

  if ( opponent === "human" ) {
    //loop through dinosaurs array and selects a random constructor
    let randomDino = new dinosaurs[randomIndex]("Opponent");
    //prints opponents object info to document
    $("#pTwoName").text("Name: " + randomDino.name);
    $("#pTwoHealth").text("Health: " + randomDino.health);
    $("#pTwoClass").text("Class: " + randomDino.class);
    return randomDino;
  }

};//end setOpponent function


module.exports = { createPlayerOne, setOpponent };
