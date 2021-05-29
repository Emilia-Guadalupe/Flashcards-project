import React, {useContext} from 'react';
import LanguageContext from '../../Context/LanguageContext';

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
                        <div>
                            <p>
                                {e.kanji}
                            </p>
                        </div>
                )
            })
            }
        </div>
    )
}

export default CardsContainer;