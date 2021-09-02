import React, {useState} from 'react'
import { BreakingBadContext } from '../Context/BreakingBadContext';
import { useContext } from 'react';

const Form = () => {
    const {setCharacterName} = useContext(BreakingBadContext);
    const [charName, setCharName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setCharacterName(charName);
    }
    
    return (
        <React.Fragment>
            <form className="mt-3 mb-3 container">
                <div className="">
                    <input type="text" value={charName} onChange={(e) => setCharName(e.target.value)} className="form-control" placeholder="Enter Character Name*" />
                </div>
                <button onClick={e => handleSubmit(e)} type="submit" className="btn btn-primary mt-2 w-100">Search</button>
                <button onClick={e => setCharName("")} className="btn btn-danger mt-2 w-100">Clear</button>
            </form>
        </React.Fragment>
    )
}

export default Form
