import React from 'react';
import {Canvas, extend, useFrame} from 'react-three-fiber'
import Ground from "../components/Ground";
import CameraControls from "../components/CameraControls"



export default function Terrain(){
    var worldSize=7500
    var worldDepth=256
    var worldWidth=256

    return(///x,y,z    - z głebia
        <Canvas>
            <CameraControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Ground worldSize={worldSize} worldDepth={worldDepth} worldWidth={worldWidth} />
        </Canvas>
    )
}