import React, {useRef} from 'react';
import {useFrame, useUpdate} from 'react-three-fiber'
import {usePlane} from "use-cannon"
import { generateTerrain} from "../lib/terrainGeneration";
import {CanvasTexture, ClampToEdgeWrapping} from "three";
import {noise} from "../lib/perlin"

export default function Ground({ pointsSize,iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier,worldSizeScale}) {

    // let data = generateHeight(worldWidth, worldDepth);
    //
    // let texture = new CanvasTexture(generateTexture(data, worldWidth, worldDepth));
    // texture.wrapS = ClampToEdgeWrapping;
    // texture.wrapT = ClampToEdgeWrapping;

    const mesh = useUpdate(({geometry}) => {
        generateTerrain(geometry,pointsSize,iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier)
        saveGeometry(geometry)
    })
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0],}))


    useFrame(() => {

    })

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}
              ref={mesh} scale={[worldSizeScale,worldSizeScale,worldSizeScale]} >
            <bufferGeometry  />
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

function saveGeometry(geometry){
    localStorage.setItem("geometry",geometry.toJSON());
}