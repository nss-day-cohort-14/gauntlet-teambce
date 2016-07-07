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


let createPlayerOne = function( selectedClass, selectedSpecies, characterName) {

    //create a loop that checks the class and based off of class it loops through relative array and selects the character module the user wants
    //Needs two loops

    let playerOne;
    if ( selectedClass === "dinosaur" ) {
      for ( let i = 0; i < dinosaurs.length; i++ ) {
        playerOne = new dinosaurs[i](characterName);
        console.log(playerOne);
        return playerOne;
      }
    } else if ( selectedClass === "human" ) {
        for ( let i = 0; i < humans.length; i++ ) {
          playerOne = new humans[i](characterName);
          console.log(playerOne);
          return playerOne;
        }
      }//end of conditional statement

//     //checks if it is a species of Dinosaur class and output results
//     if (selectedSpecies === "Tyranosaurus-Rex") {
//       let playerOne = new Trex(characterName);
//       // console.log(playerOne);
//       // console.log("Name", playerOne.name);
//       // console.log("Class",playerOne.class);
//       // console.log("Attack Type", playerOne.attackType);
//       // console.log("Health", playerOne.health);
//       // console.log("Attack", playerOne.attack);
//       return playerOne;
//     }
//
//     if (selectedSpecies === "Plesiosaurus") {
//       let playerOne = new Plesi(characterName);
//       // console.log(playerOne);
//       // console.log("Name", playerOne.name);
//       // console.log("Class",playerOne.class);
//       // console.log("Attack Type", playerOne.attackType);
//       // console.log("Health", playerOne.health);
//       // console.log("Attack", playerOne.attack);
//       return playerOne;
//     }
//
//     if (selectedSpecies === "Terrordactyl") {
//       let playerOne = new Terror(characterName);
//       // console.log(playerOne);
//       // console.log("Name", playerOne.name);
//       // console.log("Class",playerOne.class);
//       // console.log("Attack Type", playerOne.attackType);
//       // console.log("Health", playerOne.health);
//       // console.log("Attack", playerOne.attack);
//       return playerOne;
//     }
//
//     //checks if it is a species of Human class and output results
//     if (selectedSpecies === "Cromagnon") {
//       let playerOne = new Cromag(characterName);
//       // console.log(playerOne);
//       // console.log("Name", playerOne.name);
//       // console.log("Class",playerOne.class);
//       // console.log("Attack Type", playerOne.attackType);
//       // console.log("Health", playerOne.health);
//       // console.log("Attack", playerOne.attack);
//       return playerOne;
//     }
//
//     if (selectedSpecies === "Future-Sapien") {
//       let playerOne = new Future(characterName);
//       // console.log(playerOne);
//       // console.log("Name", playerOne.name);
//       // console.log("Class",playerOne.class);
//       // console.log("Attack Type", playerOne.attackType);
//       // console.log("Health", playerOne.health);
//       // console.log("Attack", playerOne.attack);
//       return playerOne;
//     }
//
//     if (selectedSpecies === "Homo-Sapien") {
//       let playerOne = new Homo(characterName);
//       // console.log(playerOne);
//       // console.log("Name", playerOne.name);
//       // console.log("Class",playerOne.class);
//       // console.log("Attack Type", playerOne.attackType);
//       // console.log("Health", playerOne.health);
//       // console.log("Attack", playerOne.attack);
//       return playerOne;
//     }
//
};//end  function


//function that randomly generates opponent that is not the same class as the users class
let setOpponent = function ( opponent ) {

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
    return randomDino;
  }

};//end setOpponent function


module.exports = { createPlayerOne, setOpponent };
