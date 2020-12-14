import React, {useRef} from 'react';
import {Canvas, useFrame} from 'react-three-fiber'

export default function Ground({worldWidth,worldDepth,worldSize}) {
    const mesh = useRef()

    useFrame(() => {

    })
    return (
        <mesh
            ref={mesh}>
            <planeBufferGeometry  args={[worldSize,worldSize,worldWidth-1,worldDepth-1] }  />
            <meshPhongMaterial attach="material" color={0xf95b3c}/>
        </mesh>
    )
}