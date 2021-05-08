import React, { useState } from 'react';
import './cardStyles.css';

function Card({front, back}){

    const [face, setFace] = useState(true);

    function handleClick(){
        setFace(oldState => !oldState);
    }

    const text = face ? front : back;

    return(
        <div className="card-container">
            <div className="card" onClick={handleClick}>
                    {text}
            </div>
        </div>
    )
}

export default Card;