import {useEffect} from "react";

import PrimaryButton from "../Button/PrimaryButton.tsx";

import "./RobotController.scss"

interface RobotControllerProps {
    onMove: (direction: string) => void;
}

const RobotController = ({onMove}: RobotControllerProps) => {

    useEffect(() => {
        function downHandler(key: KeyboardEvent) {
            if (key.key.includes('Arrow')) {
                onMove(key.key.toString().replace("Arrow", '').toLowerCase())
            }
        }

        window.addEventListener("keydown", downHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, [onMove]);

    return (
        <div className="controller-container">
            <PrimaryButton onClick={() => onMove('up')}>↑</PrimaryButton>
            <div>
                <PrimaryButton onClick={() => onMove('left')}>←</PrimaryButton>
                <PrimaryButton onClick={() => onMove('right')}>→</PrimaryButton>
            </div>
            <PrimaryButton onClick={() => onMove('down')}>↓</PrimaryButton>
        </div>
    );
};

export default RobotController;
