
import {extend, useFrame, useThree} from "react-three-fiber";
import React, { useRef } from "react";
import {FlyControls} from "three/examples/jsm/controls/FlyControls";




extend({ FlyControls })
export default function CameraControls() {
    const { camera,gl:{domElement} } = useThree()
    const ref = useRef((controls)=> console.log("eeeeeeeee",controls))
    useFrame((state, delta) => ref.current.update(delta))
    return <flyControls ref={ref} args={[camera,domElement]}  movementSpeed={1.5} rollSpeed={0.4} dragToLook={false}/>
}