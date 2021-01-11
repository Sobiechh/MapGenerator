import React from 'react';
import {Canvas, extend, useFrame} from 'react-three-fiber'
import Ground from "../components/Ground";
import Box from "../components/Box";
import CameraControls from "../components/CameraControls"
import {Stars} from '@react-three/drei'
import {Physics} from "use-cannon"


export default function Terrain() {
    var pointsSize = 512/4;//256 // wielkość mapy przed skalowaniem jej ( czyli tak jakby jakość erozji)
    var iterations = 3; //300 ilość iteracji erozji
    var scaleMultiplier = 1;       // wszystkie multiplier - domyślnie 1 - przedziały od 1 do powiedzmy 10 w sliderach ale w sumie 10 to przesada
    var erosionMultiplier = 1;
    var depositionMultiplier = 1;
    var evaporationMultiplier = 1;
    var worldSizeScale=20; // skala wielkości terenu (wielkość skalowania np x4) (tutaj slider nie schodzący poniżej wartości 1)



    return (///x,y,z    - z głebia
        <Canvas>
            <CameraControls/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
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
            <ambientLight intensity={0.1}/>
            <Physics>
                <Box/>
                <Ground  pointsSize={pointsSize} iterations={iterations} scaleMultiplier={scaleMultiplier} depositionMultiplier={depositionMultiplier}
                erosionMultiplier={erosionMultiplier} evaporationMultiplier={evaporationMultiplier} worldSizeScale={worldSizeScale}/>
            </Physics>


        </Canvas>
    )
}