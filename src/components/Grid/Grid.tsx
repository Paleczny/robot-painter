import './Grid.scss';

import Vacuum from "/vacuum.svg"

interface GridProps {
    grid: [][],
    robotPosition: { x: number, y: number },
    robotDirection: string,
}

const Grid = ({grid, robotPosition, robotDirection}: GridProps) => {
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
                        const showRobotInCell = rowIndex === robotPosition.y && colIndex === robotPosition.x;
                        let imgRotation;
                        switch (robotDirection) {
                            case 'up'   :imgRotation = '0deg';break;
                            case 'right':imgRotation = '90deg';break;
                            case 'down' :imgRotation = '180deg';break;
                            case 'left' :imgRotation = '270deg';break;
                        }
                        return (
                            <div
                                key={colIndex}
                                className={`cell ${col ? 'painted' : ''}`}
                            >
                                {rowIndex === 0 && <span className="row-index-span">{colIndex}</span>}
                                {showRobotInCell && <img alt="" className='robot-img' src={Vacuum} style={{rotate: imgRotation}}/>}
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    );
};

export default Grid;