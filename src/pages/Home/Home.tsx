import './Home.css'
import Grid from "../../components/Grid/Grid.tsx";
import RobotController from "../../components/RobotController.tsx";
import {useCallback, useState} from "react";

function Home() {
    const gridSize = 10;
    const initialGrid = Array(gridSize).fill(Array(gridSize).fill(false));
    const [, setRobotPosition] = useState({x: 0, y: 0});
    const [grid, setGrid] = useState(initialGrid);

    const paintCell = useCallback((x: number, y: number): void => {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[y] = [...newGrid[y]];
            newGrid[y][x] = true;
            return newGrid;
        });
    }, []);

    const handleRobotMove = useCallback((x: number, y: number): void => {
        setRobotPosition({x, y});
        paintCell(x, y);
    }, [paintCell]);

    return (
        <>
            <Grid grid={grid}/>
            <RobotController onMove={handleRobotMove}/>
        </>
    )
}

export default Home
