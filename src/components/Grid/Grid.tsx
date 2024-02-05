import './Grid.scss';

import Vacuum from "/vacuum.svg"
import {useMemo} from "react";

interface GridProps {
    grid: [][],
    robotPosition: { x: number, y: number },
    robotDirection: string,
}

const Grid = ({grid, robotPosition, robotDirection}: GridProps) => {

    const getRobotImgPosition = useMemo(() => {
        const elementById = document.getElementById(`${robotPosition.y},${robotPosition.x}`);
        const width = elementById?.offsetWidth / 1.4
        const left = elementById?.offsetLeft + (elementById?.offsetWidth / 2) - width / 2;
        const top = elementById?.offsetTop + elementById?.offsetHeight / 5;
        const height = elementById?.offsetHeight / 2;
        return {left, top, width, height}
    }, [robotPosition])

    const direction = useMemo(() => {
        let imgRotation;
        switch (robotDirection) {
            case 'up'   :imgRotation = '0deg';break;
            case 'right':imgRotation = '90deg';break;
            case 'down' :imgRotation = '180deg';break;
            case 'left' :imgRotation = '270deg';break;
        }
        return imgRotation;
    }, [robotDirection])

    return (
        <div className="grid"
             style={{
                 gridTemplateColumns: `repeat(${grid.length},1fr)`,
                 gridTemplateRows: `repeat(${grid.length},70px)`
             }}>
            {grid.map((row: [], rowIndex: number) => (
                <div key={rowIndex}>
                    {rowIndex}
                    {row.map((col, colIndex: number) => {
                        // const showRobotInCell = rowIndex === robotPosition.y && colIndex === robotPosition.x;
                        return (
                            <div
                                id={`${rowIndex},${colIndex}`}
                                key={colIndex}
                                className={`cell ${col ? 'painted' : ''}`}
                            >
                                {rowIndex === 0 && <span className="row-index-span">{colIndex}</span>}
                                {/*{showRobotInCell && <img alt="" className='robot-img' src={Vacuum} style={{rotate: direction}}/>}*/}
                            </div>
                        )
                    })}
                </div>
            ))}
            {/*having the img here allows for animations because the the image isnt being recreated within the grid
            // the down side is having to use some interesting logic to get the img placement */}
            <img alt=""
                 className='robot-img'
                 src={Vacuum}
                 style={{
                     left: getRobotImgPosition.left,
                     top: getRobotImgPosition.top,
                     rotate: direction,
                     width: getRobotImgPosition.width,
                     height: getRobotImgPosition.height,
                 }}/>
        </div>
    );
};

export default Grid;