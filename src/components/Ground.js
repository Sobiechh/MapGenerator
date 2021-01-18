import React, {useRef, useState, useEffect} from 'react';
import {useFrame, useUpdate} from 'react-three-fiber'
import {usePlane} from "use-cannon"
import {generateTerrain} from "../lib/terrainGeneration";
import {BufferGeometryLoader} from "three";


export default function Ground({
                                   pointsSize,
                                   iterations,
                                   scaleMultiplier,
                                   erosionMultiplier,
                                   depositionMultiplier,
                                   evaporationMultiplier,
                                   worldSizeScale
                               }) {

    useEffect(() => {
        console.log(pointsSize,worldSizeScale)
    }, [pointsSize,worldSizeScale])

    const mesh = useUpdate(({geometry}) => {
        generateTerrain(geometry, pointsSize, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier)

        geometry.attributes.color.needsUpdate = true
        geometry.needsUpdate = true
    }, [])

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