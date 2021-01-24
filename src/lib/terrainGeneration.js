import generate from "./erosion"

export function generateTerrain(geometry,pointsSize, iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier,calculateWaterCallback, calculateGroundHeightCallBack, calculateMountainHeightCallBack, getMapArray) {

      generate(geometry,pointsSize,iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier, calculateWaterCallback, calculateGroundHeightCallBack, calculateMountainHeightCallBack, getMapArray)
}