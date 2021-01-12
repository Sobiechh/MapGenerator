import React, {useRef, useState} from 'react';
import {useFrame, useUpdate} from 'react-three-fiber'
import {usePlane} from "use-cannon"
import {generateTerrain} from "../lib/terrainGeneration";
import {CanvasTexture, ClampToEdgeWrapping} from "three";
import {noise} from "../lib/perlin"
import {GLTFExporter} from "three/examples/jsm/exporters/GLTFExporter";
import generate from "../lib/erosion";




function exportToJson(objectData) {
    let filename = "export.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        var a = document.createElement('a');
        a.download = filename;
        a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

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
        generateTerrain(geometry, pointsSize, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier)


        var data=geometry.toJSON()
        console.log(data)
        console.log(typeof(data))
        exportToJson(data)


    }, [])
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0],}))

    useFrame(() => {

    })

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}
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

