import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Vector3 } from "three";


export default function Tree(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("models/tree.glb")

    function treeType(type) {
        switch (type) {
            case 0:
                return (
                    <group ref={group} {...props} dispose={null} scale={[0.0007, 0.0007, 0.0007]} position={new Vector3(props.x * props.scale, props.y * props.scale - 0.0004, props.z * props.scale)} >
                        <group rotation={[-Math.PI / 2, 0, 0]}>
                            <group rotation={[Math.PI / 2, 0, 0]}>
                                <group rotation={[0, -1.17, 0]}>
                                    <group rotation={[2.92, -0.02, 3.14]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_0_2_leaf1_0.geometry} />
                                    </group>
                                    <group rotation={[-0.39, 0.94, 0.32]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_3_leaf1_0.geometry} />
                                    </group>
                                    <group position={[31.15, 333.89, 86.41]} rotation={[0.6, 1.11, -0.55]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_4_leaf1_0.geometry} />
                                    </group>
                                    <group position={[24.46, 338.82, -17.53]} rotation={[1.29, -1.03, 1.24]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_5_leaf1_0.geometry} />
                                    </group>
                                    <group position={[19.67, 228.41, 31.31]} rotation={[-3.11, 0.96, 3.11]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_6_leaf1_0.geometry} />
                                    </group>
                                    <group position={[39.15, 401.58, 26.92]} rotation={[2.85, -1.05, 2.89]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_7_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[19.47, 234.93, -103.08]} rotation={[-0.04, -0.05, 0.01]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_8_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[86.81, 436.83, -58.97]} rotation={[0.74, -0.36, -0.63]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_11_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[55.29, 225.94, -6.84]} rotation={[0.52, -0.03, 0.02]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_12_leaf1_0.geometry} />
                                    </group>
                                    <group position={[2.53, 407.9, -56.71]} rotation={[1.81, 0.2, -3.1]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_13_leaf1_0.geometry} />
                                    </group>
                                    <group position={[-94.56, 289.52, -38.91]} rotation={[1.38, 0.71, -1.18]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_14_leaf1_0.geometry} />
                                    </group>
                                    <group position={[25.85, 241.86, 42.78]} rotation={[1.48, -0.87, 1.45]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_15_leaf1_0.geometry} />
                                    </group>
                                    <group position={[20.83, 244.06, -15.31]} rotation={[0.73, -1.16, 0.69]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_16_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[19.24, 342.23, -12.13]} rotation={[2.59, 0.56, -2.83]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_17_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[26.6, 264.37, -134.54]} rotation={[-0.27, -0.58, -0.15]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_19_leaf1_0.geometry} />
                                    </group>
                                    <group position={[25.25, 268.78, 65.65]} rotation={[-2.88, -0.09, -3.12]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_20_leaf1_0.geometry} />
                                    </group>
                                    <group position={[65.1, 327.62, 104.69]} rotation={[2.48, 0.7, -2.68]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_22_leaf1_0.geometry} />
                                    </group>
                                    <group position={[40.15, 352.15, -28.03]} rotation={[-0.77, -0.97, -0.68]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_23_leaf1_0.geometry} />
                                    </group>
                                    <group position={[27.21, 315.97, -12.14]} rotation={[1.26, -1.04, 1.22]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_24_leaf1_0.geometry} />
                                    </group>
                                    <group position={[21.7, 259.18, 59.64]} rotation={[-3.09, -0.15, -3.13]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_25_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[121.8, 312.21, -8.04]} rotation={[1.84, -1.04, 1.26]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_28_leaf1_0.geometry} />
                                    </group>
                                    <group position={[19.4, 312.04, -10.79]} rotation={[2.28, 1.02, -2.36]} scale={[1, 1, 1]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_29_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[23.62, 347.32, -13.22]} rotation={[2.61, -0.29, 2.97]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_31_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[29.35, 384.6, -25.65]} rotation={[0.23, -0.32, 0.07]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_32_leaf1_0.geometry} />
                                    </group>
                                    <group position={[3.17, 188.88, -7.08]} rotation={[1.91, -0.05, 3.01]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_34_leaf1_0.geometry} />
                                    </group>
                                    <group position={[61.26, 229.52, 0.93]} rotation={[2.93, -0.05, 3.13]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_35_leaf1_0.geometry} />
                                    </group>
                                    <group position={[20.17, 221.57, -65.4]} rotation={[0.7, -0.37, 0.65]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_36_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[76.76, 242.82, -9.57]} rotation={[0.15, -0.31, 0.05]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_37_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[52.38, 221.17, -6.41]} rotation={[0.14, -0.26, 0.04]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_38_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[52, 220.6, -0.67]} rotation={[-2.26, -0.48, -2.64]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_40_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[-62.19, 234.99, -22.74]} rotation={[0.33, 1.15, -0.35]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_41_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[10.13, 208.05, -4.65]} rotation={[2.02, 1.1, -2.06]} scale={[1, 1, 1]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_43_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[18.17, 207.09, -15.4]} rotation={[0.47, -0.32, 0.16]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_44_leaf1_0.geometry} />
                                    </group>
                                    <group position={[38.39, 371.53, 86.81]} rotation={[0.78, -0.81, 0.63]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_46_leaf1_0.geometry} />
                                    </group>
                                    <group position={[20, 358.13, -18.91]} rotation={[2.32, 1.11, -2.38]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_49_leaf1_0.geometry} />
                                    </group>
                                    <group position={[56.11, 373.88, -35.52]} rotation={[0.34, -0.64, 0.03]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_50_leaf1_0.geometry} />
                                    </group>
                                    <group position={[11.39, 182.88, -16.34]} rotation={[0.58, 0.53, -0.32]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_52_leaf1_0.geometry} />
                                    </group>
                                    <group position={[31.45, 336.49, 86.96]} rotation={[1.88, 0.9, -1.96]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_53_leaf1_0.geometry} />
                                    </group>
                                    <group position={[28.27, 283.84, 69.95]} rotation={[1.02, 0.28, -0.42]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_54_leaf1_0.geometry} />
                                    </group>
                                    <group position={[124, 325.02, -15.46]} rotation={[0.88, -0.71, 0.73]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_55_leaf1_0.geometry} />
                                    </group>
                                    <group position={[31.44, 455.11, -22.46]} rotation={[2.32, 0.38, -2.89]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_57_leaf1_0.geometry} />
                                    </group>
                                    <group position={[-6.76, 192.14, -7.31]} rotation={[2.43, 0.68, -2.5]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_58_leaf1_0.geometry} />
                                    </group>
                                    <group position={[15.9, 213.04, -31.84]} rotation={[1.72, 0.64, -1.83]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_59_leaf1_0.geometry} />
                                    </group>
                                    <group position={[-94.15, 316.49, -45.91]} rotation={[2.56, 0.4, -2.32]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_60_leaf1_0.geometry} />
                                    </group>
                                    <group position={[83.03, 248.69, -4.96]} rotation={[-3.07, -0.77, -3.09]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_61_leaf1_0.geometry} />
                                    </group>
                                    <group position={[-3.07, 435.68, -78.12]} rotation={[1.02, 0.7, -0.83]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_62_leaf1_0.geometry} />
                                    </group>
                                    <group position={[12.94, 211.97, -43.67]} rotation={[0.72, 0.39, -0.25]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_65_leaf1_0.geometry} />
                                    </group>
                                    <group position={[18.34, 337.69, -18.25]} rotation={[0.64, 1, -0.56]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_66_leaf1_0.geometry} />
                                    </group>
                                    <group position={[18.96, 220.68, 17.09]} rotation={[-2.44, -0.26, -2.93]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_67_leaf1_0.geometry} />
                                    </group>
                                    <group position={[36.82, 221.12, -2.13]} rotation={[2.38, 0.26, -2.9]} scale={[1, 1, 1]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_69_leaf1_0.geometry} />
                                    </group>
                                    <group position={[8.56, 180.89, -3.36]} rotation={[2.66, 0.28, -3]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_70_leaf1_0.geometry} />
                                    </group>
                                    <group position={[46.76, 362.63, -32.51]} rotation={[0.28, 0.06, -0.02]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_72_leaf1_0.geometry} />
                                    </group>
                                    <group position={[32.59, 302.94, 79.74]} rotation={[1.32, 0.71, -1.2]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_73_leaf1_0.geometry} />
                                    </group>
                                    <group position={[5.15, 159.11, -7.5]} rotation={[0.21, 0.22, -0.02]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_77_leaf1_0.geometry} />
                                    </group>
                                    <group position={[34, 436.14, -17.84]} rotation={[1.61, -0.71, 1.09]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_79_2_leaf1_0.geometry} />
                                    </group>
                                    <group position={[32.08, 439.55, -17.54]} rotation={[2.46, 0.33, -2.89]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_79_1_leaf1_0.geometry} />
                                    </group>
                                    <group position={[72.37, 402.39, -46.27]} rotation={[2.18, -0.53, 2.31]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_79_leaf1_0.geometry} />
                                    </group>
                                    <group position={[60.16, 325.2, 100.49]} rotation={[0.36, -0.57, 0.2]}>
                                        <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_82_leaf1_0.geometry} />
                                    </group>
                                    <mesh material={materials.bark1} geometry={nodes.Treemedium_bark1_0.geometry} />
                                </group>

                            </group>
                        </group>
                    </group>
                )
                break;
            case 1:
                return (
                    <group ref={group} {...props} dispose={null} scale={[0.0007, 0.0007, 0.0007]} position={new Vector3(props.x * props.scale, props.y * props.scale - 0.0004, props.z * props.scale)} >
                        <group position={[-54.03, 237.2, 169.76]} rotation={[-2.91, 0.36, 3.06]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_leaf1_0.geometry} />
                        </group>
                        <group position={[9.93, 52.83, 107.82]} rotation={[2.35, 0.29, -2.86]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_7_leaf1_0.geometry} />
                        </group>
                        <group position={[-68.11, 166.13, 40.34]} rotation={[2.32, 0.47, -2.69]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_9_leaf1_0.geometry} />
                        </group>
                        <group position={[123.83, 31.29, 176.73]} rotation={[-0.18, -0.81, -0.13]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_11_leaf1_0.geometry} />
                        </group>
                        <group position={[-52.6, -13.49, 28.65]} rotation={[0.24, 0.04, 0.1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_13_leaf1_0.geometry} />
                        </group>
                        <group position={[40.21, 113.54, 146.72]} rotation={[2.78, 0.7, -2.91]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_15_leaf1_0.geometry} />
                        </group>
                        <group position={[4.17, -70.74, 99.61]} rotation={[2.21, 0.39, -2.67]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_19_leaf1_0.geometry} />
                        </group>
                        <group position={[58.53, 69.22, 31.62]} rotation={[1.21, 0.78, -1.08]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_22_leaf1_0.geometry} />
                        </group>
                        <group position={[64.62, -66.54, 112.03]} rotation={[-2.9, -0.46, -3.03]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_24_leaf1_0.geometry} />
                        </group>
                        <group position={[-27.45, -42.83, 56.39]} rotation={[-0.97, 0.79, 0.81]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_32_leaf1_0.geometry} />
                        </group>
                        <group position={[128.38, -43.34, 91.38]} rotation={[-1.53, -0.95, -1.52]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_35_leaf1_0.geometry} />
                        </group>
                        <group position={[-15.75, -40.07, 64.13]} rotation={[1.53, -0.42, 1.48]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_36_leaf1_0.geometry} />
                        </group>
                        <group position={[-43.3, -24.07, 44.17]} rotation={[2.3, 0.5, -2.65]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_38_leaf1_0.geometry} />
                        </group>
                        <group position={[-0.61, 138.51, 265.65]} rotation={[2.51, -0.06, -3.05]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_42_leaf1_0.geometry} />
                        </group>
                        <group position={[39.95, 132.65, 103.07]} rotation={[0.29, 0.74, -0.2]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_44_leaf1_0.geometry} />
                        </group>
                        <group position={[126.44, 249.34, 226.17]} rotation={[1.6, -0.91, 1.89]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_48_leaf1_0.geometry} />
                        </group>
                        <group position={[60.31, 62.96, 40.71]} rotation={[2.09, -0.87, 2.22]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_50_leaf1_0.geometry} />
                        </group>
                        <group position={[103.89, 12.85, 166.89]} rotation={[-2.73, -1.29, -2.36]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_51_leaf1_0.geometry} />
                        </group>
                        <group position={[29, 191.6, 116.38]} rotation={[2.05, -0.32, 2.6]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_56_leaf1_0.geometry} />
                        </group>
                        <group position={[24.47, 242.57, 154.24]} rotation={[-3.03, 0.11, 3.13]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_59_leaf1_0.geometry} />
                        </group>
                        <group position={[-45.17, -16.37, 39.27]} rotation={[1.95, -0.1, 2.91]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_63_leaf1_0.geometry} />
                        </group>
                        <group position={[3.16, 57.59, 103.47]} rotation={[2.44, 0.3, -2.9]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_68_leaf1_0.geometry} />
                        </group>
                        <group position={[-0.47, -63.94, 92.63]} rotation={[2.32, 0.36, -2.78]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_72_leaf1_0.geometry} />
                        </group>
                        <group position={[49.62, 166.5, 81.25]} rotation={[0.19, 0.79, -0.13]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_73_leaf1_0.geometry} />
                        </group>
                        <group position={[71.32, 147.73, 170.97]} rotation={[-2.79, -1.08, -2.83]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_78_leaf1_0.geometry} />
                        </group>
                        <group position={[76.45, 117.47, -4.36]} rotation={[0.17, 0.14, -0.02]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_80_leaf1_0.geometry} />
                        </group>
                        <group position={[16.26, 38.69, 103.41]} rotation={[-0.12, 0.01, 0]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_81_leaf1_0.geometry} />
                        </group>
                        <group position={[120.75, -43.08, 93.57]} rotation={[3.13, -1.35, 2.87]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_82_leaf1_0.geometry} />
                        </group>
                        <group position={[22.53, -45.92, 196.01]} rotation={[-2.72, -0.42, -2.9]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_82_1_leaf1_0.geometry} />
                        </group>
                        <group position={[78.89, 345.83, 186.88]} rotation={[3.05, -0.46, 3.1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_83_leaf1_0.geometry} />
                        </group>
                        <group position={[111.22, 110.97, 123.42]} rotation={[-2.61, -1.37, -2.37]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_85_leaf1_0.geometry} />
                        </group>
                        <group position={[-5.18, 164.22, 144.21]} rotation={[0.84, -0.01, 0.01]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_88_leaf1_0.geometry} />
                        </group>
                        <group position={[31.34, 274, 143.11]} rotation={[1.11, 0.87, -0.99]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_93_leaf1_0.geometry} />
                        </group>
                        <group position={[35.47, 269.42, 150.93]} rotation={[2.55, 0.1, -2.78]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_93_1_leaf1_0.geometry} />
                        </group>
                        <group position={[-54.85, 144.3, 51.86]} rotation={[2.4, 1.05, -2.21]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_94_leaf1_0.geometry} />
                        </group>
                        <group position={[3.4, 95.92, 228.04]} rotation={[0.98, 0.97, -0.89]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_95_leaf1_0.geometry} />
                        </group>
                        <group position={[4.43, 54.56, 94.76]} rotation={[-0.03, -0.02, 0]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_96_leaf1_0.geometry} />
                        </group>
                        <group position={[34.08, 235.09, 143.34]} rotation={[0.85, -0.55, 0.54]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_98_leaf1_0.geometry} />
                        </group>
                        <group position={[-40, 123.8, 55.5]} rotation={[0.65, -0.79, 0.49]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_101_leaf1_0.geometry} />
                        </group>
                        <group position={[34.37, 240.8, 154.45]} rotation={[2.71, 0.56, -2.9]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_104_leaf1_0.geometry} />
                        </group>
                        <group position={[5.89, 242.09, 86.4]} rotation={[-0.19, 0.5, 0.09]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_108_leaf1_0.geometry} />
                        </group>
                        <group position={[38.74, 131.51, 112.34]} rotation={[1.95, 0.29, -2.53]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_109_leaf1_0.geometry} />
                        </group>
                        <group position={[26.57, 231.29, 156.11]} rotation={[2.72, 0.14, -3.08]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_110_leaf1_0.geometry} />
                        </group>
                        <group position={[110.58, 209.07, 208.67]} rotation={[-2.77, -0.91, -2.84]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_114_leaf1_0.geometry} />
                        </group>
                        <group position={[57.54, 57.16, 38.56]} rotation={[-0.49, -0.19, -0.1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_117_leaf1_0.geometry} />
                        </group>
                        <group position={[-32.16, 194.41, 157.18]} rotation={[-2.91, 1.03, 2.94]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_118_leaf1_0.geometry} />
                        </group>
                        <group position={[32.26, 223.18, 157.1]} rotation={[2.75, 0.25, -3.04]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_119_leaf1_0.geometry} />
                        </group>
                        <group position={[-85.58, 30.75, 1.71]} rotation={[0.41, 1.28, -0.27]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_122_leaf1_0.geometry} />
                        </group>
                        <group position={[78.5, 7.02, 158]} rotation={[2.6, 0.4, -2.91]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_125_leaf1_0.geometry} />
                        </group>
                        <group position={[42.43, 271.22, 140.2]} rotation={[0.46, -0.14, 0.18]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_128_leaf1_0.geometry} />
                        </group>
                        <group position={[13.09, -65.23, 87.96]} rotation={[1.5, -0.45, 1.41]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_131_leaf1_0.geometry} />
                        </group>
                        <group position={[24.49, 45.51, 169.28]} rotation={[2.93, 0.14, 3.09]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_135_leaf1_0.geometry} />
                        </group>
                        <group position={[-7.89, -49.02, 77.31]} rotation={[1.62, -0.01, 2.96]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_137_leaf1_0.geometry} />
                        </group>
                        <group position={[60.59, 68.55, 27.76]} rotation={[0.22, 0.5, -0.11]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_138_leaf1_0.geometry} />
                        </group>
                        <group position={[56.67, 129.03, 150.59]} rotation={[0.76, -0.28, 0.26]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_146_leaf1_0.geometry} />
                        </group>
                        <group position={[162.96, 173.52, 118.99]} rotation={[1.21, -1.12, 1.09]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_147_leaf1_0.geometry} />
                        </group>
                        <group position={[72.82, 155.76, 176.81]} rotation={[-3.04, -0.06, -3.14]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_148_leaf1_0.geometry} />
                        </group>
                        <group position={[141.36, 41.46, 187.66]} rotation={[2.83, -1.26, -3.08]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_156_leaf1_0.geometry} />
                        </group>
                        <group position={[26.08, 122.94, 140.29]} rotation={[2.49, -0.33, 2.9]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_157_leaf1_0.geometry} />
                        </group>
                        <group position={[38.89, 182.29, 158.03]} rotation={[3.04, -0.76, 3.07]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_158_leaf1_0.geometry} />
                        </group>
                        <group position={[81.64, 10.51, 158.85]} rotation={[1.73, 0.31, -2.06]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_160_leaf1_0.geometry} />
                        </group>
                        <group position={[47.58, 43.27, 56.37]} rotation={[1.4, 0.78, -1.33]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_161_leaf1_0.geometry} />
                        </group>
                        <group position={[58.36, 53.65, 50.96]} rotation={[1.9, -0.78, 2.02]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_163_leaf1_0.geometry} />
                        </group>
                        <group position={[31.93, 210.05, 141.96]} rotation={[0.78, 0.35, 0.02]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_167_leaf1_0.geometry} />
                        </group>
                        <group position={[9.94, 86.38, 208.34]} rotation={[1.33, 0.18, -0.63]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_168_leaf1_0.geometry} />
                        </group>
                        <group position={[-43.78, -19.42, 33.05]} rotation={[-0.17, 0.36, -0.05]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_170_leaf1_0.geometry} />
                        </group>
                        <group position={[26.18, 35.48, 140.99]} rotation={[1.42, 0.2, -0.9]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_171_leaf1_0.geometry} />
                        </group>
                        <group position={[51.46, -17.8, 125.98]} rotation={[0.08, -0.77, 0.06]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_172_leaf1_0.geometry} />
                        </group>
                        <group position={[58.89, 194.57, 67.57]} rotation={[-0.2, -0.28, -0.06]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_173_leaf1_0.geometry} />
                        </group>
                        <group position={[80.95, 131.38, -16.75]} rotation={[-0.38, -0.12, -0.05]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_177_leaf1_0.geometry} />
                        </group>
                        <group position={[-46.46, 137.43, 51.16]} rotation={[0.8, -0.63, 0.54]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_178_leaf1_0.geometry} />
                        </group>
                        <group position={[95.47, 191.73, 193.93]} rotation={[2.32, -1.17, 2.59]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_183_leaf1_0.geometry} />
                        </group>
                        <group position={[1.05, 55.13, 97.02]} rotation={[-0.71, 1.06, 0.64]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_186_leaf1_0.geometry} />
                        </group>
                        <group position={[1.07, 120.16, 249.6]} rotation={[1.59, -1.05, 1.6]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_187_leaf1_0.geometry} />
                        </group>
                        <group position={[104.79, 14.24, 163.05]} rotation={[0.01, -0.81, 0.01]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_192_leaf1_0.geometry} />
                        </group>
                        <group position={[-77.61, 24.35, 3.06]} rotation={[-0.35, 0.42, 0.15]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_195_leaf1_0.geometry} />
                        </group>
                        <group position={[56.49, 306.49, 150.06]} rotation={[2.01, 0.02, -3.09]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_leaf1_0.geometry} />
                        </group>
                        <group position={[-9.91, -56.69, 67.89]} rotation={[-0.24, -0.26, -0.07]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_197_leaf1_0.geometry} />
                        </group>
                        <group position={[79.52, -0.35, 156.49]} rotation={[-2.89, 0, -3.14]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_200_leaf1_0.geometry} />
                        </group>
                        <group position={[48.38, 27.52, 67.02]} rotation={[-0.4, -0.08, -0.03]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_201_leaf1_0.geometry} />
                        </group>
                        <group position={[46.5, -98.54, 99.83]} rotation={[0.28, -0.65, 0.17]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_202_1_leaf1_0.geometry} />
                        </group>
                        <group position={[9.55, 45.87, 110.01]} rotation={[2.48, 0.8, -2.67]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_204_leaf1_0.geometry} />
                        </group>
                        <group position={[44.29, 7.21, 85.86]} rotation={[0.18, -0.95, 0.24]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_5_leaf1_0.geometry} />
                        </group>
                        <group position={[98.59, 12.11, 157.87]} rotation={[1.29, -1.02, 1.88]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_6_leaf1_0.geometry} />
                        </group>
                        <group position={[104.87, 20.63, 169.21]} rotation={[2.78, -0.5, 2.47]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_7_leaf1_0.geometry} />
                        </group>
                        <group position={[55.57, 309.27, 151.24]} rotation={[2.5, -0.65, 2.8]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_leaf1_0.geometry} />
                        </group>
                        <group position={[55.57, 309.27, 151.24]} rotation={[0.45, -0.77, 0.15]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_2_leaf1_0.geometry} />
                        </group>
                        <group position={[55.57, 309.27, 151.24]} rotation={[1.42, 0.38, -1.57]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_leaf1_0.geometry} />
                        </group>
                        <group position={[43.16, 291.68, 145.6]} rotation={[0.99, 0.76, -0.91]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_1_leaf1_0.geometry} />
                        </group>
                        <group position={[28.12, 215.57, 144.53]} rotation={[0.68, 0.59, 0.01]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_23_leaf1_0.geometry} />
                        </group>
                        <group position={[32.23, 173.49, 119.36]} rotation={[0.26, -0.52, 0.13]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_24_leaf1_0.geometry} />
                        </group>
                        <group position={[38.75, 16.24, 79.99]} rotation={[0.34, 0.87, -0.27]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_29_leaf1_0.geometry} />
                        </group>
                        <group position={[36.1, 176.37, 151.91]} rotation={[1.88, 1.02, -1.85]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_31_leaf1_0.geometry} />
                        </group>
                        <group position={[12.69, 267.9, 214.37]} rotation={[2.77, 0.15, -2.94]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_33_leaf1_0.geometry} />
                        </group>
                        <group position={[109.56, -49.63, 96.92]} rotation={[2.93, -1.17, 3.01]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_37_leaf1_0.geometry} />
                        </group>
                        <group position={[-3.14, 59.99, 94.4]} rotation={[-0.49, 1.03, 0.43]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_38_leaf1_0.geometry} />
                        </group>
                        <group position={[29.09, 206.7, 175.26]} rotation={[2.44, -0.71, 2.26]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_39_leaf1_0.geometry} />
                        </group>
                        <group position={[-46.69, -22.75, 37.91]} rotation={[0.23, -0.15, -0.41]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_41_leaf1_0.geometry} />
                        </group>
                        <group position={[11.18, 52.49, 108.48]} rotation={[2.26, 0.27, -2.83]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_42_leaf1_0.geometry} />
                        </group>
                        <group position={[9.65, 87.95, 222.12]} rotation={[2.94, 0.29, 2.85]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_43_leaf1_0.geometry} />
                        </group>
                        <group position={[-42.25, 129.28, 53.35]} rotation={[0.34, 0.19, -0.37]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_52_leaf1_0.geometry} />
                        </group>
                        <group position={[59.26, 54.63, 46.65]} rotation={[0.49, -1.16, 0.46]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_53_leaf1_0.geometry} />
                        </group>
                        <group position={[85.91, 175.97, 185.63]} rotation={[2.12, -0.92, 2.17]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_55_leaf1_0.geometry} />
                        </group>
                        <group position={[142.87, 157.66, 121.26]} rotation={[2.42, -0.92, 2.24]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_58_leaf1_0.geometry} />
                        </group>
                        <group position={[51.83, 174.66, 77.17]} rotation={[0.43, 0.57, -0.25]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_60_leaf1_0.geometry} />
                        </group>
                        <group position={[-13.58, 73.41, 84.9]} rotation={[-0.2, 1.24, 0.42]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_3_leaf1_0.geometry} />
                        </group>
                        <group position={[-94.59, 77.26, 138.51]} rotation={[1.73, 1.29, -1.6]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_5_leaf1_0.geometry} />
                        </group>
                        <group position={[-23.75, 14.51, 130.6]} rotation={[2.68, 0.83, -2.86]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_7_leaf1_0.geometry} />
                        </group>
                        <group position={[19.9, -38.29, 211.63]} rotation={[3.08, 0.26, -3.1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_8_leaf1_0.geometry} />
                        </group>
                        <group position={[16.4, -3.2, 276.94]} rotation={[2.6, 0.09, -3.13]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_leaf1_0.geometry} />
                        </group>
                        <group position={[47.75, -44.29, 133.48]} rotation={[2.73, -0.29, 3.03]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_9_leaf1_0.geometry} />
                        </group>
                        <group position={[91.27, 96.95, 124.71]} rotation={[0.56, -1.17, 0.61]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_leaf1_0.geometry} />
                        </group>
                        <group position={[-41.88, 117.67, 60.34]} rotation={[0.55, 0.65, -0.36]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_1_leaf1_0.geometry} />
                        </group>
                        <mesh material={materials.bark1} geometry={nodes.treelarge_bark1_0.geometry} />
                    </group>
                )
                break;
            case 2:
                return (
                    <group ref={group} {...props} dispose={null} rotation={[-2.82, -0.66, -2.94]} scale={[0.0007, 0.0007, 0.0007]} position={new Vector3(props.x * props.scale, props.y * props.scale - 0.0004, props.z * props.scale)} >
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_0_leaf1_0.geometry} />
                        <group position={[7.55, 225.6, 61.37]} rotation={[1.97, -1.14, 2.14]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_7_leaf1_0.geometry} />
                        </group>
                        <group position={[-18.86, 132.43, 6.8]} rotation={[0.79, 0.75, -0.75]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_8_leaf1_0.geometry} />
                        </group>
                        <group position={[-0.39, 127.92, 36.92]} rotation={[2.62, 0.47, -2.28]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_10_leaf1_0.geometry} />
                        </group>
                        <group position={[-13.87, 205.51, 29.26]} rotation={[2.15, -0.42, 2.38]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_11_leaf1_0.geometry} />
                        </group>
                        <group position={[-30.92, 263.66, 16.28]} rotation={[2.25, 0.66, -2.87]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_16_leaf1_0.geometry} />
                        </group>
                        <group position={[3.76, 204.42, 52.11]} rotation={[2.93, -0.87, -2.87]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_17_leaf1_0.geometry} />
                        </group>
                        <group position={[-17.96, 175.74, 10.01]} rotation={[2.15, 1.03, -2.22]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_18_leaf1_0.geometry} />
                        </group>
                        <group position={[8.17, 151.33, 44.73]} rotation={[2.6, 0.48, -2.87]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_21_leaf1_0.geometry} />
                        </group>
                        <group position={[-31.96, 165.98, 36.22]} rotation={[1.02, 0.2, -0.32]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_25_leaf1_0.geometry} />
                        </group>
                        <group position={[2.5, 179.5, 53.17]} rotation={[2.75, 0.35, -2.97]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_26_leaf1_0.geometry} />
                        </group>
                        <group position={[1.52, 192.08, 53.55]} rotation={[2.42, 0.7, -2.68]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_29_leaf1_0.geometry} />
                        </group>
                        <group position={[4.31, 157.39, 24.65]} rotation={[2.05, -1.26, 2.16]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_30_leaf1_0.geometry} />
                        </group>
                        <group position={[-17.59, 164.86, 8.71]} rotation={[2.29, 1.31, -2.05]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_31_leaf1_0.geometry} />
                        </group>
                        <group position={[5.63, 162.23, -8.89]} rotation={[0.78, -0.35, -0.15]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_33_leaf1_0.geometry} />
                        </group>
                        <group position={[25.98, 241.58, 28.85]} rotation={[1.49, -0.08, -0.36]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_36_leaf1_0.geometry} />
                        </group>
                        <group position={[-1.66, 148.85, 33.59]} rotation={[1.69, -0.33, 1.92]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_37_leaf1_0.geometry} />
                        </group>
                        <group position={[-4.51, 112.14, 40.73]} rotation={[2.3, 0.86, -2.17]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_38_leaf1_0.geometry} />
                        </group>
                        <group position={[-29.58, 257.58, 15.57]} rotation={[0.72, -0.16, 0.14]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_39_leaf1_0.geometry} />
                        </group>
                        <group position={[-15.16, 108.86, 5.94]} rotation={[2.28, 1.18, -2.14]} scale={[1, 1, 1]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_40_leaf1_0.geometry} />
                        </group>
                        <group position={[-1.46, 108.81, 38.32]} rotation={[2.74, -0.84, 2.84]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_41_leaf1_0.geometry} />
                        </group>
                        <group position={[5.55, 212.12, 56.53]} rotation={[2.54, 0.57, -2.79]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_2_196_42_leaf1_0.geometry} />
                        </group>
                        <group position={[-31.01, 268.91, 14.42]} rotation={[2.17, 0.03, -2.81]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_4_13_3_43_leaf1_0.geometry} />
                        </group>
                        <group position={[11.33, 172.38, 29.23]} rotation={[1.14, -0.09, 0.19]}>
                            <mesh material={materials.leaf1} geometry={nodes.leafplanes_10_3_47_leaf1_0.geometry} />
                        </group>
                         <mesh material={materials.bark1} geometry={nodes.Treesmall_bark1_0.geometry} />
                        </group>
                )
                break;
            default:
                console.log("Nie ma takiego dżewa")
        }
    }

    return (
        <group>
            {treeType(props.type)}
        </group>
    )


}