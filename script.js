function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    if(choice === 0) return "Scissors";
    else if(choice === 1) return "Rock";
    else return "Paper";
}

function playRound(playerSelection, computerSelection){
    const pChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    const cChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.substr(1).toLowerCase();

    const win = `You win! ${pChoice} beats ${cChoice}.`;
    const lose = `You lose! ${cChoice} beats ${pChoice}.`;

    if(pChoice === cChoice) return "It's a tie!";

    switch(pChoice){
        case "Rock":
            if(cChoice === "Scissors") return win;
            else return lose;
            break;
        case "Scissors":
            if(cChoice === "Paper") return win;
            else return lose;
            break;
        case "Paper":
            if(cChoice === "Rock") return win;
            else return lose;
            break;
        default:
            return "That was not a valid choice, please try again.";
    }
}

/*function game(){
    let pWins = 0; //Player wins
    let cWins = 0; //Computer wins
    let pChoice;
    let result;
    for(let i = 0; i< 5; ++i){
        pChoice = prompt("Choose Rock, Paper, or Scissors: ");
        result = playRound(pChoice, computerPlay());
        if(result.charAt(4) === 'w') pWins++;
        else if(result.charAt(4) === 'l') cWins++;
        console.log(result);
    }
    if(pWins>cWins) console.log("Player Wins!");
    else if(cWins>pWins) console.log("Computer Wins!");
    else console.log("It's a tie!");
}

game();*/