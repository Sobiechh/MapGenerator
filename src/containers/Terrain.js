import React from 'react';
import {Canvas} from 'react-three-fiber'
import Ground from "../components/Ground";
import CameraControls from "../components/CameraControls"

export default function Terrain({x, y}){

    var pointsSize = 512 / 2;//256 // wielkość mapy przed skalowaniem jej ( czyli tak jakby jakość erozji)
    var iterations = 300; //300 ilość iteracji erozji
    var scaleMultiplier = 1;       // wszystkie multiplier - domyślnie 1 - przedziały od 1 do powiedzmy 10 w sliderach ale w sumie 10 to przesada
    var erosionMultiplier = 1;
    var depositionMultiplier = 1;
    var evaporationMultiplier = 1;
    var worldSizeScale = 10; // skala wielkości terenu (wielkość skalowania np x4) (tutaj slider nie schodzący poniżej wartości 1)

    return(///x,y,z    - z głebia
        <Canvas>
            <CameraControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Ground position={[10, 10, 0]} data = {{x,y}}/>
        </Canvas>
    )
}