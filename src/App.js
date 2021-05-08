import React from 'react';
import Card from './Components/Card/Card';
import './App.css';

function App() {

    return(
        <div className="App">
            <div className="title-container">
                <h1>A Flash Cards Game</h1>
                <h2>Click on a card to reveal the secret solution</h2>
            </div>
            <div>
              <Card front="2 + 2" back="4" />
              <Card front="2 * 10" back="20" />
              <Card front="60 / 2" back="30" />
            </div>
        </div>
      );
}

export default App;
