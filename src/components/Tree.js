import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Vector3 } from "three";

// ponizej warking dla b00ta
// export default function Tree(props) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF("models/shoe-draco.glb")

//     console.log(props)
//     return (
//         <group
//         dispose={null} scale={[0.2,0.2,0.2]}>
//         <mesh geometry={nodes.shoe.geometry}    material={materials.laces}      material-color={"red"}/>
//         <mesh geometry={nodes.shoe_1.geometry}  material={materials.mesh}       material-color={"pink"}/>
//         <mesh geometry={nodes.shoe_2.geometry}  material={materials.caps}       material-color={"blue"}/>
//         <mesh geometry={nodes.shoe_3.geometry}  material={materials.inner}      material-color={"red"}/>
//         <mesh geometry={nodes.shoe_4.geometry}  material={materials.sole}       material-color={"red"}/>
//         <mesh geometry={nodes.shoe_5.geometry}  material={materials.stripes}    material-color={"red"}/>
//         <mesh geometry={nodes.shoe_6.geometry}  material={materials.band}       material-color={"red"}/>
//         <mesh geometry={nodes.shoe_7.geometry}  material={materials.patch}      material-color={"red"}/>
//       </group>
//     )
//   }

export default function Tree(props) {
const group = useRef()
const { nodes, materials } = useGLTF("models/tree.glb")
return (
    <group ref={group} {...props} dispose={null} rotation={[4.8, 0, 0]} scale={[0.03,0.03,0.03]} position={new Vector3(-0.1, -0.89 , -0.29733158349990846)}>

        <group>
            <group rotation={[9.4, 9.4, 11.5]}>
                <mesh material={materials.Leaves} geometry={nodes.leaves_Leaves_0.geometry}/>
            </group>
            <mesh material={materials.Base} geometry={nodes.tree_Base_0.geometry} />
        </group>
    </group>
)
}

// export default function Tree(props) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF("models/treeexx.glb")

//     console.log(nodes)
//     return (
//         <group ref={group} {...props} dispose={null}>
//         <group rotation={[-Math.PI / 2, 0, 0]}>
//           <group rotation={[Math.PI / 2, 0, 0]}>
//             <group position={[-41.51, 469.35, -138.44]} rotation={[2.46, 1.33, 1.55]} scale={[32, 32, 32]}>
//               <mesh material={materials.Leaves} geometry={nodes.Plane562_Leaves_0.geometry} />
//             </group>
//             <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
//               <mesh material={materials.Trunk} geometry={nodes.tree_Trunk_0.geometry} />
//             </group>
//           </group>
//         </group>
//       </group>
//     )
//   }