import React, {Suspense, useState, useEffect} from 'react';
import {Canvas, extend, useUpdate} from 'react-three-fiber'
import * as THREE from 'three'
import Ground from "../components/Ground";
import WorldBox from "../components/WorldBox";
import CameraControls from "../components/CameraControls"
import {Stars} from '@react-three/drei'
import {Physics} from "use-cannon"
import Tree from "../components/Tree";
import WaterPlane from "../components/WaterPlane";
import { AmbientLight } from 'three';

export default function Terrain({   pointSizeArg,
                                    iterationsArg,
                                    erosionMultiplierArg,
                                    scaleMultiplierArg,
                                    evaporationMultiplierArg,
                                    depositionMultiplierArg,
                                    worldSizeScaleArg,
                                    buttonGenerate
}){
    var pointsSize = pointSizeArg/2;//256 // wielkość mapy przed skalowaniem jej ( czyli tak jakby jakość erozji)
    var iterations = iterationsArg; //300 ilość iteracji erozji
    var erosionMultiplier = erosionMultiplierArg;
    var scaleMultiplier = scaleMultiplierArg;       // wszystkie multiplier - domyślnie 1 - przedziały od 1 do powiedzmy 10 w sliderach ale w sumie 10 to przesada
    var evaporationMultiplier = evaporationMultiplierArg;
    var depositionMultiplier = depositionMultiplierArg;
    var worldSizeScale = worldSizeScaleArg; // skala wielkości terenu (wielkość skalowania np x4) (tutaj slider nie schodzący poniżej wartości 1)

    const [WaterHeight, setWaterHeight] = useState(0);
    const [GroundHeight, setGroundHeight] = useState(0);
    const [MapArray, setMapArray] = useState([]);
    const [trees, setTrees] = useState([1])

    useEffect(() => {
        if(trees.length>51) setTrees([1])
    }, [trees])

    let calculateWaterCallback = (waterLVL) => {
        setWaterHeight(waterLVL)
    }

    let calculateGroundHeightCallBack = (groundLVL) => {
        setGroundHeight(groundLVL)
    }

    let getMapArray = (mapArray) => {
            setMapArray(mapArray)
    }

    console.log("Map array w terrain:", MapArray)
    console.log("Drzwka", trees)
    return (
        <Canvas
            camera={{position: [0, 0, 0], fov: 50 }}
            onClick={() => start()}
            >
            <spotLight position={[0, 2*worldSizeScale, -4*worldSizeScale]} angle={0.8} penumbra={1} intensity={0.6}  visible={true}/>
            <pointLight
                visible={true}
                intensity={0.6}
                decay={2}
                distance={5}
                position={[0, 0.5*worldSizeScale, -1*worldSizeScale]}
                color={0xffcc77}
                castShadow={true}
            />
            <Stars/>
            <ambientLight intensity={0.6}/>
            <Physics>
                <WorldBox scale={worldSizeScale}/>
                <Ground
                    pointsSize={pointsSize}
                    iterations={iterations}
                    scaleMultiplier={scaleMultiplier}
                    depositionMultiplier={depositionMultiplier}
                    erosionMultiplier={erosionMultiplier}
                    evaporationMultiplier={evaporationMultiplier}
                    worldSizeScale={worldSizeScale}
                    buttonGenerate={buttonGenerate}
                    calculateWaterCallback={calculateWaterCallback}
                    calculateGroundHeightCallBack={calculateGroundHeightCallBack}
                    getMapArray={getMapArray}
                />
                <WaterPlane scale={worldSizeScale} waterHeight={WaterHeight}/>
                <CameraControls/>
            </Physics>
            <Suspense fallback={null}>
                {
                    trees.map((props) => (
                        <Tree {...props} />
                    ))
                }
            </Suspense>
        </Canvas>
    )
    
    function start(){
        if( trees.length === 0 ) return
        
        let newTrees = trees.map((props) => ({ ...props}))
        
        for (var i=0; i<50; i++){
            generateNewTree(newTrees)
            console.log("wykonano po raz", i)
        }
        
        setTrees([...newTrees])
    }

    
    
    function generateNewTree(newTrees) {
        const randomType = getRandomInt(3)
        const coordinates = getRandomCoordinate()
        
        console.log("losowy typ", randomType)
        
        newTrees.push({ x: coordinates.x, y: coordinates.y, z: coordinates.z, scale: worldSizeScale, type: randomType})
    }
    

    //random generators
    function getRandomCoordinate(){
        let ran = getRandomInt(30000)
        let x = MapArray[0 + 3*ran]
        let y = MapArray[1 + 3*ran]
        let z = MapArray[2 + 3*ran]
        
        return {x,y,z}
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }
}