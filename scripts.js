
let player1 = "";
let player2= "";

console.log(player1);
console.log(player2);

function computerPlay() {
    let numRPC = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    switch(numRPC) {
        case 0:
            player2 = "Rock";
            break;

        case 1:
            player2 = "Paper";
            break;

        case 2:
            player2 = "Scissors";
            break;
      } 

     return;

}

computerPlay();
console.log(player2)
