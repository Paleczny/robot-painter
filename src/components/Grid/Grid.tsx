import './Grid.scss';
import Vacuum from "/vacuum.svg"
interface GridProps{
    grid: [][],
    robotPosition: {x: number,y: number},
    robotDirection: string,
}

const Grid = ({grid, robotPosition, robotDirection}:GridProps) => {
    return (
        <div className="grid">
            {grid.map((row: [], rowIndex: number ) => (
                <div key={rowIndex} className="row">
                    {row.map((col, colIndex: number) => {
                        const showRobotInCell = rowIndex === robotPosition.y && colIndex === robotPosition.x;
                        let imgRotation;
                        switch (robotDirection){
                            case 'up'   : imgRotation = '0deg'; break;
                            case 'right': imgRotation = '90deg'; break;
                            case 'down' : imgRotation = '180deg'; break;
                            case 'left' : imgRotation = '270deg'; break;
                        }
                        return (
                        <div
                            key={colIndex}
                            className={`cell ${col ? 'painted' : ''}`}
                        >
                            { showRobotInCell && <img alt="" className='robot-img' src={Vacuum} style={{rotate: imgRotation}}/>}
                        </div>
                    )})}
                </div>
            ))}
        </div>
    );
};

export default Grid;