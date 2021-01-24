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
import Bush from '../components/Bush';

export default function Terrain({   pointSizeArg,
                                    iterationsArg,
                                    erosionMultiplierArg,
                                    scaleMultiplierArg,
                                    evaporationMultiplierArg,
                                    depositionMultiplierArg,
                                    worldSizeScaleArg,
                                    buttonGenerate,
                                    objectDensityArg
}){
    var pointsSize = pointSizeArg/2;//256 // wielkość mapy przed skalowaniem jej ( czyli tak jakby jakość erozji)
    var iterations = iterationsArg; //300 ilość iteracji erozji
    var erosionMultiplier = erosionMultiplierArg;
    var scaleMultiplier = scaleMultiplierArg;       // wszystkie multiplier - domyślnie 1 - przedziały od 1 do powiedzmy 10 w sliderach ale w sumie 10 to przesada
    var evaporationMultiplier = evaporationMultiplierArg;
    var depositionMultiplier = depositionMultiplierArg;
    var worldSizeScale = worldSizeScaleArg; // skala wielkości terenu (wielkość skalowania np x4) (tutaj slider nie schodzący poniżej wartości 1)

    objectDensityArg = parseInt(objectDensityArg)

    const [WaterHeight, setWaterHeight] = useState(0);
    const [GroundHeight, setGroundHeight] = useState(0);
    const [MounatinHeight, setMounatinHeight] = useState(0);
    const [MapArray, setMapArray] = useState([]);
    const [trees, setTrees] = useState([1])
    const [bushes, setBushes] = useState([1])


    useEffect(() => {
        setTrees([1])
        setBushes([1])
    }, [worldSizeScale])

    let calculateWaterCallback = (waterLVL) => {
        setWaterHeight(waterLVL)
    }

    let calculateGroundHeightCallBack = (groundLVL) => {
        setGroundHeight(groundLVL)
    }
    let calculateMountainHeightCallBack = (mountainLVL) => {
        setMounatinHeight(mountainLVL)
    }


    console.log("WYSOKOSC GORY MAX", MounatinHeight)
    let getMapArray = (mapArray) => {
            setMapArray(mapArray)
    }
    const { promisify } = require('util')
    const sleep = promisify(setTimeout)

    const handleKeyPres = (event) => {
        if(event.key === 'l' || event.key == 'L'){
            
            if( trees.length === 0 || trees.length>objectDensityArg ){
                setTrees([null])
                setBushes([null])
                sleep(5000).then(() => {
                    startGenerate()
                  })
            }else{
                startGenerate()
            }
        }
    }

    console.log("taki jest suwak: ",objectDensityArg, 'a tyle jest treesów: ', trees.length)
    return (
        <Canvas
            camera={{position: [0, 0, 0], fov: 50 }}
            onKeyPress={(x) => handleKeyPres(x)}
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
                    calculateMountainHeightCallBack={calculateMountainHeightCallBack}
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
                {
                    bushes.map((props) => (
                        <Bush {...props} />
                    ))
                }
            </Suspense>
        </Canvas>
    )
    

    //generate Models
    function startGenerate(){
        if( MapArray.length>0){

            let newTrees = trees.map((props) => ({ ...props}))
            let newBushes = bushes.map((props) => ({ ...props}))
            
            
            for (var i=0; i < objectDensityArg; i++){
                generateNewBush(newBushes)
                generateNewTree(newTrees)
            }
            
            setTrees([...newTrees])
            setBushes([...newBushes])
        }
    }
    

    //generators
    function generateNewTree(newTrees) {
        const randomType = getRandomInt(2)
        const coordinates = getCoordinate()
        
        newTrees.push({ x: coordinates.x, y: coordinates.y, z: coordinates.z, scale: worldSizeScale, type: randomType})
    }

    function generateNewBush(newBushes) {
        const coordinates = getCoordinate2()
        
        newBushes.push({ x: coordinates.x, y: coordinates.y, z: coordinates.z, scale: worldSizeScale, type: 1})
    }
    

    //get Trees coordinates
    function getCoordinate(){
        let array = nestedList(MapArray)
        
        array = getArrayGroundHeight(array)
        let ran = getRandomInt(array.length)
        let x = array[ran][0]
        let y = array[ran][1]
        let z = array[ran][2]
        
        return {x,y,z}
    }

    function getCoordinate2(){
        let array = nestedList(MapArray)
        
        array = getArrayMountainHeight(array)
        let ran = getRandomInt(array.length)
        let x = array[ran][0]
        let y = array[ran][1]
        let z = array[ran][2]
        
        return {x,y,z}
    }

    //random Int
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }

    //nested list
    function nestedList(oldList){
        let i=0
        let newList=[]
        while(i<oldList.length){
            newList.push([oldList[i], oldList[i+1], oldList[i+2]])
            i+=3
        }
        return newList
    }

    // tylko dane z wysokoscia zieloną
    function getArrayGroundHeight(oldList){
        let i = 0
        let newList = []
        while(i<oldList.length){
            if(oldList[i][1] < GroundHeight && oldList[i][1] > WaterHeight){
                newList.push(oldList[i])
            }
            i+=1
        }
        return newList
    }

    //na brazowym tle
    function getArrayMountainHeight(oldList){
        let i = 0
        let newList = []
        while(i<oldList.length){
            if(oldList[i][1] > WaterHeight && oldList[i][1] < MounatinHeight){
                newList.push(oldList[i])
            }
            i+=1
        }
        return newList
    }
}