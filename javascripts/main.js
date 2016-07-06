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
      let currentOption = $(`<option>${currentSpecies}</option>`);
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

//



//Event listeners for class change drop down
$('#class-select').change( loadClass );







//Function which grabs character name and passes it to next function


//





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
