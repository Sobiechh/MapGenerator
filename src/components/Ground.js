import React, {useRef} from 'react';
import { useFrame} from 'react-three-fiber'


export default function Ground({position, data}){
    const mesh = useRef()

    useFrame(() => {
    })
    return (
        <mesh
            ref={mesh}>
            <planeBufferGeometry args={[data.x, data.y, 1]}  />
            <meshPhongMaterial attach="material" color={0xf95b3c}/>
        </mesh>
    )
}