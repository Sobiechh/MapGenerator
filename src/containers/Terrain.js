import React from 'react';
import {Canvas} from 'react-three-fiber'
import Ground from "../components/Ground";
import Box from "../components/Box";
import CameraControls from "../components/CameraControls"
import { Stars } from '@react-three/drei'
import {Physics} from "use-cannon"



export default function Terrain({x, y}){
    var worldSize=100
    //512
    var worldDepth=30
    var worldWidth=30

    return(///x,y,z    - z głebia
        <Canvas>
            <CameraControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
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
            <Stars />
            <ambientLight intensity={0.1}/>
            <Physics>
                <Box />
                <Ground worldSize={worldSize} worldDepth={worldDepth} worldWidth={worldWidth} />
            </Physics>
        </Canvas>
    )
}