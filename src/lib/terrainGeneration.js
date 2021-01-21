import generate from "./erosion"

export function generateTerrain(geometry,pointsSize, iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier,calculateWaterCallback, calculateGroundHeightCallBack, getMapArray) {

      generate(geometry,pointsSize,iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier, calculateWaterCallback, calculateGroundHeightCallBack, getMapArray)
}