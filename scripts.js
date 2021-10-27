
let player1 = "";
let player2= "";


let player1Score = 0;
let player2Score = 0;

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
    const btnRockSel = document.querySelector('#btnRock');
    const btnPaperSel = document.querySelector('#btnPaper');
    const btnScissorsSel = document.querySelector('#btnScissors');

function playerSelection() {


    btnRockSel.addEventListener('click', () => {
        console.log('rock')
         return 'rock';
      });
    btnPaperSel.addEventListener('click', () => {
        console.log('paper');
        return 'paper';
      });
    btnScissorsSel.addEventListener('click', () => {
        console.log('scissors');
        return 'scissors';
      });
       
    }


function gameLogic(player1cho) {

    let player2cho = computerSelection();
        
        //here the game logic 

        if(player1cho == "rock" && player2cho == "rock") {
            return 'Draw!!';
        }
        if(player1cho == "paper" && player2cho == "paper") {   
            return 'Draw!!';
        }
        if(player1cho == "scissors" && player2cho == "scissors") {
            return 'Draw!!';    
        }

        if(player1cho == "rock" && player2cho == "paper") {
            player2Score++;
            console.log("plaaaaaayer 2")
            return 'Player 2 Won';
            
        }
        if(player1cho == "rock" && player2cho == "scissors") {
            player1Score++;
            return 'Player 1 Won';
            
        }
        if(player1cho == "paper" && player2cho == "rock") {
            player1Score++;
            return 'Player 1 Won';
            
        
        }
        if(player1cho == "paper" && player2cho == "scissors") {
            player2Score++;
            return 'Player 2 Won';
            
        
        }
        if(player1cho == "scissors" && player2cho == "paper") {
            player1Score++;
            return 'Player 1 Won';
            
        
        }
        if(player1cho == "scissors" && player2cho == "rock") {
            player2Score++;
            return 'Player 2 Won';
            
        }


}

    function playRound(){


    let player1cho = '';

        btnRockSel.addEventListener('click', () => {
            console.log('rockkkkkkkkkkkkkkkkkkkk')
            
            player1cho = 'rock';
            gameLogic(player1cho);

            console.log(`
            player 1 : ${player1Score}
            player 2 : ${player2Score}`);

             
          });

        btnPaperSel.addEventListener('click', () => {
            console.log('paperjjjjjjj');
            player1cho = 'paper';
            gameLogic(player1cho);

            console.log(`
            player 1 : ${player1Score}
            player 2 : ${player2Score}`);

          });

        btnScissorsSel.addEventListener('click', () => {
            console.log('scissorsjjjjjjjj');
            player1cho = 'scissors';
            gameLogic(player1cho);

            console.log(`
            player 1 : ${player1Score}
            player 2 : ${player2Score}`);
          });


    }

    

    playRound();

