import React, {useRef} from 'react';
import {useFrame, useUpdate} from 'react-three-fiber'
import {usePlane} from "use-cannon"
import { generateTerrain} from "../services/TerrainGeneration";
import {CanvasTexture, ClampToEdgeWrapping} from "three";
import {noise} from "../services/perlin"

export default function Ground({worldWidth, worldDepth, worldSize}) {

    const mesh = useUpdate(({ geometry }) => {
        noise.seed(Math.random());
        let pos = geometry.getAttribute("position");
        let pa = pos.array;
        const hVerts = geometry.parameters.heightSegments + 1;
        const wVerts = geometry.parameters.widthSegments + 1;
        for (let j = 0; j < hVerts; j++) {
          for (let i = 0; i < wVerts; i++) {
            const ex = 1.4;
            pa[3 * (j * wVerts + i) + 2] =
              (noise.simplex2(i / 10, j / 100) +
                noise.simplex2((i + 20) / 50, j / 30) * Math.pow(ex, 2) +
                noise.simplex2((i + 40) / 25, j / 25) * Math.pow(ex, 2) +
                noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 5) +
                +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 10))) / 2;
          }
        }
    
        pos.needsUpdate = true;
      });


    // const mesh = useUpdate(({geometry}) => {
    //     generateTerrain(geometry)
    // })

    // const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}))


    // const mesh = useRef()

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