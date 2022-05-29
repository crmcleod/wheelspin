import { useState, useEffect } from 'react'

const WinnerCard = ({ winner, restartRace, runnersUp }) => {

    return (
        <div id='winner-card-modal'>
            <div id='winner-card'>
                <h1>
                    THE WINNER IS: 
                    <br></br>
                    🍾 {' ' + winner + ' '} 🏁
                </h1>
                <span id='winner-buttons'>
                    <button onClick={restartRace} className='game-button small invert'>
                        New Race
                    </button>
                    <button onClick={runnersUp} className='game-button small invert'>
                        Race the Runners Up
                    </button>
                </span>
            </div>
        </div>
    )
}
export default WinnerCard