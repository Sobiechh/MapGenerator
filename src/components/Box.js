import React, {useRef} from 'react';
import { useFrame} from 'react-three-fiber'
import { useBox} from "use-cannon"


export default function Box() {
    
    const [ref,api] = useBox(() => ({mass: 1, position: [0,2,0]}))

    useFrame(() => {
    })
    return (
        <mesh onClick={() => {
            api.velocity.set(0, 2, 0);
        }} ref={ref} position={[0,2,0]}
            >
            <boxBufferGeometry attach="geometry"  />
            <meshLambertMaterial attach="material" color="hotpink"/>
            
        </mesh>
    )
}