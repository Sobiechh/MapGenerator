import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber'
import Ground from "../components/Ground";
import Camera from "../components/Camera";
export default function Terrain(){
    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <camera position={[0,50,0]}/>
            <Ground />
        </Canvas>
    )
}