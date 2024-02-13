import {useEffect, useState} from "react";

import {GameStarted} from "../../types/GameStarted.enum.ts";
import Grid from "../../components/Grid/Grid.tsx";
import PrimaryButton from "../../components/Button/PrimaryButton.tsx";
import RobotController from "../../components/RobotController/RobotController.tsx";
import useHighScore from "../../hooks/useHighScore.tsx";
import useRobotPainter from "../../hooks/useRobotPainter.tsx";
import useTimer from "../../hooks/useTimer.tsx";

import "./Home.scss"

function Home() {
    const [gridSize, setGridSize] = useState(10)
    const [gameStarted, setGameStarted] = useState(GameStarted.stop)
    const {robotPosition, grid, spacesPainted, moveRobot, robotDirection} = useRobotPainter(gridSize, gameStarted);
    const {minutes, seconds} = useTimer(gameStarted)
    const [highScore, setHighScore] = useHighScore(gridSize);

    useEffect(() => {
        if (new Set(spacesPainted).size === gridSize * gridSize) {
            if (gameStarted === GameStarted.start) {
                setHighScore(prev => {
                    const highSeconds = Number(prev.seconds)
                    const highMinutes = Number(prev.minutes)
                    const currentMinutes = Number(minutes)
                    const currentSeconds = Number(seconds)

                    if (highMinutes === currentMinutes && currentSeconds < highSeconds
                        || currentMinutes < highMinutes) {
                        localStorage.setItem(`highScore-${gridSize}`, JSON.stringify({
                            minutes: minutes,
                            seconds: seconds
                        }))
                        return {minutes: minutes, seconds: seconds}
                    }
                    return prev;
                })
            }
            setGameStarted(GameStarted.stop)
        }

        if (new Set(spacesPainted).size === 1) {
            setGameStarted(GameStarted.reset)
        }

        if (new Set(spacesPainted).size > 1 && (gameStarted === GameStarted.stop || gameStarted === GameStarted.reset) && seconds === '00' && minutes === '00') {
            setGameStarted(GameStarted.start)
        }
    }, [spacesPainted]);

    function resetTimer() {
        setGameStarted(GameStarted.reset);
        setGridSize(prev => Number(prev))
    }

    return (
        <div className="home-container">
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <PrimaryButton onClick={resetTimer}>Reset</PrimaryButton>
                <div className="time-and-highscore-container">
                    <span className="robot-text-medium">Time: {minutes}: {seconds}</span>
                    <span className="robot-text-medium">High Score: {highScore.minutes === '99' ? '-' : highScore.minutes}: {highScore.minutes === '99' ? '-' : highScore.seconds}</span>
                </div>
            </div>

            <div className="title-container">
                <div className="inner-title-container">
                    <span className="robot-text-medium">Position</span>
                    <span className="robot-text-small">({robotPosition.y},{robotPosition.x})</span>
                </div>
                <div className="buttons-container">
                    <label className="robot-text-medium">
                        Grid Size
                    </label>
                    <div className="grid-buttons-container">
                        <PrimaryButton onClick={() => setGridSize(prev => prev - 1)}
                                       disabled={gridSize <= 2}>
                            -
                        </PrimaryButton>
                        <input type="text"
                               min={2}
                               max={100}
                               disabled={true}
                               value={gridSize}
                               onChange={(e) => setGridSize(Number(e.target.value))}/>
                        <PrimaryButton
                            onClick={() => setGridSize(prev => prev + 1)}
                            disabled={gridSize >= 100}>
                            +
                        </PrimaryButton>
                    </div>
                </div>
                <div className="inner-title-container">
                    <span className="robot-text-medium">Spaces Painted </span>
                    <span className="robot-text-small">{new Set(spacesPainted).size}</span>
                </div>
            </div>
            <Grid grid={grid} robotPosition={robotPosition} robotDirection={robotDirection}/>
            <RobotController onMove={moveRobot}/>
        </div>
    )
}

export default Home
