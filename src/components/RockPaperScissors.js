import React, { useState } from 'react';
import '../styles/rockPaperScissors.css';

const choices = ['rock', 'paper', 'scissor'];

function RockPaperScissors() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const compChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const compareChoices = (userChoice) => {
    const cmpChoice = compChoice();
    if (userChoice === cmpChoice) {
      alert("It's a Draw!");
    } else if (
      (userChoice === 'rock' && cmpChoice === 'scissor') ||
      (userChoice === 'paper' && cmpChoice === 'rock') ||
      (userChoice === 'scissor' && cmpChoice === 'paper')
    ) {
      setUserScore(userScore + 1);
      alert('You Win!');
    } else {
      setCompScore(compScore + 1);
      alert('You Lost!');
    }
  };

  return (
    <div className="rock-paper-scissors">
      {/* <h1>Rock Paper Scissors</h1> */}
      <div className="game">
        <button onClick={() => compareChoices('rock')}>Rock</button>
        <button onClick={() => compareChoices('paper')}>Paper</button>
        <button onClick={() => compareChoices('scissor')}>Scissors</button>
      </div>
      <div className="comp-user">
        <div id="comp">
          <p id="comp-score">{compScore}</p>
          <p>Comp</p>
        </div>
        <div id="user">
          <p id="user-score">{userScore}</p>
          <p>User</p>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
