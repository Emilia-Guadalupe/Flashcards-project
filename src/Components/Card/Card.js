import React, { useState } from 'react';
import './cardStyles.css';

function Card({front, back}){

    const [face, setFace] = useState(false);

    return(
        <div className="card-container">
            <div className="card" onClick={() => setFace(!face)}>
                { !face ? <p>{front}</p> : <img src={back} alt="Digimon" /> }
            </div>
        </div>
    )
}

export default Card;