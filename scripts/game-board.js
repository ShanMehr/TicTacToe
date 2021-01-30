const GameBoard = (function(){
    let board = [['X','X','X'],['O','X','O'],['X','O','X']];
    let recordMove=(playerMark)=>{

    }
    let makeBoard=()=>{
        const window= document.getElementById("container");
        const boardDisplay= document.createElement("div");
        boardDisplay.setAttribute("id","game-input-container");
        window.appendChild(boardDisplay);
        const container = document.createElement("div");        
        container.setAttribute("id","game-container");
        boardDisplay.appendChild(container);
        for (i = 0; i < 3; i++) {
            const row = document.createElement("div");
            row.setAttribute("id",`row-${i}`);
            row.className="board-row";
                       
            container.appendChild(row);
            
            for(j=0;j<3;j++){
                // Append columns to the rows
                const col = document.createElement("div");
                col.innerHTML=`row-${i}-col${j}`;
                
                col.className="board-col";
                col.setAttribute("id",`${j}`);
                row.appendChild(col);     
                
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
   const getName=()=>{col.innerHTML=`X`;
   }
   const setName=(name)=>{
       this.name=name;
   }
    
   return {makeMove,getName,setName}
};

const TicTacToe=(function(){
    let player1WinCount=0;
    let player2WinCount=0;
    const board = new GameBoard();
    let startGame=()=>{       
        board.makeBoard();

    }
    let loadStartScreen=()=>{
        //makes the start screen 
        const container = document.getElementById("game-input-container");
    }   
    return{startGame}
});



/*
const tictactoeBoard = new GameBoard();

tictactoeBoard.makeBoard();
*/
let game = new TicTacToe();
game.startGame();
console.log("hello world");