import React from 'react';
import {useUpdate} from 'react-three-fiber'
import {generateTerrain} from "../lib/terrainGeneration";

export default function Ground({
                                   pointsSize,
                                   iterations,
                                   scaleMultiplier,
                                   erosionMultiplier,
                                   depositionMultiplier,
                                   evaporationMultiplier,
                                   worldSizeScale,
                                   buttonGenerate
                               }) {


    const mesh = useUpdate(({geometry}) => {
        generateTerrain(geometry, pointsSize, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier)

        geometry.attributes.color.needsUpdate = true
        geometry.needsUpdate = true
    }, [buttonGenerate])

    return (
        <mesh
            ref={mesh} scale={[worldSizeScale, worldSizeScale, worldSizeScale]}>
            <bufferGeometry/>
            <meshPhongMaterial
                wireframe={false}
                vertexColors={true}
                flatShading={true}
            />
        </mesh>
    )
}