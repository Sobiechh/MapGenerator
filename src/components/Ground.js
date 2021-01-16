import React, {useRef} from 'react';
import { useFrame} from 'react-three-fiber'


export default function Ground({
                                   pointsSize,
                                   iterations,
                                   scaleMultiplier,
                                   erosionMultiplier,
                                   depositionMultiplier,
                                   evaporationMultiplier,
                                   worldSizeScale
                               }) {

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

    const mesh = useUpdate(({geometry}) => {
        var data=geometry.toJSON()
        exportToJson(data)

        const loader = new BufferGeometryLoader();


        let loadedGeometry = loader.load(
            '../data/defaultGeometry2.json',
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


        geometry.attributes.color.needsUpdate = true
        geometry.needsUpdate = true
    }, [])


    useFrame(() => {
    })
    return (
        <mesh
            ref={mesh}>
            <planeBufferGeometry args={[data.x, data.y, 1]}  />
            <meshPhongMaterial attach="material" color={0xf95b3c}/>
        </mesh>
    )
}