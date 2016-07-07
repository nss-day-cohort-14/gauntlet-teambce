"use strict";

const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");

const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");

let dinosaurs = [ Trex, Terror, Plesi ];
let humans = [ Cromag, Future, Homo ];
let disabledOption = '<option selected="true" disabled="true">Select type:</option>';


//Grabs the user selected class loads relevant species
let loadClass = function() {
  let selectedClass = $('#class-select').val();
  // console.log(selectedClass);
  $('#species-output').empty();
  $('#species-output').append(disabledOption);
  loadSpeciesOption(selectedClass);
};


//Loops through array of species that the user selects and appends each related species to select drop down
let loadSpeciesOption = function( userSpecies ) {
  if ( userSpecies === "dinosaur" ) {
    for (let i = 0; i < dinosaurs.length; i++) {
      // console.log(dinosaurs[i]);
      let currentSpecies = new dinosaurs[i]();
      currentSpecies = currentSpecies.species;
      let currentOption = $(`<option value=${currentSpecies}>${currentSpecies}</option>`);
      $('#species-output').append(currentOption);
    }
  } else {
    for (let i = 0; i < humans.length; i++) {
      let currentSpecies = new humans[i]();
      currentSpecies = currentSpecies.species;
      let currentOption = $(`<option>${currentSpecies}</option>`);
      $('#species-output').append(currentOption);
    }
  }
};//end loadSpeciesOption


//Prints user selected character and randomly generate character
let printPlayers = function() {
  let characterName = $('#char-name').val();
  let selectedClass = $('#class-select').val();
  let selectedSpecies = $('#species-output').val();

  //checks if any of the fields are empty
  if (selectedSpecies === "" || selectedClass === null || selectedSpecies === null) {

    if ($('#char-name').val() !== "") {
       characterName = $('#char-name').val();
    } else {
      window.alert("Please enter a name");
    }

    if ($('#class-select').val() !== null) {
      selectedClass = $('#class-select').val();
    } else {
      window.alert("Please select a class");
    }

    if ($('#species-output').val() !== null) {
      selectedSpecies = $('#species-output').val();
    } else {
      window.alert("Please select a species");
    }
  }  else {

    //checks if it is a species of Dinosaur class and output results
    if (selectedSpecies === "Tyranosaurus-Rex") {
      let playerOne = new Trex(characterName);
      console.log(playerOne);
      console.log("Name", playerOne.name);
      console.log("Class",playerOne.class);
      console.log("Attack Type", playerOne.attackType);
      console.log("Health", playerOne.health);
      console.log("Attack", playerOne.attack);
    }

    if (selectedSpecies === "Plesiosaurus") {
      let playerOne = new Plesi(characterName);
      console.log(playerOne);
      console.log("Name", playerOne.name);
      console.log("Class",playerOne.class);
      console.log("Attack Type", playerOne.attackType);
      console.log("Health", playerOne.health);
      console.log("Attack", playerOne.attack);
    }

    if (selectedSpecies === "Terrordactyl") {
      let playerOne = new Terror(characterName);
      console.log(playerOne);
      console.log("Name", playerOne.name);
      console.log("Class",playerOne.class);
      console.log("Attack Type", playerOne.attackType);
      console.log("Health", playerOne.health);
      console.log("Attack", playerOne.attack);
    }

    //checks if it is a species of Human class and output results
    if (selectedSpecies === "Cromagnon") {
      let playerOne = new Cromag(characterName);
      console.log(playerOne);
      console.log("Name", playerOne.name);
      console.log("Class",playerOne.class);
      console.log("Attack Type", playerOne.attackType);
      console.log("Health", playerOne.health);
      console.log("Attack", playerOne.attack);
    }

    if (selectedSpecies === "Future-Sapien") {
      let playerOne = new Future(characterName);
      console.log(playerOne);
      console.log("Name", playerOne.name);
      console.log("Class",playerOne.class);
      console.log("Attack Type", playerOne.attackType);
      console.log("Health", playerOne.health);
      console.log("Attack", playerOne.attack);
    }

    if (selectedSpecies === "Homo-Sapien") {
      let playerOne = new Homo(characterName);
      console.log(playerOne);
      console.log("Name", playerOne.name);
      console.log("Class",playerOne.class);
      console.log("Attack Type", playerOne.attackType);
      console.log("Health", playerOne.health);
      console.log("Attack", playerOne.attack);
    }
    //determines a random opponent based on user selection
    setOpponent(selectedClass);
  }

};//end printPlayers function


//function that randomly generates opponent that is not the same class as the users class
let setOpponent = function ( opponent ) {

  if ( opponent === "dinosaur" ) {
    console.log('Your opponent is human.');
    //function that determines a random number 0-2
    let randomIndex = Math.floor(Math.random() * 3);

    //loop through dinosaurs array and selects a random constructor
    let randomHuman = new humans[randomIndex]("Opponent");
    console.log("Name", randomHuman.name);
    console.log("Class",randomHuman.class);
    console.log("Attack Type", randomHuman.attackType);
    console.log("Health", randomHuman.health);
    console.log("Attack", randomHuman.attack);

  } else {
    console.log('Your opponent is a dinosaur.');

    //function that determines a random number 0-2
    let randomIndex = Math.floor(Math.random() * 3);

    //loop through dinosaurs array and selects a random constructor
    let randomDino = new dinosaurs[randomIndex]("Opponent");
    console.log("Name", randomDino.name);
    console.log("Class",randomDino.class);
    console.log("Attack Type", randomDino.attackType);
    console.log("Health", randomDino.health);
    console.log("Attack", randomDino.attack);
  }

};//end setOpponent function


//prints characters to DOM
let printToDom = function(item) {
  let element = $('#element');
  element.append(item);
};//end print to DOM


//Getter function we can possibly export to another file to print
let getPlayerOne = function ( player ) {
  return player;
};//end setPlayerOne function


//Event listeners for class change drop down
$('#class-select').change( loadClass );

//Event listener for create button
$('#create-button').click( printPlayers );


// var bender = new Trex("Bender");
// var domi = new Terror("Dominic");
// var ceo = new Plesi("Tim");
//
// var steve = new Cromag("Steve");
// var joe = new Homo("Joe");
// var john = new Future("John");
//
// console.dir(bender);
// console.dir(domi);
// console.dir(ceo);
// console.dir(steve);
// console.dir(joe);
// console.dir(john);
