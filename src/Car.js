import react, { useState, useEffect } from 'react'
import CarImg from './car.png'

const Car = ({ tick, color, setStart, start, setWinner, name, setWinnerModal, racePositions, setRacePositions }) => {

    const [carPosition, setCarPosition] = useState(0)
    const [carRotation, setRotation] = useState(0)

    useEffect(() => {
        setRacePosition()
        setRotation((!!Math.floor(Math.random() * 2) ? '+' : '-') + 0.8 + Math.floor(Math.random() * 1))
    }, [tick])
    const setRacePosition = () => {
        setRacePositions({ ...racePositions, [name]: carPosition })
        if (carPosition >= 1800) {
            setStart(false)
            setCarPosition(0)
            setWinner(name)
            setWinnerModal(true)
        } else if (
            !start
        ) {
            setCarPosition(0)
            // setStart(false)
        } else {
            setCarPosition(carPosition + Math.random() * Math.random() * 25)
        }
    }
    return (
        <>
            <span className='lanes'>
                {name}
            </span>

            <div style={{
                width: '3rem', height: '1.5rem',
                backgroundColor: color,
                marginLeft: carPosition, transition: start && '1s all',
                marginBottom: '1rem', padding: '0.1rem', borderRadius: '1rem',
                transform: `rotate(${carRotation}deg)`, boxShadow: '0px 0px 15px 1px black'
            }}>
                <img src={CarImg} style={{ position: 'inherit', width: '100%', transform: 'translateY(-25%) rotate(-90deg)' }} />
            </div>
        </>
    )
}

export default Car