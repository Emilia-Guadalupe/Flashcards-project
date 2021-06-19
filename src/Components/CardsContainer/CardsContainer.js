import React, {useContext} from 'react';
import LanguageContext from '../../Context/LanguageContext';
import Card from '../Card/Card';
import './cardContainerStyles.css';

function CardsContainer(){

    const { language } = useContext(LanguageContext); 

    return(
        <div className="imagesContainer">
            {language.length === 0 ?
                (
                <>
                <p className="loading"> Cargando respuestas... </p>
                </>
                ): language.map((e) => {
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