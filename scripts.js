
let player1 = "";
let player2= "";

console.log(player1);
console.log(player2);

function computerSelection() {
    let numRPC = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    switch(numRPC) {
        case 0:
            player2 = "rock";
            break;

        case 1:
            player2 = "paper";
            break;

        case 2:
            player2 = "scissors";
            break;
      } 

     return;

}

function playerSelection() {

    // let playerChocie = prompt("Choose between Rock,Paper,Scissors");
    // playerChocie = playerChocie.toString().toLowerCase().trim();

    let isCorrect = false;
    while(true){
        playerChocie = prompt("Choose between Rock,Paper,Scissors");
        playerChocie = playerChocie.toString().toLowerCase().trim();
        
        switch(playerChocie) {
            case "rock":
                 player1 = playerChocie;
                 isCorrect = true;
                 break;

            case "paper":
                player1 = playerChocie;
                isCorrect = true;
                break;
        
            case "scissors":
                player1 = playerChocie;
                isCorrect = true;
                break;
        }

        if(isCorrect){
            break;
        }
    }    
}


computerSelection();
playerSelection();
console.log(player1);
console.log(player2);
