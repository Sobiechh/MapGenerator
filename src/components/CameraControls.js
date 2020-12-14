
import {extend, useFrame, useThree} from "react-three-fiber";
import React, { Suspense, useRef } from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


extend({ OrbitControls });
export default function CameraControls(props) {{

        const {
            camera,
            gl: { domElement },
        } = useThree();
        // Ref to the controls, so that we can update them on every frame using useFrame
        const controls = useRef();
        useFrame((state) => controls.current.update());
        return <orbitControls ref={controls} args={[camera, domElement]} />;
    };
}