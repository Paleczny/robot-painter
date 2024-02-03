import "./RobotController.scss"

interface RobotControllerProps {
    onMove: (direction: string) => void;
}

const RobotController = ({onMove}: RobotControllerProps) => {

    return (
        <div className="controller-container">
            <button onClick={() => onMove('up')}>Up</button>
            <div>
                <button onClick={() => onMove('left')}>Left</button>
                <button onClick={() => onMove('right')}>Right</button>
            </div>
            <button onClick={() => onMove('down')}>Down</button>
        </div>
    );
};

export default RobotController;
