import Player from "./components/PlayerInfo.jsx"

function App() {
  

  return (
    <main>
      <div id = "game-container">
        <ol id = "players">
        <Player name = "player1" symbol="x"/>
        <Player name = "player2" symbol="o"/>
        </ol>
        GAME BOARD
        
      </div>

      LOG
    </main>
    
  )
}

export default App
