import {useEffect} from 'react';

interface RobotControllerProps {
    onMove: (x: number, y: number) => void;
    position: { x: number, y: number }
}

const RobotController = ({onMove, position}: RobotControllerProps) => {

    useEffect(() => {
        onMove(position.x, position.y);
    }, []);

    const move = (direction: string): void => {

        switch (direction) {
            case 'up':
                position.x = position.x > 0 ? position.x - 1 : position.x;
                break;
            case 'down':
                position.x = position.x < 9 ? position.x + 1 : position.x;
                break;
            case 'left':
                position.y = position.y > 0 ? position.y - 1 : position.y;
                break;
            case 'right':
                position.y = position.y < 9 ? position.y + 1 : position.y;
                break;

            default:
                break;
        }
        onMove(position.x, position.y)
    };

    return (
        <div>
            <button onClick={() => move('up')}>Up</button>
            <button onClick={() => move('down')}>Down</button>
            <button onClick={() => move('left')}>Left</button>
            <button onClick={() => move('right')}>Right</button>
        </div>
    );
};

export default RobotController;
