import React, { useState, useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';
import './cardStyles.css';

function Card({front, back}){

    const {lang} = useContext(LanguageContext); 

    const [face, setFace] = useState(true);

    function handleClick(){
        setFace(oldState => !oldState);
    }

    const text = face ? front : back;

    return(
        <div className="card-container">
            <div className="card" onClick={handleClick}>
                    <p>{text}</p>
            </div>
        </div>
    )
}

export default Card;