import React, {useContext} from 'react';
import DigimonContext from '../../Context/LanguageContext';
import Card from '../Card/Card';
import './cardContainerStyles.css';

function CardsContainer(){

    const { digimon } = useContext(DigimonContext); 

    return(
        <div className="imagesContainer">
            {digimon.length === 0 ?
                (
                <>
                <p className="loading"> Cargando respuestas... </p>
                </>
                ): digimon.map((e) => {
                return(
                        <div className="cardsContainer">
                            <Card id={e.id} front={e.name} back={e.img} />
                        </div>
                )
            })
            }
        </div>
    )
}

export default CardsContainer;