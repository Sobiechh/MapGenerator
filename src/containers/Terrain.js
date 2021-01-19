import React, { useEffect,  Suspense} from 'react';
import * as THREE from 'three'
import {Canvas} from 'react-three-fiber'
import Ground from "../components/Ground";
import Box from "../components/Box";
import CameraControls from "../components/CameraControls"
import {Stars} from '@react-three/drei'
import {Physics} from "use-cannon"

export default function Terrain({   pointSizeArg,
                                    iterationsArg,
                                    erosionMultiplierArg,
                                    scaleMultiplierArg,
                                    evaporationMultiplierArg,
                                    depositionMultiplierArg,
                                    worldSizeScaleArg,
                                    buttonGenerate
}){
    var pointsSize = pointSizeArg/2;//256 // wielkość mapy przed skalowaniem jej ( czyli tak jakby jakość erozji)
    var iterations = iterationsArg; //300 ilość iteracji erozji
    var erosionMultiplier = erosionMultiplierArg;
    var scaleMultiplier = scaleMultiplierArg;       // wszystkie multiplier - domyślnie 1 - przedziały od 1 do powiedzmy 10 w sliderach ale w sumie 10 to przesada
    var evaporationMultiplier = evaporationMultiplierArg;
    var depositionMultiplier = depositionMultiplierArg;
    var worldSizeScale = worldSizeScaleArg; // skala wielkości terenu (wielkość skalowania np x4) (tutaj slider nie schodzący poniżej wartości 1)

    return(
        <Canvas>
            <CameraControls/>
            <spotLight position={[20, 100, 10]} angle={0.15} penumbra={2}/>
            <pointLight
                intensity={1.9}
                position={[-6, 3, -6]}
                color={0xffcc77}
            />
            <pointLight
                intensity={1.9}
                position={[6, 3, 6]}
                color={0xffcc77}
            />
            <Stars/>
            <ambientLight intensity={0.4}/>
            <Physics>
                <Ground
                    pointsSize={pointsSize} 
                    iterations={iterations} 
                    scaleMultiplier={scaleMultiplier}
                    depositionMultiplier={depositionMultiplier}
                    erosionMultiplier={erosionMultiplier} 
                    evaporationMultiplier={evaporationMultiplier}
                    worldSizeScale={worldSizeScale}
                    buttonGenerate={buttonGenerate}
                />
            </Physics>
        </Canvas>
    )
}