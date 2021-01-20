import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Tree(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("models/shoe-draco.glb")

    console.log(props)
    return (
        <group
        dispose={null}>
        <mesh geometry={nodes.shoe.geometry}    material={materials.laces}      material-color={"red"}/>
        <mesh geometry={nodes.shoe_1.geometry}  material={materials.mesh}       material-color={"pink"}/>
        <mesh geometry={nodes.shoe_2.geometry}  material={materials.caps}       material-color={"blue"}/>
        <mesh geometry={nodes.shoe_3.geometry}  material={materials.inner}      material-color={"red"}/>
        <mesh geometry={nodes.shoe_4.geometry}  material={materials.sole}       material-color={"red"}/>
        <mesh geometry={nodes.shoe_5.geometry}  material={materials.stripes}    material-color={"red"}/>
        <mesh geometry={nodes.shoe_6.geometry}  material={materials.band}       material-color={"red"}/>
        <mesh geometry={nodes.shoe_7.geometry}  material={materials.patch}      material-color={"red"}/>
      </group>
    )
  }