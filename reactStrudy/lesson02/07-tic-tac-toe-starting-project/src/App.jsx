import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/PlayerInfo.jsx"

function App() {
  const[activerPlayer, setActivePlayer] = useState('x');

  function handleSelectSquarae()
  {
    setActivePlayer((curActivePlayer) => 
    curActivePlayer ==='x' ? 'o' : 'x' )
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
        playingSymbor={activerPlayer}/>
        
      </div>

      LOG
    </main>
    
  )
}

export default App
