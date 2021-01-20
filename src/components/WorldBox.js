import React, {useRef} from 'react';
import {BackSide, Color, RepeatWrapping, TextureLoader} from "three";
import {useLoader} from "react-three-fiber";


export default function WorldBox({scale}) {
    const skyboxTop = useLoader(TextureLoader, 'textures/skybox_top.jpg');
    const skyboxBottom = useLoader(TextureLoader, 'textures/skybox_bottom.jpg');
    const skyboxFar = useLoader(TextureLoader, 'textures/skybox_far.jpg');
    const skyboxNear = useLoader(TextureLoader, 'textures/skybox_near.jpg');
    const skyboxLeft = useLoader(TextureLoader, 'textures/skybox_left.jpg');
    const skyboxRight = useLoader(TextureLoader, 'textures/skybox_right.jpg');


    let size=2*scale - 0.008
    return (
        <mesh>

            <boxBufferGeometry args={[size, size, size]}/>

            <meshBasicMaterial side={BackSide} attachArray="material" map={skyboxRight} />
            <meshBasicMaterial side={BackSide} attachArray="material" map={skyboxLeft} />
            <meshBasicMaterial side={BackSide} attachArray="material"  map={skyboxTop} />
            <meshBasicMaterial side={BackSide} attachArray="material" map={skyboxBottom}/>
            <meshBasicMaterial side={BackSide} attachArray="material" map={skyboxNear} />
            <meshBasicMaterial side={BackSide} attachArray="material" map={skyboxFar} />

        </mesh>
    )
}