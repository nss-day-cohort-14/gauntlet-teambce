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
},{"./Player":3}],2:[function(require,module,exports){
"use strict";

var Player = require("./Player");

var Human = function () {
  this.class = "Human";
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

  }

};//end printPlayers function


let getPlayerOne = function ( player ) {
  return player;
};//end setPlayerOne function


//Event listeners for class change drop down
$('#class-select').change( loadClass );

//Event listener for create button
$('#create-button').click( printPlayers );



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

},{"./species/dinosaurs/plesi":5,"./species/dinosaurs/terror":6,"./species/dinosaurs/trex":7,"./species/humans/cromag":8,"./species/humans/future":9,"./species/humans/homo":10}],5:[function(require,module,exports){
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
  this.species = "Tyranosaurus-Rex";
  // this.varName = "Trex"
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
  this.species = "Future-Sapien";
};

Future.prototype = new Human();


module.exports = Future;

},{"../../Human":2}],10:[function(require,module,exports){
"use strict";

var Human = require("../../Human");

var Homo = function (name) {
  this.name = name;
  this.habitat = "water";
  this.species = "Homo-Sapien";
};

Homo.prototype = new Human();

module.exports = Homo;

},{"../../Human":2}]},{},[4])


//# sourceMappingURL=bundle.js.map
