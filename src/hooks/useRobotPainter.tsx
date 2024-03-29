import {useCallback, useEffect, useState} from "react";

const createGrid = (gridSize: number) => Array(gridSize).fill(Array(gridSize).fill(false));

export default function useRobotPainter(gridSize = 10) {
    const [robotPosition, setRobotPosition] = useState({x: 0, y: 0});
    const [robotDirection, setRobotDirection] = useState('up');
    const [grid, setGrid] = useState(createGrid(gridSize));
    const [spacesPainted, setSpacesPainted] = useState<string[]>([]);
    
    useEffect(()=>{
        setSpacesPainted([])
        setRobotPosition({x:0,y:0})
        setRobotDirection('up')
        setGrid(createGrid(gridSize))
        moveRobot('');
    },[gridSize])

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
                    x = prevPosition.x > 0 ? prevPosition.x - 1 : prevPosition.x;
                    break;
                case 'down':
                    x = prevPosition.x < grid.length - 1 ? prevPosition.x + 1 : prevPosition.x;
                    break;
                case 'left':
                    y = prevPosition.y > 0 ? prevPosition.y - 1 : prevPosition.y;
                    break;
                case 'right':
                    y = prevPosition.y < grid.length -1 ? prevPosition.y + 1 : prevPosition.y;
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