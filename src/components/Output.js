import React, {useContext} from 'react'
import { BreakingBadContext } from '../Context/BreakingBadContext'
import Card from './Card';


const Output = () => {
    const {characters} = useContext(BreakingBadContext);

    return (
        <div className="container d-flex justify-content-around flex-wrap">
            {
                characters.length > 0 ? 
                (
                    characters.map((character, idx) => (
                        <Card key={idx} character={character}/>
                    ))
                ) 
                : 
                (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
        </div>
    )
}

export default Output
