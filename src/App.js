import React, { useState } from 'react';
import RockPaperScissors from './components/RockPaperScissors';


export default function App() {
  const [selectedApp, setSelectedApp] = useState('clock');

  return (
    <div className="app">
      <header>
        <h1>Rock Paper Scissors</h1>
        <nav>
          <button onClick={() => setSelectedApp('rockPaperScissors')}>Rock Paper Scissors</button>
        </nav>
      </header>
      <main>
        
        {selectedApp === 'rockPaperScissors' && <RockPaperScissors />}
      </main>
    </div>
  );
}
