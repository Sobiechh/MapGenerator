
import {extend, useFrame, useThree} from "react-three-fiber";
import React, { useRef } from "react";
import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls";




extend({ FirstPersonControls })
export default function CameraControls() {
    const { camera,gl:{domElement} } = useThree()
    const ref = useRef()
    useFrame((state, delta) => ref.current.update(delta))
    return <firstPersonControls ref={ref} args={[camera,domElement]}  movementSpeed={1} lookSpeed={0.3}  />
}