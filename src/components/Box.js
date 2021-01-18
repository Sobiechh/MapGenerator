import React, {useRef} from 'react';
import {BackSide, DoubleSide} from "three";


export default function Box({scale}) {

    let size=2*scale - 0.008
    return (
        <mesh>

            <boxBufferGeometry args={[size, size, size]}/>
            <meshPhongMaterial side={BackSide} attach="material"  color="white"/>

        </mesh>
    )
}