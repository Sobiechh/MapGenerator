import React, {useRef} from 'react';
import { useFrame} from 'react-three-fiber'


export default function Ground() {
    const mesh = useRef()

    useFrame(() => {
    })
    return (
        <mesh
            ref={mesh}>
            <planeBufferGeometry args={[70, 70, 1]}  />
            <meshPhongMaterial attach="material" color={0xf95b3c}/>
        </mesh>
    )
}