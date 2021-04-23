import React from 'react';
import './card.css';

function Card(props){
    return(
        <div className="card-container">
            <div className="card">
                <div className="front">
                    <div className="eng"></div>
                </div>
                <div className="back"></div>
            </div>
        </div>
    )
}

export default Card; 