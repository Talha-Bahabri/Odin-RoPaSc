
let player1 = "";
let player2= "";

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

     
    return player2;   

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
    return player1;  
}

function game() {
    let player1Score = 0;
    let player2Score = 0;

    let player1cho = "";
    let player2cho = "";

    let round = 0;

    while(player1Score <= 5  || player2Score <= 5) {
        round++;
        console.log(`round : ${round}`);
        console.log(`${player1cho} vs ${player2cho}`);
        console.log(`
        player 1 : ${player1Score}
        player 2 : ${player2Score}`);
        
        player1cho = playerSelection();
        player2cho = computerSelection();

        // here the game logic 

        if(player1cho == "rock" && player2cho == "rock") {
            continue;
        }
        if(player1cho == "paper" && player2cho == "paper") {
            continue;
        }
        if(player1cho == "scissors" && player2cho == "scissors") {
            continue;
        }


        if(player1cho == "rock" && player2cho == "paper") {
            player2Score++;
            continue;
        }
        if(player1cho == "rock" && player2cho == "scissors") {
            player1Score++;
            continue;
        }


        if(player1cho == "paper" && player2cho == "rock") {
            player1Score++;
            continue;
        }
        if(player1cho == "paper" && player2cho == "scissors") {
            player2Score++;
            continue;
        }


        if(player1cho == "scissors" && player2cho == "paper") {
            player1Score++;
            continue;
        }
        if(player1cho == "scissors" && player2cho == "rock") {
            player2Score++;
            continue;
        }



    }



}


computerSelection();
playerSelection();

game();


