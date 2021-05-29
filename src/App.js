import React from 'react';
import CardsContainer from './Components/CardsContainer/CardsContainer';
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
                <CardsContainer />
            </div>
            </LanguageContextProvider>
        </div>
      );
}

export default App;

