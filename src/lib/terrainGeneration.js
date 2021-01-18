
import generate from "./erosion"



export function generateTerrain(geometry,pointsSize, iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier,calculateWaterCallback) {

      generate(geometry,pointsSize,iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier,calculateWaterCallback)
      // console.log(geometry)
}

