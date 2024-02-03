
import {useState, useEffect} from 'react';


interface RobotControllerProps {
    onMove: (x: number, y: number) => void;
}

const RobotController = ({onMove}: RobotControllerProps) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [painted, setPainted] = useState<string[]>([]);

    useEffect(() => {
        onMove(position.x, position.y);
        setPainted((prev) => [...prev, `${position.x},${position.y}`]);
    }, [position, onMove]);

    const move = (direction: string): void => {
        setPosition((prev) => {
            let {x, y} = prev;
            switch (direction) {
                case 'up':
                    x = x > 0 ? x - 1 : x;
                    break;
                case 'down':
                    x = x < 9 ? x + 1 : x;
                    break;
                case 'left':
                    y = y > 0 ? y - 1 : y;
                    break;
                case 'right':
                    y = y < 9 ? y + 1 : y;
                    break;
                default:
                    break;
            }
            return {x, y};
        });
    };

    return (
        <div>
            <button onClick={() => move('up')}>Up</button>
            <button onClick={() => move('down')}>Down</button>
            <button onClick={() => move('left')}>Left</button>
            <button onClick={() => move('right')}>Right</button>
            <div>Position: ({position.x}, {position.y})</div>
            <div>Spaces Painted: {new Set(painted).size}</div>
        </div>
    );
};

export default RobotController;
