


const GameBoard = (function(){
    const board = [];
    const recordMove=(playerMark)=>{
    }
    const makeBoard=()=>{

        
        const window= document.getElementById("container");
        
        //Makes board's container
        const boardDisplay= document.createElement("div");
        boardDisplay.setAttribute("id","game-input-container");
        window.appendChild(boardDisplay);

        // Creates the board
        const container = document.createElement("div");        
        container.setAttribute("id","game-container");
        boardDisplay.appendChild(container);

        // Creates the cells of the board
        for (i = 0; i < 3; i++) {
           
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

          // Add's to the cells to mark the value from parameter
          addListeners("z");
          console.log(board);
    }
 
    const isWinner=(string)=>{
        // checks if the string entered won the game
        return false;
    }

    let displayMoveListeners=(e,string)=>{
        // Callback funtion for event adding event listeners to all the cells of the board
        displayMove(string);
    }

    const addListeners=(string)=>{
        // Adds click listeners to each cell on the board
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                console.log("adding listeners");  
                board[i][j].addEventListener("click",displayMoveListeners);                
            }
        }
    }   
    
    function displayMove(string="X") {
        console.log(event.target);
        if(event.target.innerHTML==""){
            // Add a
            event.target.innerHTML=string;
            removeListenersFromCells();
        }
        else{
            // Do nothing if the cell is filled
            console.log("boxfilled")
        }
        console.log(string);
     
    }

    const removeListenersFromCells=()=>{
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                board[i][j].removeEventListener("click",displayMoveListeners)             
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