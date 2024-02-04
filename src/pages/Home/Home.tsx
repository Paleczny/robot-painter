import "./Home.scss"
import Grid from "../../components/Grid/Grid.tsx";
import RobotController from "../../components/RobotController/RobotController.tsx";
import useRobotPainter from "../../hooks/useRobotPainter.tsx";
import {useState} from "react";

function Home() {
    const [gridSize, setGridSize] = useState(10)
    let {robotPosition, grid, spacesPainted, moveRobot, robotDirection} = useRobotPainter(gridSize);

    return (
        <div className="home-container" tabIndex={0}
             onKeyDown={(e) => moveRobot(e.key.replace("Arrow", '').toLowerCase())}>
            <div className="title-container">
                <div className="inner-title-container">
                    <span className="robot-text-medium">Position</span>
                    <span className="robot-text-small">({robotPosition.x}, {robotPosition.y})</span>
                </div>
                <div className="buttons-container">
                    <label className="robot-text-medium">
                        Grid Size
                    </label>
                    <div className="grid-buttons-container">
                        <button className="grid-size-button"
                                onClick={() => setGridSize(prev => prev - 1)}
                                disabled={gridSize <= 2}>
                            -
                        </button>

                        <input type="text"
                               min={2}
                               max={100}
                               disabled={true}
                               value={gridSize}
                               onChange={(e) => setGridSize(Number(e.target.value))}/>
                        <button className="grid-size-button"
                                onClick={() => setGridSize(prev => prev + 1)}
                                disabled={gridSize >= 100}>
                            +
                        </button>
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
