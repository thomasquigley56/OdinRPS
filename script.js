function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    if(choice === 0) return "Scissors";
    else if(choice === 1) return "Rock";
    else return "Paper";
}

function RoundRPS(playerSelection, computerSelection){
    const pChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    const cChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.substr(1).toLowerCase();

    const win = `${pChoice} beats ${cChoice}. You win!`;
    const lose = `${cChoice} beats ${pChoice}. You lose!`;

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

