
import {extend, useFrame, useThree} from "react-three-fiber";
import React, { useRef } from "react";
import {FlyControls} from "three/examples/jsm/controls/FlyControls";




extend({ FlyControls })
export default function CameraControls() {
    const { camera,gl:{domElement} } = useThree()
    const ref = useRef()
    useFrame((state, delta) => ref.current.update(delta))
    return <flyControls ref={ref} args={[camera,domElement]} dragToLook={true}  movementSpeed={4.4} rollSpeed={2}  />
}