"use strict";

const Trex = require("./species/dinosaurs/trex");
const Terror = require("./species/dinosaurs/terror");
const Plesi = require("./species/dinosaurs/plesi");

const Cromag = require("./species/humans/cromag");
const Future = require("./species/humans/future");
const Homo = require("./species/humans/homo");

const Create = require("./createPlayers.js");

const fightPlayers = require('./fightPlayers');

const currentAttacker = require('./currentAttacker');

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
  if (characterName === "" || selectedClass === null || selectedSpecies === null) {

    if (characterName === "") {
      window.alert("Please enter a name");
    }

    if (selectedClass === null) {
      window.alert("Please select a class");
    }

    if (selectedSpecies === null) {
      window.alert("Please select a species");
    }
    return;
  }
  //determines a random opponent based on user selection
  let playerOne = Create.createPlayerOne(selectedClass, selectedSpecies, characterName);
  currentAttacker.setCurrentAttacker(playerOne);
  var playerTwo = Create.setOpponent(selectedClass);
  $('#top-form').hide();
  $("#pOneCard").show();
  $("#pTwoCard").show();
  $('#button-div').append('<button id="attack-button" class="btn btn-primary center-block btn-danger">Attack!</button>');
  $('#attack-button').click(function() {
    fightPlayers(playerOne, playerTwo);
  });

  // console.log("playerOne", playerOne);
  // console.log("playerTwo", playerTwo);

};//end of printPlayers


//Event listeners for class change drop down
$('#class-select').change( loadClass );

//Event listener for create button
$('#create-button').click( printPlayers );
