/*
1. function getComputerChoice that randomly returns 
rock, paper, or scissor.

2. write function that takes player's choice

3. Play a round of R,P,S using two paramters (playerSelection)
and (computerSelection) and then returns a string that declares
the winner.

 ** Make playerSelection case-insensitive.
 **Return the results of the function playRockPaperScissors()

 4. Write a new function called game() with playRound inside
 so that five rounds are played and a score is kept with a 
 winner and loser.

**Use console.log to display winner with results
**Use prompt to get input from user.
*/
let computerChoice, playerChoice, winner, playerScore = 0, computerScore = 0;

function getComputerSelection () {
    let randomNum = (Math.floor(Math.random() * 9) + 1)
    if (randomNum < 4)
        computerChoice = "ROCK";
    else if (randomNum < 7)
        computerChoice = "PAPER";
    else 
        computerChoice = "SCISSORS";
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerSelection () {
    playerChoice = prompt('Rock, Paper, Scissors...SHOOT!');
    playerChoice = playerChoice.toUpperCase();
    console.log(playerChoice);
    return playerChoice;
}

function playRPS(computer, player) {
    if (computer === "ROCK" && player === "PAPER")
        return 1;
    else if (computer === "PAPER" && player === "SCISSORS")
        return 1;
    else if (computer ==="SCISSORS" && player === "ROCK")
        return 1;
    else if (player === "ROCK" && computer === "PAPER")
        return 2;
    else if (player === "PAPER" && computer === "SCISSORS")
        return 2;
    else if (player ==="SCISSORS" && computer === "ROCK")
        return 2;
    else 
        return 3;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerSelection();
        playerChoice = getPlayerSelection();
        roundWinner = playRPS(computerChoice, playerChoice);

        if (roundWinner == 1) {
            playerScore ++;
        }
        else if (roundWinner == 2) {
            computerScore ++;
        }
    }
    console.log(`Score...Player:${playerScore} Computer:${computerScore}`)
    if (playerScore > computerScore)
        console.log("Player Wins!");
    else if (computerScore > playerScore)
        console.log("Computer Wins!");
    else 
        console.log ("Draw!");
}

playGame();





