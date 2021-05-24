import React, {createContext, useState, useEffect} from 'react';

    const LanguageContext = createContext();

function LanguageContextProvider({children}){

    const [lang, setLang] = useState();

    useEffect(() => {
        fetch('https://kanjiapi.dev/v1/kanji/蜜')
        .then((response) => {
            return response.json()
        })
        .then((letter) => {
            console.log(letter);
            setLang(letter)
        })

    }, []);

    return(
        <LanguageContext.Provider value={{lang}}>
            {children}
        </LanguageContext.Provider>
    )

}

export default LanguageContext;
export {LanguageContextProvider};