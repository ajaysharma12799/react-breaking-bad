import {createContext, useState, useEffect} from 'react'
import axios from 'axios';

const BreakingBadContext = createContext();

const BreakingBadProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [characterName, setCharacterName] = useState("");

    const fetchCharacters = async () => {
        let URL = characterName === "" ? "https://www.breakingbadapi.com/api/characters" : `https://www.breakingbadapi.com/api/characters?name=${characterName}`; 
        const response = await axios.get(URL);
        setCharacters(response.data)
    }
    useEffect(() => {
        fetchCharacters();
    }, [characterName]);
    
    return (
        <BreakingBadContext.Provider value={{characters, setCharacterName}}>
            {children}
        </BreakingBadContext.Provider>
    )
}

export {BreakingBadContext, BreakingBadProvider}