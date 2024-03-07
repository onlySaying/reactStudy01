import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/PlayerInfo.jsx"
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combination.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  x : 'Player 1',
  o : 'Player 2'
};

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

function deriveWinner(gameBoard, player)
{
  let winner;
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

  return winner;
}

function deriveBoard(gameTurns)
{
  let gameBoard = [...initalGameBoard.map(array => [...array])];
  
  for(const turn of gameTurns)
  {
      const { square , player} = turn;
      const {row , col} = square;
      gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [player, setPlayers] = useState(PLAYERS)
  const[gameTurns, setGameTurns] = useState([]);

  const activerPlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveBoard(gameTurns);
  const winner = deriveWinner(gameBoard, player);

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
          <Player initname = {PLAYERS.x} symbol="x"
          isActive={activerPlayer ==='x'}
          onChangeName = {handlePlayerNameChange}/>
          <Player initname = {PLAYERS.o} symbol="o" 
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
