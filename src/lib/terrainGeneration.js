
import generate from "./erosion"



export function generateTerrain(geometry,pointsSize, iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier) {
      generate(geometry,pointsSize,iterations,scaleMultiplier,erosionMultiplier,depositionMultiplier,evaporationMultiplier)
      console.log(geometry)
}

