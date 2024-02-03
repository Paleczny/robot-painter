import './Grid.css'; // Create a CSS file for grid styling

interface GridProps{
    grid: [][]
}
const Grid = ({grid}:GridProps) => {

    return (
        <div className="grid">
            {grid.map((row: [], rowIndex: number ) => (
                <div key={rowIndex} className="row">
                    {row.map((col, colIndex: number) => (
                        <div
                            key={colIndex}
                            className={`cell ${col ? 'painted' : ''}`}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;