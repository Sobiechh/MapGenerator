import React, {useRef, useState} from 'react';
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

    // let data = generateHeight(worldWidth, worldDepth);
    //
    // let texture = new CanvasTexture(generateTexture(data, worldWidth, worldDepth));
    // texture.wrapS = ClampToEdgeWrapping;
    // texture.wrapT = ClampToEdgeWrapping;


    const mesh = useUpdate(({geometry}) => {

        const loader = new BufferGeometryLoader();

// load a resource
        let loadedGeometry = loader.load(
            '../data/defaultGeometry.json',
            function (geometry) {
                return geometry;
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (err) {
                console.log('An error happened');
            }
        );
        if (loadedGeometry == null) {
            generateTerrain(geometry, pointsSize, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier)
        } else {
            geometry = loadedGeometry
        }

        geometry.rotateX(Math.PI)


    }, [])




    return (
        <mesh
              ref={mesh} scale={[worldSizeScale, worldSizeScale, worldSizeScale]}>
            <bufferGeometry/>
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

