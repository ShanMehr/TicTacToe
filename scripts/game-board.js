


const GameBoard = (function(){
    const board = [];
    const recordMove=(playerMark)=>{
    }
    const makeBoard=()=>{

        // Creates the board
        const window= document.getElementById("container");

        const boardDisplay= document.createElement("div");
        boardDisplay.setAttribute("id","game-input-container");
        window.appendChild(boardDisplay);

        const container = document.createElement("div");        
        container.setAttribute("id","game-container");
        boardDisplay.appendChild(container);

        for (i = 0; i < 3; i++) {
            /*
            const row = document.createElement("div");
            row.setAttribute("id",`row-${i}`);
            row.className="board-row";
                       
            container.appendChild(row);
            */
            const boardRow=[];

            for(j=0;j<3;j++){
                // Append columns to the rows
                const col = document.createElement("div");
                //col.innerHTML=`row-${i}-col${j}`;
                col.className="board-col";
                col.setAttribute("id",`row-${i}-col${j}`);
                container.appendChild(col);     
                boardRow.push(col);
            }
            board.push(boardRow);
            
          }
          console.log(board);
    }
    const moveIsValid=()=>{
        // Previous entry not chosen
    }
    const isWinner=(string)=>{
        // checks if the string entered won
        return false;
    }

    const addListeners=(string)=>{
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                board[i][j].addEventListener("click",displayMove(string));                
            }
        }
    }
    const displayMove=(e,string)=>{
        if(e.innerHTML!==""){
            return false;
        }
        else{
            e.innerHTML=string;
            removeListenersFromCells();
            return true;

        }
    }

    const removeListenersFromCells=()=>{
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                board[i][j].removeEventListener("click")             
            }
        }
    }
    return {makeBoard,moveIsValid,recordMove,addListeners}
});


const Player=(board)=>{
    const gameBoard=board
    let name='';
    let marker="";
   const getName=()=>{
       return name;
   }
   const setName=(name)=>{
       this.name=name;
   }
   const makeMove=(marker)=>{
    board.addListeners(marker);
   }
    
   return {getName,setName,playTurn}
};

const Human =(function(board){
    const proto = new Player(board);
    this.marker="X";
    const humanMove=()=>{
        makeMove("O")
    }
    return Object.assign({},proto,{humanMove});
});


const Computer =(function(board){
    //extends ComputerMove
    this.marker="Y";
    this.name="Computer";
    proto = new Player(board);
    
    const computerMove=()=>{
        makeMove("X");
    }
    return Object.assign({},proto,{computerMove});
});




const TicTacToe=(function(){
    let player1WinCount=0;
    let player2WinCount=0;
    let player1;
    let player2; 
    const board = new GameBoard();

    let startGame=()=>{       
        loadStartScreen();
        board.makeBoard();
    }
    let loadStartScreen=()=>{
        //makes the start screen    


    }
   
    return{startGame}
});







let game = new TicTacToe();
game.startGame();
console.log("hello world");