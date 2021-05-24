import React from 'react';
import Card from './Components/Card/Card';
import {LanguageContextProvider} from './Context/LanguageContext';
import './App.css';

function App() {

    return(
        <div className="App">
            <div className="title-container">
                <h1 className="title">A Flash Cards Game</h1>
                <h2 className="title">Click on a card to reveal the secret solution</h2>
            </div>
            <LanguageContextProvider>
            <div>
              <Card front="2 + 2" back="4" />
              <Card front="2 * 10" back="20" />
              <Card front="60 / 2" back="30" />
            </div>
            </LanguageContextProvider>
        </div>
      );
}

export default App;
