"use strict"
// Dom objects

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const weapons = document.querySelectorAll('.weapon-button');
const gameRound = document.getElementById('gameRound');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');




// Function where the computer will pick a random number between 0-2. 
// And then assign one of the playable choices to the number.

const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

// Function that retreives the players choice.

// const getPlayerChoice = (input) => {
//     input = input.toLowerCase();
    
//     if (input === 'rock' || input === 'paper' || input === 'scissors') {
//         return input;
//     } else {
//         return 'Sorry, not a valid option'
//     };
// };


const playRound = (playerSelection, computerSelection) => {
    // When the game ties.
    if (playerSelection === computerSelection) {
        return 'Game Tied';
    }   // When the player chooses the losing hand.
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Game Lost';
    }   // When the player chooses the winning hand.
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Game Won';
    } else {
        return 'Try Again';
    };
};

// Adding event Listeners to the button elements


weapons.forEach((weapon)=> {
    weapon.addEventListener('click', (e)=> {
        let playerInput = e.target.id;
        e.stopPropagation();
        console.log(playerInput);
        
    }, true);
});















// function tht initiates 5 rounds with the cpu. 
// const game = () => {
//     for (let i = 0; i < 5; i++) {  
//         let computerSelection = getComputerChoice();
//         let playerSelection = getPlayerChoice();
        
        
        
        
//         console.log(`Player chose: ${playerSelection}. CPU chose: ${computerSelection}. ` +
//          playRound(playerSelection, computerSelection));
//     };
// };









