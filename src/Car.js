import react, { useState, useEffect } from 'react'
import CarImg from './car.png'

const Car = ({ tick, color, setStart, start, setWinner, name, setWinnerModal, racePositions, setRacePositions }) => {

    const [carPosition, setCarPosition] = useState(0)
    const [carRotation, setRotation] = useState(0)
    const [carColor, setCarColor] = useState()


    const generateRGB = () => {
        const r = Math.round(Math.random()*256)
        const g = Math.round(Math.random()*256)
        const b = Math.round(Math.random()*256)
        setCarColor('rgba('+r+','+g+','+b+', 0.75)')
    }
    useEffect(() => {
        generateRGB()
    }, [])
    useEffect(() => {
        setRacePosition()
        setRotation((!!Math.floor(Math.random() * 2) ? '+' : '-') + 0.8 + Math.floor(Math.random() * 5))
    }, [tick])
    const setRacePosition = () => {
        setRacePositions({ ...racePositions, [name]: carPosition })
        if (carPosition >= 98) {
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
            setCarPosition(carPosition + Math.random() * Math.random()**0.2)
        }
    }
    return (
        <>
            <div className='lanes' style={{backgroundColor: carColor}}>
                {name}
            </div>

            <div className='car-div' style={{
                backgroundColor: carColor, marginLeft: carPosition+'%', 
                transition: start && '0.4s all',
                transform: `rotate(${carRotation}deg)`
            }}>
                <img className='car-img' src={CarImg} alt=''/>
                <div id='skidmark-container'>
                    <div className='skidmarks'></div>
                    <div className='burnout'></div>
                    <div className='skidmarks'></div>
                </div>
            </div>
        </>
    )
}

export default Car