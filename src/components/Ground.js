import React, {useRef} from 'react';
import {useFrame, useUpdate} from 'react-three-fiber'
import {usePlane} from "use-cannon"
import { generateTerrain} from "../services/TerrainGeneration";
import {CanvasTexture, ClampToEdgeWrapping} from "three";
import {noise} from "../services/perlin"

export default function Ground({worldWidth, worldDepth, worldSize}) {

    // let data = generateHeight(worldWidth, worldDepth);
    //
    // let texture = new CanvasTexture(generateTexture(data, worldWidth, worldDepth));
    // texture.wrapS = ClampToEdgeWrapping;
    // texture.wrapT = ClampToEdgeWrapping;

    const mesh = useUpdate(({geometry}) => {
        generateTerrain(geometry)
        let position = geometry.getAttribute("position")


        position.needsUpdate = true
    })
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}))


    useFrame(() => {
    })
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}
              ref={mesh}>
            <planeBufferGeometry attach="geometry" args={[worldSize, worldSize, worldWidth - 1, worldDepth - 1]}/>
            <meshPhongMaterial
                attach="material"
                color={"hotpink"}
                specular={"hotpink"}
                shininess={3}
                flatShading
            />

        </mesh>
    )
}