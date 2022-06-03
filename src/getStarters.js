import react, {useState, useEffect} from 'react'
import Alert from './Alert';

const GetStarters = ({setStarters, starters, setStart, setStartModal, startersFixed }) => {

    const [alert, setAlert] = useState(false)

    const handleNameChange = (e) => {
        setStarters(e.target.value)
    }
    const handleStart = () => {
        (!startersFixed || startersFixed.length < 2) ? setAlert(true) :
        setStartModal(false)
    };

    return(
        <div id='starter'>
            {alert && <Alert setAlert={setAlert}/>}
            <textarea value={starters || null} placeholder='Enter Your Drivers (comma separated)' id='starter-names' onChange={handleNameChange} rows={20} cols={5}>
            </textarea>
            <button className='game-button' onClick={handleStart}>
                LET'S RACE! 🏁 🚥
            </button>
        </div>
    )
} 
export default GetStarters