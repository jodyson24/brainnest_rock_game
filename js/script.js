let playerScore = 0
let computerScore = 0

function computerPlay() {
    let randomList = ["rock", "paper", "scissor"]
    let random = randomList[Math.floor(Math.random() * randomList.length)]
    return random;
}


function playRound(computerSelection, playerSelection) {
    if (playerSelection == undefined) {
        console.log("Your input is not a valid input")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore += 1;
        playerScore += 0;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore += 1;
        playerScore += 0;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You Lose! Scissor beats Paper")
        computerScore += 1;
        playerScore += 0;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock")
        computerScore += 0;
        playerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors")
        computerScore += 0;
        playerScore += 1;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You Win! Scissor beats Paper")
        computerScore += 0;
        playerScore += 1;
    }
    else if (playerSelection === computerSelection) {
        console.log("There is a tie - Play Again")
    }
}

function game() {
    let result = ""
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`To play this game, please make an entry of either rock, paper, scissors " `)
        let computerSelection = computerPlay()

        playRound(playerSelection, computerSelection)
        if (playerScore === computerScore) {
            result = "DRAW.... Nobody wins"
        } else if (playerScore > computerScore) {
            result = "PLAYER WINS....... COMPUTER LOSES"
        } else if (playerScore < computerScore) {
            result = "COMPUTER WINS.........PLAYER LOSES"
        }
    }

    console.log(`Player Score ==== ${playerScore}`)
    console.log(`Computer Score ==== ${computerScore}`)
    console.log(result)
}

game()