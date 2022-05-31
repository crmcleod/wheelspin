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
    const [boxshadow, setBoxShadow] = useState(null)

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
        count === 0 &&  setBoxShadow('red')
        setBlockColor('black', 1)
        count === 1 && setBoxShadow('')
        count === 2 && setColorState({ ...colorState, r1_1: 'black', r1_2: 'red', r2_1: 'black', r2_2: 'red' })
        count === 2 && setBoxShadow('red')
        setBlockColor('black', 3)
        count === 3 && setBoxShadow('')
        count === 4 && setColorState({ ...colorState, r1_2: 'black', r1_3: 'red', r2_2: 'black', r2_3: 'red' })
        count === 4 && setBoxShadow('red')
        setBlockColor('black', 5)
        count === 5 && setBoxShadow('')
        count === 6 && setColorState({ ...colorState, r1_3: 'black', r1_4: 'red', r2_3: 'black', r2_4: 'red' })
        count === 6 && setBoxShadow('red')
        setBlockColor('black', 7)
        count === 7 && setBoxShadow('')
        count === 8 && setColorState({ ...colorState, r1_4: 'black', r1_5: 'red', r2_4: 'black', r2_5: 'red' })
        count === 8 && setBoxShadow('red')
        setBlockColor('black', 9)
        count === 9 && setBoxShadow('')
        setBlockColor('red', 10)
        count === 10 && setBoxShadow('red')
        setBlockColor('black', 11)
        count === 11 && setBoxShadow('')
        setBlockColor('#1fed26', 12)
        count === 12 && setBoxShadow('#1fed26')
        setCount(count+1)
        clearInterval(timings)
        count === 13 && setStart(true)
    }

    let timings = count <= 13 && setInterval(startSequence, 600)
    return (
        <div id='countdown-wrapper'>
            <div id='countdown-block'  style={{boxShadow: '0px 0px 20px 3px ' + boxshadow}}>
                <div id='countdown-r1'>
                    <span style={{ backgroundColor:  colorState.r1_1, border: 'inset 10px '+colorState.r1_1}}></span>
                    <span style={{ backgroundColor:  colorState.r1_2, border: 'inset 10px '+colorState.r1_2 }}></span>
                    <span style={{ backgroundColor:  colorState.r1_3, border: 'inset 10px '+colorState.r1_3 }}></span>
                    <span style={{ backgroundColor:  colorState.r1_4, border: 'inset 10px '+colorState.r1_4 }}> </span>
                    <span style={{ backgroundColor:  colorState.r1_5, border: 'inset 10px '+colorState.r1_5 }}></span>
                </div>
                <div id='countdown-r2'>
                    <span style={{ backgroundColor:  colorState.r2_1, border: 'inset 10px '+colorState.r2_1 }}></span>
                    <span style={{ backgroundColor:  colorState.r2_2, border: 'inset 10px '+colorState.r2_2 }}></span>
                    <span style={{ backgroundColor:  colorState.r2_3, border: 'inset 10px '+colorState.r2_3 }}></span>
                    <span style={{ backgroundColor:  colorState.r2_4, border: 'inset 10px '+colorState.r2_4 }}> </span>
                    <span style={{ backgroundColor:  colorState.r2_5, border: 'inset 10px '+colorState.r2_5 }}></span>
                </div>
            </div>
        </div>
    )
}

export default Countdown