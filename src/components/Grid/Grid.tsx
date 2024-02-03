import './Grid.scss';
import Vacuum from "/vacuum.svg"
interface GridProps{
    grid: [][],
    robotPosition: {x: number,y: number}
}

const Grid = ({grid, robotPosition}:GridProps) => {
    return (
        <div className="grid">
            {grid.map((row: [], rowIndex: number ) => (
                <div key={rowIndex} className="row">
                    {row.map((col, colIndex: number) => {
                        const showRobotInCell = rowIndex === robotPosition.y && colIndex === robotPosition.x;
                        return (
                        <div
                            key={colIndex}
                            className={`cell ${col ? 'painted' : ''}`}
                        >
                            { showRobotInCell && <img alt="" className='robot-img' src={Vacuum}/>}
                        </div>
                    )})}
                </div>
            ))}
        </div>
    );
};

export default Grid;