import React from 'react';
import { Canvas } from 'react-three-fiber'
import Ground from "../components/Ground";
// import Camera from "../components/Camera";
export default function Terrain(){
    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            {/* <Camera position={[50,500,500]}/> */}
            <Ground />
        </Canvas>
    )
}