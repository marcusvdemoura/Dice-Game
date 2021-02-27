"use strict";

// player 1 block

const playerOneBlock = document.querySelector(".leftBlock");

// player 2 block

const playerTwoBlock = document.querySelector(".rightBlock");

// button new game

const btnNewGame = document.querySelector(".btnNewGame");

// path and getter for images
const imagePath = "images/";
const diceImage = document.querySelector(".diceImage");

// total points for player one
const totalCountOne = document.querySelector(".pointsCountOne");

//total points for player two
const totalCountTwo = document.querySelector(".pointsCountTwo");

// button roll dice
const rollDice = document.querySelector(".rollDiceButton");

// button hold
const holdBtn = document.querySelector(".holdPoint");

// the current points during the play (player one)
const getPointsOne = document.querySelector(".currentOne");

// the current points during the play (player two)
const getPointsTwo = document.querySelector(".currentTwo");

// who's playing

let isPlayerOne = true;

// total points during the game for player one
let totalPointsOne = 0;

// total points during the game for player one
let totalPointsTwo = 0;

let sumPointsPlayerOne = 0;
let sumPointsPlayerTwo = 0;

const getRandomImage = () => {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(`random number ${randomNumber}`);

  diceImage.src = imagePath + "dice-" + randomNumber + ".png";

  if (isPlayerOne) {
    if (randomNumber !== 1) {
      sumPointsPlayerOne += randomNumber;
      console.log(`sumPerPlay (player 1) ${sumPointsPlayerOne}`);
      getPointsOne.textContent = randomNumber;
      totalCountOne.textContent = sumPointsPlayerOne;
    } else if (randomNumber === 1) {
      console.log(`Dice N. 1 : zero the count!`);
      isPlayerOne = false;
      getPointsOne.textContent = 0;
    }
  } else if (!isPlayerOne) {
    if (randomNumber !== 1) {
      sumPointsPlayerTwo += randomNumber;
      console.log(`sumPerPlay (player 2) ${sumPointsPlayerTwo}`);
      getPointsTwo.textContent = randomNumber;
      totalCountTwo.textContent = sumPointsPlayerTwo;
    } else if (randomNumber === 1) {
      console.log(`Dice N. 1 : zero the count!`);
      isPlayerOne = true;
      getPointsTwo.textContent = 0;
    }
  }
  if (sumPointsPlayerOne >= 100) {
    playerOneBlock.style.backgroundColor = "#222";
    removingEventListener();
  } else if (sumPointsPlayerTwo >= 100) {
    playerTwoBlock.style.backgroundColor = "#222";
    removingEventListener();
  }
};

const holdingValue = function () {
  if (isPlayerOne) {
    console.log("Player 1 pressed hold button");
    getPointsOne.textContent = 0;
    isPlayerOne = false;
  } else if (!isPlayerOne) {
    console.log("Player 2 pressed hold button");
    getPointsTwo.textContent = 0;
    isPlayerOne = true;
  }
};

rollDice.addEventListener("click", getRandomImage);

holdBtn.addEventListener("click", holdingValue);

const removingEventListener = () => {
  rollDice.removeEventListener("click", getRandomImage);
  holdBtn.removeEventListener("click", holdingValue);
};

btnNewGame.addEventListener("click", function () {
  console.clear();
  console.log("Welcome to a new game.");
  totalCountOne.textContent = 0;
  totalCountTwo.textContent = 0;
  getPointsTwo.textContent = 0;
  getPointsOne.textContent = 0;
  isPlayerOne = true;
  sumPointsPlayerOne = 0;
  sumPointsPlayerTwo = 0;
  playerOneBlock.style.backgroundColor = "#a3d2ca";
  playerTwoBlock.style.backgroundColor = "#5eaaa8";
  rollDice.addEventListener("click", getRandomImage);
  holdBtn.addEventListener("click", holdingValue);
});
