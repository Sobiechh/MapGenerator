import React, {useRef} from 'react';
import {Canvas, useFrame} from 'react-three-fiber'

export default function Ground() {
    const mesh = useRef()

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (
        <mesh
            ref={mesh}>
            <planeBufferGeometry attach="geometry" args={[100, 100]}/>
            <meshPhongMaterial attach="material" color={0xf95b3c}/>
        </mesh>
    )
}