function getComputerChoice() {
    return Math.floor(Math.random()*3)
};

function getPlayerChoice() {
    let flag = true;
    let playerChoice;
    while(flag) {
        let playerChoiceStr = prompt("chose one of rock, paper, or scissors:");
        switch (playerChoiceStr.toLowerCase()) {
            case "rock":
                playerChoice = 0;
                flag=false;
                break;
            case "paper":
                playerChoice = 1;
                flag=false;
                break;
            case "scissors":
                playerChoice = 2;
                flag=false;
                break;
            default:
                console.log("invalid choice");
        };
    };
    return playerChoice
};

function getResult(playerChoice, computerChoice) {
    switch((playerChoice-computerChoice+3) % 3) { //Hacky modular arithmetic because % returns negative number WHICH IS SO STUPID FU JAVASCRIPT
        case 0 :
            return "draw"
        case 1 :
            return "You Win!"
        case 2 :
            return "You Lose!"
        default:
            console.log("something has gone horribly wrong");
    };
};

function main() {
    for(let i=0; i<5;i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(getResult(playerChoice, computerChoice));
    }
}