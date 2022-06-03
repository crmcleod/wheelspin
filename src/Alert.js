const Alert = ({setAlert}) => {
    return(
        <div id='alert-modal'>
            <div id='alert-box'>
                <h1>
                    There must be at least 2 racers!
                </h1>
                <button className="game-button" onClick={() => setAlert(false)}>
                    OK!
                </button>
            </div>
        </div>
    )
} 

export default Alert