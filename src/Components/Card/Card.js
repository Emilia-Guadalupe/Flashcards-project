import React, { useState } from 'react';
import './cardStyles.css';

function Card({front, back}){

    const [face, setFace] = useState(false);

    return(
        <div className="card-container">
            <div className="card" onClick={() => setFace(!face)}>
                { face ? 
                <div className="cardData">
                    <p className="cardName">{front}</p> 
                </div> :
                <div className="cardData">
                    <img className="cardPicture" src={back} alt="Digimon" />
                </div>
            }
            </div>
        </div>
    )
}

export default Card;