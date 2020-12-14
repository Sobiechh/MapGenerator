import React from 'react';
import {Canvas, extend, useFrame, useThree} from 'react-three-fiber'
import Ground from "../components/Ground";
import Box from "../components/Box";
import CameraControls from "../components/CameraControls"
import { Sky, Stars } from '@react-three/drei'
import {Physics} from "use-cannon"
import { CubeTextureLoader } from "three";

function Skybox() {
    const {scene} = useThree()
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
        "/5.jpg",
        "/6.jpg",
    ]);
    scene.background = texture
    return null
}

export default function Terrain(){
    return(///x,y,z    - z głebia
        <Canvas>
            <CameraControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <directionalLight intensity={0.5}/> 
            <Stars />
            <ambientLight intensity={0.1}/>
            <Physics>
                <Box />
                <Ground position={[100, 3, 0]} />
            </Physics>
            <Skybox />
        </Canvas>
    )
}