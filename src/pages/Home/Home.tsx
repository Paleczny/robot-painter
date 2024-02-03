import './Home.css'
import Grid from "../../components/Grid/Grid.tsx";
import RobotController from "../../components/RobotController.tsx";
import React, {useCallback, useEffect, useState} from "react";

function Home() {
    const gridSize = 10;
    const initialGrid = Array(gridSize).fill(Array(gridSize).fill(false));
    const [robotPosition, setRobotPosition] = useState({x: 0, y: 0});
    const [grid, setGrid] = useState(initialGrid);
    const [spacesPainted, setSpacesPainted] = useState<string[]>([]);

    useEffect(() => {
        setSpacesPainted((prev) => [...prev, `${robotPosition.x},${robotPosition.y}`]);
    }, [robotPosition]);

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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        let newX = robotPosition.x
        let newY = robotPosition.y;

        switch (event.code) {
            case 'ArrowUp':
                newX = robotPosition.x > 0 ? robotPosition.x - 1 : robotPosition.x;
                break;
            case 'ArrowDown':
                newX = robotPosition.x < 9 ? robotPosition.x + 1 : robotPosition.x;
                break;
            case 'ArrowLeft':
                newY = robotPosition.y > 0 ? robotPosition.y - 1 : robotPosition.y;
                break;
            case 'ArrowRight':
                newY = robotPosition.y < 9 ? robotPosition.y + 1 : robotPosition.y;
                break;
            default:
                break;
        }
        handleRobotMove(newX, newY)
    }

    return (
        <div className="home-container" tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
            <Grid grid={grid} robotPosition={robotPosition}/>
            <RobotController position={robotPosition} onMove={handleRobotMove}/>
            <div>Position: ({robotPosition.x}, {robotPosition.y})</div>
            <div>Spaces Painted: {new Set(spacesPainted).size}</div>
        </div>
    )
}

export default Home
