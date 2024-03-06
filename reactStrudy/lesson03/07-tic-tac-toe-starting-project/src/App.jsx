import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/PlayerInfo.jsx"
import Log from "./components/Log.jsx";

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

  const[gameTurns, setGameTurns] = useState([]);
  const activerPlayer = deriveActivePlayer(gameTurns);
  
  function handleSelectSquarae(rowIndex, colIndex)
  { 
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns =[{square : {row : rowIndex, col : colIndex}
      , player : activerPlayer},...prevTurns];
      
      return updateTurns;
    });
  }
  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player">
          <Player initname = "player1" symbol="x"
          isActive={activerPlayer ==='x'}/>
          <Player initname = "player2" symbol="o" 
          isActive={activerPlayer ==='o'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquarae} 
        turns = {gameTurns}/>
        
      </div>

      <Log turns={gameTurns}/>
    </main>
    
  )
}

export default App
