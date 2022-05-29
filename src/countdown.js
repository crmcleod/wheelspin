import { useState, useEffect } from 'react'

const Countdown = ({setStart}) => {

    const [colorState, setColorState] = useState({
        r1_1: 'black',
        r1_2: 'black',
        r1_3: 'black',
        r1_4: 'black',
        r1_5: 'black',
        r2_1: 'black',
        r2_2: 'black',
        r2_3: 'black',
        r2_4: 'black',
        r2_5: 'black',
    })

    const [count, setCount] = useState(0)

    const setBlockColor = (color, currentCount) => {
        count === currentCount && setColorState({
            r1_1: color,
            r1_2: color,
            r1_3: color,
            r1_4: color,
            r1_5: color,
            r2_1: color,
            r2_2: color,
            r2_3: color,
            r2_4: color,
            r2_5: color
        })
    }

    const startSequence = () => {
        clearInterval(timings)
        count === 0 && setColorState({ ...colorState, r1_1: 'red', r2_1: 'red' })
        setBlockColor('black', 1)
        count === 2 && setColorState({ ...colorState, r1_1: 'black', r1_2: 'red', r2_1: 'black', r2_2: 'red' })
        setBlockColor('black', 3)
        count === 4 && setColorState({ ...colorState, r1_2: 'black', r1_3: 'red', r2_2: 'black', r2_3: 'red' })
        setBlockColor('black', 5)
        count === 6 && setColorState({ ...colorState, r1_3: 'black', r1_4: 'red', r2_3: 'black', r2_4: 'red' })
        setBlockColor('black', 7)
        count === 8 && setColorState({ ...colorState, r1_4: 'black', r1_5: 'red', r2_4: 'black', r2_5: 'red' })
        setBlockColor('black', 9)
        setBlockColor('red', 10)
        setBlockColor('black', 11)
        setBlockColor('#1fed26', 12)
        setCount(count+1)
        clearInterval(timings)
        count === 13 && setStart(true)
    }

    let timings = count <= 13 && setInterval(startSequence, 600)
    return (
        <div id='countdown-wrapper'>
            <div id='countdown-block'>
                <div id='countdown-r1'>
                    <span style={{ backgroundColor:  colorState.r1_1 }}></span>
                    <span style={{ backgroundColor:  colorState.r1_2 }}></span>
                    <span style={{ backgroundColor:  colorState.r1_3 }}></span>
                    <span style={{ backgroundColor:  colorState.r1_4 }}> </span>
                    <span style={{ backgroundColor:  colorState.r1_5 }}></span>
                </div>
                <div id='countdown-r2'>
                    <span style={{ backgroundColor:  colorState.r2_1 }}></span>
                    <span style={{ backgroundColor:  colorState.r2_2 }}></span>
                    <span style={{ backgroundColor:  colorState.r2_3 }}></span>
                    <span style={{ backgroundColor:  colorState.r2_4 }}> </span>
                    <span style={{ backgroundColor:  colorState.r2_5 }}></span>
                </div>
            </div>
        </div>
    )
}

export default Countdown