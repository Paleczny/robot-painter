import {Dispatch, useEffect, useState, SetStateAction} from "react";

import {HighScore} from "../types/HighScore.type.ts";



function useHighScore(gridSize = 10): [HighScore, Dispatch<SetStateAction<HighScore>>] {
    const [highScore, setHighScore] = useState<HighScore>(JSON.parse(localStorage.getItem(`highScore-${gridSize}`) || `{"minutes":"99", "seconds":"99"}`));


    useEffect(() => {
        setHighScore(JSON.parse(localStorage.getItem(`highScore-${gridSize}`) || `{"minutes":"99", "seconds":"99"}`));
    }, [gridSize]);

    return [highScore, setHighScore];
}

export default useHighScore;