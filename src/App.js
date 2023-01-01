import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="app">
      <div id="header">
        <div id= "header-left">
          <div id="header-title">
            <h1>Memory Game</h1>
          </div>
          <div>Get points by clicking on an a new image! The game ends if you clicked on an image you previously  clicked</div>
        </div>
        <div id= "header-right">
          <div>Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
