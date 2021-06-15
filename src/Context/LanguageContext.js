import React, {createContext, useState, useEffect} from 'react';

const LanguageContext = createContext();

function LanguageContextProvider({children}){

    const [language, setLanguage] = useState([]);

    const getWords = async () => {
        const data = await fetch('https://digimon-api.vercel.app/api/digimon')
        const wordsInfo = await data.json();
        setLanguage(wordsInfo);
    }

    useEffect(() => {

        getWords();

    }, [])

    console.log(language)

    return(
        <LanguageContext.Provider value={{language}}>
            {children}
        </LanguageContext.Provider>
    )

}

export default LanguageContext;
export {LanguageContextProvider};