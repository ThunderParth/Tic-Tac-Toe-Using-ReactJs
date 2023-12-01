import './App.css';
import './index.css'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';

function App() {
  const [gameTurns,setGameTurns]=useState([]);
  const [activePlayer,setActivePlayer]=useState('X');
  function handleSelectSquare(rowIndex,colIndex) {
      setActivePlayer((curActivePlayer)=>curActivePlayer ==='X' ? 'O':'X');
      setGameTurns((prevTurns)=>{
        let currentPlayer='X';
        if(prevTurns.length>0 && prevTurns[0].player==='X'){
          currentPlayer='O';
        }
        const updatedTurns=[
          {square:{ row: rowIndex, col: colIndex },player: currentPlayer },
          ...prevTurns,
        ];
          return updatedTurns;
      });
  }
  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player1" symbol="X" isActive={activePlayer==='X'}/>
        <Player name="Player2" symbol="O" isActive={activePlayer==='O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log/>    
    </main>
  );
}

export default App;
