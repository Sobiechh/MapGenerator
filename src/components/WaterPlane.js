import React from 'react';
import {DoubleSide, Euler, Vector3} from "three";



export default function WaterPlane({scale,waterHeight}) {

    console.log("woda wys:",waterHeight)
    let size=2*scale
    return (
        <mesh  rotation={new Euler(-Math.PI*0.5, 0, 0)} position={new Vector3(0, waterHeight , 0)}>

            <planeGeometry  args={[size, size, size]}   />
            <meshLambertMaterial color="deepskyblue" transparent={true} opacity={0.7} side={DoubleSide}/>

        </mesh>
    )
}