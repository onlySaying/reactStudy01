import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/PlayerInfo.jsx"
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combination.js";
import GameOver from "./components/GameOver.jsx";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function deriveActivePlayer(gameTurns)
{
  let currentPlayer = 'x';
  if(gameTurns.length>0 && gameTurns[0].player === 'x')
  {
    currentPlayer ='o';
  }
  return currentPlayer;
}

function App() {
  const [player, setPlayers] = useState(
    {
      X : 'Player 1',
      Y : 'Player 2'
    }
  )
  const[gameTurns, setGameTurns] = useState([]);

  const activerPlayer = deriveActivePlayer(gameTurns);
  
  let gameBoard = [...initalGameBoard.map(array => [...array])];
  let winner ;
  for(const turn of gameTurns)
  {
      const { square , player} = turn;
      const {row , col} = square;
      gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol =
     gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
     gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = 
    gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol)
      {
        winner = player[firstSquareSymbol];
      }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquarae(rowIndex, colIndex)
  { 
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns =[{square : {row : rowIndex, col : colIndex}
      , player : activerPlayer},...prevTurns];
      
      return updateTurns;
    });
  }

  function handleReStart()
  {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName)
  {
    setPlayers(prevPlayers =>{
      return{
        ...prevPlayers,
        [symbol] : newName
  }});
  }
  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player">
          <Player initname = "player1" symbol="x"
          isActive={activerPlayer ==='x'}
          onChangeName = {handlePlayerNameChange}/>
          <Player initname = "player2" symbol="o" 
          isActive={activerPlayer ==='o'}
          onChangeName = {handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && 
        <GameOver winner = {winner} onReStart={handleReStart}/>}
        <GameBoard onSelectSquare={handleSelectSquarae} 
        board = {gameBoard}/>
        
      </div>

      <Log turns={gameTurns}/>
    </main>
    
  )
}

export default App
