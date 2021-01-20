import React from 'react';
import {useUpdate} from 'react-three-fiber'
import {generateTerrain} from "../lib/terrainGeneration";
s


export default function Ground({
                                   pointsSize,
                                   iterations,
                                   scaleMultiplier,
                                   erosionMultiplier,
                                   depositionMultiplier,
                                   evaporationMultiplier,
                                   worldSizeScale,
                                   calculateWaterCallback,
                                   calculateGroundHeightCallBack,
                                   buttonGenerate
                               }) {


    const mesh = useUpdate(({geometry}) => {
        generateTerrain(geometry, pointsSize, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier, calculateWaterCallback, calculateGroundHeightCallBack)

        geometry.attributes.color.needsUpdate = true
        geometry.needsUpdate = true
    }, [buttonGenerate])

    return (
        <mesh
            ref={mesh} scale={[worldSizeScale, worldSizeScale, worldSizeScale]} position={new Vector3(0, 0 , 0)}>
            <bufferGeometry/>
            <meshPhongMaterial
                wireframe={false}
                vertexColors={true}
                flatShading={true}
            />
        </mesh>
    )
}