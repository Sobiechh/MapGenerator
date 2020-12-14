import React from 'react';
import {Canvas, extend, useFrame} from 'react-three-fiber'
import Ground from "../components/Ground";
import Box from "../components/Box";
import CameraControls from "../components/CameraControls"
import { Stars } from '@react-three/drei'
import {Physics} from "use-cannon"



export default function Terrain(){
    var worldSize=7500
    var worldDepth=256
    var worldWidth=256

    return(///x,y,z    - z głebia
        <Canvas>
            <CameraControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Stars />
            <ambientLight intensity={0.1}/>
            <Physics>
                <Box />
                <Ground worldSize={worldSize} worldDepth={worldDepth} worldWidth={worldWidth} />
            </Physics>
            


        </Canvas>
    )
}