import {useEffect, useMemo, useState} from "react";

import {GameStarted} from "../types/GameStarted.enum.ts";

function useTimer(gameStatus: GameStarted){

    const [secondsElapsed, setSecondsElapsed] = useState(0)
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;

    // Format minutes and seconds to have leading zeros if needed
    const formattedMinutes = useMemo(() => {
        return String(minutes).padStart(2, '0');
    },[minutes])
    
    const formattedSeconds = String(seconds).padStart(2, '0');

    useEffect(() => {
        let timer: number | undefined;
        if (gameStatus === GameStarted.start) {
            timer =
                setInterval(() => {
                    setSecondsElapsed(prev => prev + 1)
                }, 1000)

        }else if(gameStatus === GameStarted.stop){
            clearInterval(timer)
        }else if(gameStatus === GameStarted.reset){
            clearInterval(timer)
            setSecondsElapsed(0)
        }
        
        return () => clearInterval(timer)
    }, [gameStatus])

    return {minutes: formattedMinutes, seconds: formattedSeconds}
}

export default useTimer;