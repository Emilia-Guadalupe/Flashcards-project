import React, {createContext, useState, useEffect} from 'react';

const DigimonContext = createContext();

function DigimonContextProvider({children}){

    const [digimon, setDigimon] = useState([]);

    const getWords = async () => {
        const data = await fetch('https://digimon-api.vercel.app/api/digimon')
        const digimonInfo = await data.json();
        setDigimon(digimonInfo);
    }

    useEffect(() => {

        getWords();

    }, [])

    console.log(digimon)

    return(
        <DigimonContext.Provider value={{digimon}}>
            {children}
        </DigimonContext.Provider>
    )

}

export default DigimonContext;
export {DigimonContextProvider};