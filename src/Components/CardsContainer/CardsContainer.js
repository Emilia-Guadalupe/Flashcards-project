import React, {useContext} from 'react';
import LanguageContext from '../../Context/LanguageContext';
import Card from '../Card/Card'

function CardsContainer(){

    const { language } = useContext(LanguageContext); 

    return(
        <div>
            {language.length === 0 ?
                (
                <>
                <p className="loading"> Cargando respuestas... </p>
                </>
                ): language.map((e) => {
                return(
                        <div className="cardsContainer">
                            <Card front={e.name} back={e.img} />
                        </div>
                )
            })
            }
        </div>
    )
}

export default CardsContainer;