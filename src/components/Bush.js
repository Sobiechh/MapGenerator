import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Vector3 } from "three";

export default function Bush(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/bush.glb')

  function bushType(type){
    return (
        <group ref={group} {...props} dispose={null} scale={[0.002, 0.002, 0.002]} position={new Vector3(props.x * props.scale, props.y * props.scale - 0.0004, props.z * props.scale)}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[5.69, 0, -12]}>
                <group position={[-10.84, 15.48, 20.92]} rotation={[-2.94, -0.21, -3.1]}>
                  <group rotation={[0, 0, 0]}>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf21_Leaf_0.geometry} />
                    </group>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf22_Leaf_0.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf23_Leaf_0.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf24_Leaf_0.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf25_Leaf_0.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf26_Leaf_0.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf27_Leaf_0.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf28_Leaf_0.geometry} />
                    </group>
                  </group>
                  <group position={[-20, 0, 0]} rotation={[0, 0, 0]} scale={[1.11, 1.11, 1.11]}>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf13_Leaf_0.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf14_Leaf_0.geometry} />
                    </group>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf15_Leaf_0.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf16_Leaf_0.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf17_Leaf_0.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf18_Leaf_0.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]} scale={[1, 1, 1]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf19_Leaf_0.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf20_Leaf_0.geometry} />
                    </group>
                  </group>
                  <group position={[-9.74, -2.99, 18.86]} rotation={[0, -0.69, 0]} scale={[0.97, 0.97, 0.97]}>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf13_Leaf_0_1.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf14_Leaf_0_1.geometry} />
                    </group>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf15_Leaf_0_1.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf16_Leaf_0_1.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf17_Leaf_0_1.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf18_Leaf_0_1.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]} scale={[1, 1, 1]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf19_Leaf_0_1.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf20_Leaf_0_1.geometry} />
                    </group>
                  </group>
                  <group position={[9.17, -6.13, 14.12]} rotation={[0, -0.41, 0]}>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf13_Leaf_0_2.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf14_Leaf_0_2.geometry} />
                    </group>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf15_Leaf_0_2.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf16_Leaf_0_2.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf17_Leaf_0_2.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf18_Leaf_0_2.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf19_Leaf_0_2.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf20_Leaf_0_2.geometry} />
                    </group>
                  </group>
                </group>
                <group position={[0, 28, 0]}>
                  <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf21_Leaf_0_1.geometry} />
                  </group>
                  <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]} scale={[1, 1, 1]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf22_Leaf_0_1.geometry} />
                  </group>
                  <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf23_Leaf_0_1.geometry} />
                  </group>
                  <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf24_Leaf_0_1.geometry} />
                  </group>
                  <group rotation={[-1.1, -0.35, 2.32]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf25_Leaf_0_1.geometry} />
                  </group>
                  <group rotation={[-0.88, -1.1, -0.82]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf26_Leaf_0_1.geometry} />
                  </group>
                  <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf27_Leaf_0_1.geometry} />
                  </group>
                  <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                    <mesh material={materials.Leaf} geometry={nodes.Bush_leaf28_Leaf_0_1.geometry} />
                  </group>
                  <group position={[-20, 0, 0]} scale={[1.11, 1.11, 1.11]}>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]} scale={[1, 1, 1]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf13_Leaf_0_3.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf14_Leaf_0_3.geometry} />
                    </group>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf15_Leaf_0_3.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf16_Leaf_0_3.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf17_Leaf_0_3.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf18_Leaf_0_3.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf19_Leaf_0_3.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf20_Leaf_0_3.geometry} />
                    </group>
                  </group>
                  <group position={[-9.74, -2.99, 18.86]} rotation={[0, -0.69, 0]} scale={[0.97, 0.97, 0.97]}>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]} scale={[1, 1, 1]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf13_Leaf_0_4.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf14_Leaf_0_4.geometry} />
                    </group>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf15_Leaf_0_4.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf16_Leaf_0_4.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf17_Leaf_0_4.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf18_Leaf_0_4.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf19_Leaf_0_4.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf20_Leaf_0_4.geometry} />
                    </group>
                  </group>
                  <group position={[9.17, -6.13, 14.12]} rotation={[0, -0.41, 0]}>
                    <group position={[-3.78, -4.05, 15.45]} rotation={[0, -1.26, 2.47]} scale={[1, 1, 1]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf13_Leaf_0_5.geometry} />
                    </group>
                    <group position={[-2.84, -0.53, 0.82]} rotation={[2.79, -0.2, 2.88]} scale={[0.91, 0.91, 0.91]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf14_Leaf_0_5.geometry} />
                    </group>
                    <group position={[-1.45, -2.57, 12.13]} rotation={[-1.49, 1.51, 1.88]} scale={[0.77, 0.77, 0.77]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf15_Leaf_0_5.geometry} />
                    </group>
                    <group rotation={[0.06, 1.04, -0.52]} scale={[0.96, 0.96, 0.96]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf16_Leaf_0_5.geometry} />
                    </group>
                    <group rotation={[-0.88, -1.1, -0.82]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf17_Leaf_0_5.geometry} />
                    </group>
                    <group rotation={[2.78, -0.72, -2.94]} scale={[1.08, 1.08, 1.08]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf18_Leaf_0_5.geometry} />
                    </group>
                    <group rotation={[-1.1, -0.35, 2.32]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf19_Leaf_0_5.geometry} />
                    </group>
                    <group position={[9.65, -0.94, 0]} rotation={[-2.93, 0.09, -2.79]}>
                      <mesh material={materials.Leaf} geometry={nodes.Bush_leaf20_Leaf_0_5.geometry} />
                    </group>
                  </group>
                </group>
              </group>
              <group position={[12.44, 28.8, 9.47]} rotation={[0.72, 0.15, -0.12]}>
                <group rotation={[0, 1.31, -0.58]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped7_Petal1_0.geometry} />
                </group>
                <group rotation={[-Math.PI, -0.35, -Math.PI]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped9_Petal1_0.geometry} />
                </group>
                <group rotation={[2.71, -1.31, 3.01]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped8_Petal1_0.geometry} />
                </group>
                <group rotation={[0, -0.86, -0.36]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped11_Petal1_0.geometry} />
                </group>
                <group rotation={[-1.09, -1.36, -1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped13_Petal1_0.geometry} />
                </group>
                <group rotation={[0, -0.18, 0]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped5_Petal1_0.geometry} />
                </group>
                <group rotation={[-0.12, 0.26, -0.34]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped12_Petal1_0.geometry} />
                </group>
                <group rotation={[2.67, -0.86, -2.95]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped19_Petal1_0.geometry} />
                </group>
                <group rotation={[-Math.PI, 0.7, -Math.PI]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped10_Petal1_0.geometry} />
                </group>
                <group rotation={[0, 0.5, -0.71]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped6_Petal1_0.geometry} />
                </group>
                <group rotation={[-2.96, 0.24, 1.9]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped27_Petal1_0.geometry} />
                </group>
                <group rotation={[-0.15, -1.36, -0.94]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped25_Petal1_0.geometry} />
                </group>
                <group rotation={[0.01, 0.22, -1.07]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped26_Petal1_0.geometry} />
                </group>
                <group rotation={[-0.29, -0.53, 0.39]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped20_Petal1_0.geometry} />
                </group>
                <group rotation={[-3.11, -0.53, 2.26]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped23_Petal1_0.geometry} />
                </group>
                <group rotation={[-1.87, 1.3, 2.17]} scale={[1, 1, 1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped21_Petal1_0.geometry} />
                </group>
                <group rotation={[-0.26, -0.4, -0.84]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped22_Petal1_0.geometry} />
                </group>
                <group rotation={[-2.77, 1.25, 1.84]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped24_Petal1_0.geometry} />
                </group>
                <group rotation={[3, -1.04, 2.72]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped17_Petal1_0.geometry} />
                </group>
                <group rotation={[0.85, 1.07, -0.81]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped16_Petal1_0.geometry} />
                </group>
                <group rotation={[3.07, 1.41, 2.91]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped14_Petal1_0.geometry} />
                </group>
                <group rotation={[-Math.PI, 0.27, 2.6]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped15_Petal1_0.geometry} />
                </group>
              </group>
              <group position={[-5.79, 32.51, -15.28]} rotation={[-0.98, 0.83, 0.42]}>
                <group rotation={[0, 1.31, -0.58]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped7_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-Math.PI, -0.35, -Math.PI]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped9_Petal1_0_1.geometry} />
                </group>
                <group rotation={[2.71, -1.31, 3.01]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped8_Petal1_0_1.geometry} />
                </group>
                <group rotation={[0, -0.86, -0.36]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped11_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-1.09, -1.36, -1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped13_Petal1_0_1.geometry} />
                </group>
                <group rotation={[0, -0.18, 0]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped5_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-0.12, 0.26, -0.34]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped12_Petal1_0_1.geometry} />
                </group>
                <group rotation={[2.67, -0.86, -2.95]} scale={[1, 1, 1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped19_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-Math.PI, 0.7, -Math.PI]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped10_Petal1_0_1.geometry} />
                </group>
                <group rotation={[0, 0.5, -0.71]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped6_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-2.96, 0.24, 1.9]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped27_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-0.15, -1.36, -0.94]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped25_Petal1_0_1.geometry} />
                </group>
                <group rotation={[0.01, 0.22, -1.07]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped26_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-0.29, -0.53, 0.39]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped20_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-3.11, -0.53, 2.26]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped23_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-1.87, 1.3, 2.17]} scale={[1, 1, 1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped21_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-0.26, -0.4, -0.84]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped22_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-2.77, 1.25, 1.84]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped24_Petal1_0_1.geometry} />
                </group>
                <group rotation={[3, -1.04, 2.72]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped17_Petal1_0_1.geometry} />
                </group>
                <group rotation={[0.85, 1.07, -0.81]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped16_Petal1_0_1.geometry} />
                </group>
                <group rotation={[3.07, 1.41, 2.91]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped14_Petal1_0_1.geometry} />
                </group>
                <group rotation={[-Math.PI, 0.27, 2.6]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped15_Petal1_0_1.geometry} />
                </group>
              </group>
              <group position={[-14.51, 26.05, 15.32]} rotation={[0.14, 0.43, 0.99]}>
                <group rotation={[0, 1.31, -0.58]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped7_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-Math.PI, -0.35, Math.PI]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped9_Petal1_0_2.geometry} />
                </group>
                <group rotation={[2.71, -1.31, 3.01]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped8_Petal1_0_2.geometry} />
                </group>
                <group rotation={[0, -0.86, -0.36]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped11_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-1.09, -1.36, -1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped13_Petal1_0_2.geometry} />
                </group>
                <group rotation={[0, -0.18, 0]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped5_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-0.12, 0.26, -0.34]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped12_Petal1_0_2.geometry} />
                </group>
                <group rotation={[2.67, -0.86, -2.95]} scale={[1, 1, 1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped19_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-Math.PI, 0.7, -Math.PI]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped10_Petal1_0_2.geometry} />
                </group>
                <group rotation={[0, 0.5, -0.71]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped6_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-2.96, 0.24, 1.9]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped27_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-0.15, -1.36, -0.94]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped25_Petal1_0_2.geometry} />
                </group>
                <group rotation={[0.01, 0.22, -1.07]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped26_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-0.29, -0.53, 0.39]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped20_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-3.11, -0.53, 2.26]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped23_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-1.87, 1.3, 2.17]} scale={[1, 1, 1]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped21_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-0.26, -0.4, -0.84]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped22_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-2.77, 1.25, 1.84]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped24_Petal1_0_2.geometry} />
                </group>
                <group rotation={[3, -1.04, 2.72]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped17_Petal1_0_2.geometry} />
                </group>
                <group rotation={[0.85, 1.07, -0.81]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped16_Petal1_0_2.geometry} />
                </group>
                <group rotation={[3.07, 1.41, 2.91]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped14_Petal1_0_2.geometry} />
                </group>
                <group rotation={[-Math.PI, 0.27, 2.6]}>
                  <mesh material={materials.Petal1} geometry={nodes.Petal_shaped15_Petal1_0_2.geometry} />
                </group>
              </group>
            </group>
          </group>
        </group>
      )
  }

  console.log(props.type, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
 return (
     <group>
         {bushType(props.type)}
     </group>
 )
}