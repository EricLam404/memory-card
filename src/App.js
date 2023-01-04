import './App.css';
import { useState } from 'react';
import Header from './header';
import Cards from './cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };
  
  const checkBestscore = (s) => {
    if (bestScore < s) {
      setBestScore(s);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore}/>
      <Cards 
        increaseScore={increaseScore}
        checkBestscore={checkBestscore}
        resetScore={resetScore}
      />
    </div>
  );
}

export default App;
