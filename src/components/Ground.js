import React, {useRef} from 'react';
import { useFrame} from 'react-three-fiber'
import { usePlane} from "use-cannon"

export default function Ground({worldWidth,worldDepth,worldSize}) {
    const mesh = useRef()
    const [ref] = usePlane(() => ({rotation:[-Math.PI / 2,0,0]}))

    useFrame(() => {
    })
    return (
        <mesh rotation={[-Math.PI / 2,0,0]}
            ref={mesh}>
            <planeBufferGeometry  args={[worldSize,worldSize,worldWidth-1,worldDepth-1] }  />
            <meshPhongMaterial attach="material" color={0xf95b3c}/>

        </mesh>
    )
}