import {useCallback, useEffect, useState} from "react";

const createGrid = (gridSize: number) => Array(gridSize).fill(Array(gridSize).fill(false));

export default function useRobotPainter(gridSize = 10) {
    const [robotPosition, setRobotPosition] = useState({x: 0, y: 0});
    const [robotDirection, setRobotDirection] = useState('up');
    const [grid, setGrid] = useState(createGrid(gridSize));
    const [spacesPainted, setSpacesPainted] = useState<string[]>([]);

    useEffect(() => {
        moveRobot('');
    }, [])

    const paintCell = useCallback((x: number, y: number): void => {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[y] = [...newGrid[y]];
            newGrid[y][x] = true;
            return newGrid;
        });
    }, []);

    const moveRobot = useCallback((direction: string): void => {
        setRobotPosition(prevPosition => {
            let {x, y} = prevPosition;
            switch (direction) {
                case 'up':
                    x = robotPosition.x > 0 ? robotPosition.x - 1 : robotPosition.x;
                    break;
                case 'down':
                    x = robotPosition.x < 9 ? robotPosition.x + 1 : robotPosition.x;
                    break;
                case 'left':
                    y = robotPosition.y > 0 ? robotPosition.y - 1 : robotPosition.y;
                    break;
                case 'right':
                    y = robotPosition.y < 9 ? robotPosition.y + 1 : robotPosition.y;
                    break;

                default:
                    break;
            }

            paintCell(x, y)
            setSpacesPainted((prev) => [...prev, `${x},${y}`]);
            setRobotDirection(direction);

            return {x, y}
        })

    }, [grid, paintCell]);


    return {
        robotPosition,
        robotDirection,
        spacesPainted,
        grid,
        moveRobot
    };
}