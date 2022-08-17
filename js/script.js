let playerScore = 0
let computerScore = 0

let playerSelection = prompt("To play this game, please make an entry of eithr " / Rock / ", " / Paper / ", " / Scissor / " ")
let computerSelection = computerPlay()

function computerPlay() {
    let randomList = ["rock", "paper", "scissor"]
    let random = randomList[Math.floor(Math.random() * randomList.length)]

    // console.log(random)
    return random;
}


function playRound(computerSelection, playerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore += 1;
        playerScore += 0;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore += 1;
        playerScore += 0;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
        console.log("You Lose! Scissor beats Paper")
        computerScore += 1;
        playerScore += 0;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock")
        computerScore += 0;
        playerScore += 1;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors")
        computerScore += 0;
        playerScore += 1;
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper") {
        console.log("You Win! Scissor beats Paper")
        computerScore += 0;
        playerScore += 1;
    }
    else if (playerSelection.toLowerCase() === computerSelection) {
        console.log("There is a tie - Play Again")
    }
}

function game() {
    let result = ""
    for (let i = 0; i < 5; i++) {

        playRound()
        if (playerScore === computerScore) {
            result = "DRAW.... Nobody wins"
        } else if (playerScore > computerScore) {
            result = "PLAYER WINS....... COMPUTER LOSES"
        } else if (playerScore < computerScore) {
            result = "COMPUTER WINS.........PLAYER LOSES"
        }
    }

    console.log(result)
}

game()