import './Home.css'
import Grid from "../../components/Grid/Grid.tsx";
import RobotController from "../../components/RobotController/RobotController.tsx";
import useRobotPainter from "../../hooks/useRobotPainter.tsx";

function Home() {
    const { robotPosition,grid,spacesPainted,  moveRobot} = useRobotPainter(10);

    return (
        <div className="home-container" tabIndex={0} onKeyDown={(e) => moveRobot(e.key.replace("Arrow",'').toLowerCase())}>
            <Grid grid={grid} robotPosition={robotPosition}/>
            <RobotController onMove={moveRobot}/>
            <div>Position: ({robotPosition.x}, {robotPosition.y})</div>
            <div>Spaces Painted: {new Set(spacesPainted).size}</div>
        </div>
    )
}

export default Home
