import React, {createContext, useState, useEffect} from 'react';

const LanguageContext = createContext();

function LanguageContextProvider({children}){

    const [language, setLanguage] = useState([]);

    const getWords = async () => {
        const data = await fetch('https://kanjiapi.dev/v1/kanji/蛍')
        const wordsInfo = await data.json();
        setLanguage(wordsInfo);
    }

    useEffect(() => {

        getWords();

    }, [])

    return(
        <LanguageContext.Provider value={{language}}>
            {children}
        </LanguageContext.Provider>
    )

}

export default LanguageContext;
export {LanguageContextProvider};