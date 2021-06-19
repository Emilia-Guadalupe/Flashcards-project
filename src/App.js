import React from 'react';
import CardsContainer from './Components/CardsContainer/CardsContainer';
import {DigimonContextProvider} from './Context/LanguageContext';
import './App.css';

function App() {

    return(
        <div className="App">
            <div className="title-container">
                <h1 className="title">Digimon Flash Cards Game</h1>
                <h2 className="title">Can you guess the name?</h2>
                <p className="title">Click the images and find out!</p>
            </div>
            <DigimonContextProvider>
            <div>
                <CardsContainer />
            </div>
            </DigimonContextProvider>
        </div>
    );
}

export default App;

