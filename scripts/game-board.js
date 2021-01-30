




const GameBoard = (function(){
    let board = [['X','X','X'],['O','X','O'],['X','O','X']];
    let recordMove=(playerMark)=>{

    }
    let makeBoard=()=>{
        const boardDisplay= document.getElementById("game-container");
        for (i = 0; i < 3; i++) {
            const row = document.createElement("div");
            row.setAttribute("id",`${i}`);
            row.innerHTML="row";
            console.log(i);
            
            boardDisplay.appendChild(row);
            
            for(j=0;j<3;j++){
                // Append columns to the rows
                const col = document.createElement("div");
                col.innerHTML="row";
                col.className="cell";
                col.setAttribute("id",`${j}`);
                row.appendChild(col);     
                console.log(j)
            }
          }
    }
    let moveIsValid=()=>{
        // Previous entry not chosen
    }
    let isWinner=(string)=>{
        // checks if the string entered won
        return false;
    }    
    return {makeBoard,moveIsValid}
});


const Player=()=>{
    let name='';
   const makeMove=()=>{
    // make a move 
   }
   const getName=()=>{
       return this.name;
   }
   const setName=(name)=>{
       this.name=name;
   }
    
   return {makeMove,getName,setName}
};

const TicTacToe=((gameBoard)=>{
    let player1WinCount=0;
    let player2WinCount=0;
    let board= gameBoard;
    let startGame=()=>{
        // Takes a board as argument
        // makes a board
        //loadStartScreen() 
        makeBoard();
    }
    let loadStartScreen=()=>{
        //makes the start screen 
        const container = document.getElementById("game-container")
    }
    return{startGame}
})();




const tictactoeBoard = new GameBoard();

tictactoeBoard.makeBoard();

console.log("hello world")