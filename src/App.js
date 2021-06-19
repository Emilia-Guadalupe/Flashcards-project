import React from 'react';
import CardsContainer from './Components/CardsContainer/CardsContainer';
import {LanguageContextProvider} from './Context/LanguageContext';
import './App.css';

function App() {

    return(
        <div className="App">
            <div className="title-container">
                <h1 className="title">Digimon Flash Cards Game</h1>
                <h2 className="title">Can you guess the name?</h2>
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

