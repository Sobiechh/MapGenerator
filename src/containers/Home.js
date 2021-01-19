import React, { useState } from 'react';
import Terrain from "./Terrain";
import Sidebar from '../components/Sidebar';

function Home() {    
    const [pointSize, setPointSize] = useState(512);
    const [iterations, setIterations] = useState(300);
    const [scaleMultiplier, setScaleMultiplier] = useState(4);
    const [erosionMultiplier, setErosionMultiplier] = useState(1);
    const [depositionMultiplier, setDepositionMultiplier] = useState(1);
    const [evaporationMultiplier, setEvaporationMultiplier] = useState(1);
    const [worldSizeScale, setWorldSizeScale] = useState(3);
    const [buttonGenerate, setButtonGenerate] = useState(true);

    return (
        <div className = 'home'>
            <Sidebar
                    pointSize={pointSize}
                    setPointSize={setPointSize}
                    iterations={iterations}
                    setIterations={setIterations}
                    scaleMultiplier={scaleMultiplier}
                    setScaleMultiplier={setScaleMultiplier}
                    erosionMultiplier={erosionMultiplier}
                    setErosionMultiplier={setErosionMultiplier}
                    depositionMultiplier={depositionMultiplier}
                    setDepositionMultiplier={setDepositionMultiplier}
                    evaporationMultiplier={evaporationMultiplier}
                    setEvaporationMultiplier={setEvaporationMultiplier}
                    worldSizeScale={worldSizeScale}
                    setWorldSizeScale={setWorldSizeScale}
                    buttonGenerate={buttonGenerate}
                    setButtonGenerate={setButtonGenerate}
                    />
            <Terrain 
                    pointSizeArg={pointSize}
                    iterationsArg={iterations}
                    scaleMultiplierArg={scaleMultiplier}
                    erosionMultiplierArg={erosionMultiplier}
                    depositionMultiplierArg={depositionMultiplier}
                    evaporationMultiplierArg={evaporationMultiplier}
                    worldSizeScaleArg={worldSizeScale}
                    buttonGenerate={buttonGenerate}
                    />
        </div>
    );
}

export default Home;
