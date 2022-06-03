import { useState, useEffect } from 'react'
import './App.css';
import Car from './Car';
import Countdown from './countdown';
import GetStarters from './getStarters';
import WinnerCard from './winnerCard';



function App() {
  const [tick, setTick] = useState(false)
  const [start, setStart] = useState(false)
  const [startModal, setStartModal] = useState(true)
  const [winner, setWinner] = useState()
  const [starters, setStarters] = useState()
  const [startersFixed, setStartersFixed] = useState()
  const [winnerModal, setWinnerModal] = useState(false)
  const [racePositions, setRacePositions] = useState({})

  useEffect(() => {
    starters?.length && setStartersFixed(starters.replaceAll('\n', '').split(','))
  }, [starters])

  const fps = (fps) => {
    return 1000 / fps
  }
  const ticking = setInterval(() => setTickState(), fps(30))

  const setTickState = () => {
    setTick(!tick)
    clearInterval(ticking)
  }
  const restartRace = () => {
    setStart(false)
    setStartModal(true)
    setWinner(null)
    setStarters(null)
    setStartersFixed(null)
    setWinnerModal(false)
    setRacePositions({})
  }

  const runnersUp = () => {
    setStart(false)
    setStartModal(true)
    setStarters(startersFixed.filter(x => x !== winner).join(','))
    setStartersFixed(startersFixed.filter(x => {
      x.trim()
      return x !== winner
    }))
    setWinner(null)
    setWinnerModal(false)
  }

  return (
    <div className="App">
      {!start && !winnerModal && !startModal && <Countdown setStart={setStart} />}
      {startModal && <GetStarters startersFixed={startersFixed} starters={starters} setStarters={setStarters} setStart={setStart} setStartModal={setStartModal} />}
      {winnerModal && <WinnerCard winner={winner} restartRace={restartRace} runnersUp={runnersUp} />}
      <div id='cars'>
        {start && startersFixed?.length > 0 && startersFixed.map(starter => {
          return <Car racePositions={racePositions} setRacePositions={setRacePositions} setWinnerModal={setWinnerModal} key={starter} setWinner={setWinner} name={starter} color={'red'} tick={tick} start={start} setStart={setStart} />

        })}
      </div>
    </div>
  );
}

export default App;
