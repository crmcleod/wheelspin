import react, {useState, useEffect} from 'react'

const GetStarters = ({setStarters, starters, setStart, setStartModal }) => {

    const handleNameChange = (e) => {
        setStarters(e.target.value)
    }
    const handleStart = () => {
        setStartModal(false)
    };

    return(
        <div id='starter'>
            <textarea value={starters || null} placeholder='Enter Your Drivers (comma separated)' id='starter-names' onChange={handleNameChange} rows={20} cols={5}>
            </textarea>
            <button className='game-button' onClick={handleStart}>
                LET'S RACE! 🏁 🚥
            </button>
        </div>
    )
} 
export default GetStarters