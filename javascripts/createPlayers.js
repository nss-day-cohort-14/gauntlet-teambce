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


let createPlayerOne = function(selectedSpecies, characterName) {
    // var pOneHead = document.createElement("h1");
    // var pOneHealth = document.createElement("p");
    // var pOneClass = document.createElement("p");
    //create a loop that checks the class and based off of class it loops through relative array and selects the character module the user wants
    //Needs two loops

    //checks if it is a species of Dinosaur class and output results
    if (selectedSpecies === "Tyranosaurus-Rex") {
      let playerOne = new Trex(characterName);
      $("#pOneName").text("Name: " + playerOne.name);
      $("#pOneHealth").text("Health: " + playerOne.health);
      $("#pOneClass").text("Class: " + playerOne.class);
      return playerOne;
    }

    if (selectedSpecies === "Plesiosaurus") {
      let playerOne = new Plesi(characterName);
      $("#pOneName").text("Name: " + playerOne.name);
      $("#pOneHealth").text("Health: " + playerOne.health);
      $("#pOneClass").text("Class: " + playerOne.class);
      return playerOne;
    }

    if (selectedSpecies === "Terrordactyl") {
      let playerOne = new Terror(characterName);
      $("#pOneName").text("Name: " + playerOne.name);
      $("#pOneHealth").text("Health: " + playerOne.health);
      $("#pOneClass").text("Class: " + playerOne.class);
      return playerOne;
    }

    //checks if it is a species of Human class and output results
    if (selectedSpecies === "Cromagnon") {
      let playerOne = new Cromag(characterName);
      $("#pOneName").text("Name: " + playerOne.name);
      $("#pOneHealth").text("Health: " + playerOne.health);
      $("#pOneClass").text("Class: " + playerOne.class);
      return playerOne;
    }

    if (selectedSpecies === "Future-Sapien") {
      let playerOne = new Future(characterName);
      $("#pOneName").text("Name: " + playerOne.name);
      $("#pOneHealth").text("Health: " + playerOne.health);
      $("#pOneClass").text("Class: " + playerOne.class);
      return playerOne;
    }

    if (selectedSpecies === "Homo-Sapien") {
      let playerOne = new Homo(characterName);
      $("#pOneName").text("Name: " + playerOne.name);
      $("#pOneHealth").text("Health: " + playerOne.health);
      $("#pOneClass").text("Class: " + playerOne.class);
      return playerOne;
    }

};//end  function


//function that randomly generates opponent that is not the same class as the users class
let setOpponent = function ( opponent ) {

  var pTwoHead = document.createElement("h1");
  var pTwoHealth = document.createElement("p");
  var pTwoClass = document.createElement("p");

  let randomIndex = Math.floor(Math.random() * 3);
  if ( opponent === "dinosaur" ) {
    // console.log('Your opponent is human.');
    //function that determines a random number 0-2

    //loop through dinosaurs array and selects a random constructor
    let randomHuman = new humans[randomIndex]("Opponent");
    // console.log("Name", randomHuman.name);
    // console.log("Class",randomHuman.class);
    // console.log("Class",randomHuman.species);
    // console.log("Attack Type", randomHuman.attackType);
    // console.log("Health", randomHuman.health);
    // console.log("Attack", randomHuman.attack);
    $("#pTwoName").text("Name: " + randomHuman.name);
    $("#pTwoHealth").text("Health: " + randomHuman.health);
    $("#pTwoClass").text("Class: " + randomHuman.class);
    return randomHuman;

  }

  if ( opponent === "human" ) {
    // console.log('Your opponent is a dinosaur.');

    //loop through dinosaurs array and selects a random constructor
    let randomDino = new dinosaurs[randomIndex]("Opponent");
    // console.log("Name", randomDino.name);
    // console.log("Class",randomDino.class);
    // console.log("Class",randomDino.species);
    // console.log("Attack Type", randomDino.attackType);
    // console.log("Health", randomDino.health);
    // console.log("Attack", randomDino.attack);
    $("#pTwoName").text("Name: " + randomDino.name);
    $("#pTwoHealth").text("Health: " + randomDino.health);
    $("#pTwoClass").text("Class: " + randomDino.class);
    return randomDino;
  }

};//end setOpponent function


module.exports = { createPlayerOne, setOpponent };
