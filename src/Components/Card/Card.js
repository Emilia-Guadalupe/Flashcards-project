import React from 'react';
import './cardStyles.css';

function Card(props){
    return(
        <div className="card-container">
            <div className="card">
                <div className="front">
                    <div className="eng">
                        {props.eng}
                    </div>
                </div>
                <div className="back">
                    <div className="han">{props.han}</div>
                    <div className="pin">{props.pin}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;