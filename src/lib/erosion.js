import {noise} from "./perlin"
import calculateNormals from "./normals"
import {BufferAttribute} from "three";

export default function generate(geometry, pointsSize, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier) {
    noise.seed(Math.random())


    let size = pointsSize
    let points = [];

    for (let x = 0; x < size; x++) {

        points[x] = [];

        for (let y = 0; y < size; y++) {

            points[x][y] = {
                x: (x / size) * 2 - 1
                , y: (y / size) * 2 - 1
                , z: getNoise(x, y, size) * 0.2
                //,z: Math.round((y-40)/size)*0.5-0.5 + Math.random()*0.005
                , erosion: 0
                , sediment: 0
                , water: 1
                , newWater: 0
                , down: 0
            }

        }
    }

    points = erode(points, size, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier);

    let vertices = buildMeshFromPoints(points, size);
    let normals = calculateNormals(vertices, points, size);
    let colors = colorVertices(vertices);

    geometry.attributes.position = new BufferAttribute(vertices, 3);
    geometry.attributes.normal = new BufferAttribute(normals, 3);
    geometry.attributes.color = new BufferAttribute(colors, 3);


}

function colorVertices(vertices) {
    function getColorForHeight(h) {
        let height = h

        if (height < waterHeight) {

            return {
                r: 0.01,
                g: 0.01,
                b: 0.90
            }
        } else if (height < grassHeight) {
            return {
                r: 0.1,
                g: 0.90,
                b: 0.1
            }
        } else if (height < mountainHeight) {
            return {
                r: 0.4,
                g: 0.2,
                b: 0.2
            }
        } else {
            return {
                r: 0.90,
                g: 0.90,
                b: 0.90
            }
        }

    }

    function getYs() {
        let array = []
        vertices.forEach(function (item, index) {
            if (index === 0) {
                return
            }
            if (index % 3 === 0) {

                array.push(vertices[index - 2])
            }

        })
        console.log(array)
        return array
    }

    function getMax(arr) {
        let len = arr.length;
        let max = -2;

        while (len--) {
            max = arr[len] > max ? arr[len] : max;
        }
        return max;
    }
    function getMin(arr) {
        let len = arr.length;
        let min = 2;

        while (len--) {
            min = arr[len] < min ? arr[len] : min;
        }
        return min;
    }


    let colors = new Float32Array(vertices.length);
    let heightArray=getYs()
    let minHeight = getMin(heightArray)
    let maxHeight = getMax(heightArray)
    let heightDiff = Math.abs(maxHeight - minHeight)

    let waterHeight = minHeight + heightDiff * 0.2
    let grassHeight = minHeight + heightDiff * 0.5
    let mountainHeight = minHeight + heightDiff * 0.75

    console.log("min:", minHeight)
    console.log("max:", maxHeight)
    console.log("diff:", heightDiff)
    console.log("water:", waterHeight)
    console.log("MOUNTAIN:", mountainHeight)

    let min = 0
    for (let x = 0; x < vertices.length; x += 3) {

        let y = vertices[x + 1]
        if (y < min) {
            min = y
        }
        colors[x] = getColorForHeight(y).r
        colors[x + 1] = getColorForHeight(y).g
        colors[x + 2] = getColorForHeight(y).b


    }
    console.log("min:  ", min.toString())
    return colors
}


function erode(points, size, iterations, scaleMultiplier, erosionMultiplier, depositionMultiplier, evaporationMultiplier) {

    let scale = size / 512 * scaleMultiplier;

    let erosion = 0.0005 * scale * erosionMultiplier;
    let deposition = 0.0000002 * scale * depositionMultiplier;
    let evaporation = 0.9 * evaporationMultiplier;

    let steepness;
    let down;
    let water;
    let stayingWater;

    for (let i = 0; i < iterations; i++) {
        for (let x = 1; x < size - 2; x++) {
            for (let y = 1; y < size - 2; y++) {

                down = 0;

                down += Math.max(points[x][y].z - points[x + 1][y].z, 0);
                down += Math.max(points[x][y].z - points[x + 1][y + 1].z, 0);
                down += Math.max(points[x][y].z - points[x + 1][y - 1].z, 0);
                down += Math.max(points[x][y].z - points[x][y + 1].z, 0);
                down += Math.max(points[x][y].z - points[x][y - 1].z, 0);
                down += Math.max(points[x][y].z - points[x - 1][y].z, 0);
                down += Math.max(points[x][y].z - points[x - 1][y + 1].z, 0);
                down += Math.max(points[x][y].z - points[x - 1][y - 1].z, 0);

                points[x][y].down = down;

                if (down != 0) {
                    water = points[x][y].water * evaporation;
                    stayingWater = (water * 0.0002) / (down * scale + 1);
                    water = water - stayingWater;

                    points[x + 1][y].newWater += (Math.max(points[x][y].z - points[x + 1][y].z, 0) / down) * water;
                    points[x + 1][y + 1].newWater += (Math.max(points[x][y].z - points[x + 1][y + 1].z, 0) / down) * water;
                    points[x + 1][y - 1].newWater += (Math.max(points[x][y].z - points[x + 1][y - 1].z, 0) / down) * water;
                    points[x][y + 1].newWater += (Math.max(points[x][y].z - points[x][y + 1].z, 0) / down) * water;
                    points[x][y - 1].newWater += (Math.max(points[x][y].z - points[x][y - 1].z, 0) / down) * water;
                    points[x - 1][y].newWater += (Math.max(points[x][y].z - points[x - 1][y].z, 0) / down) * water;
                    points[x - 1][y + 1].newWater += (Math.max(points[x][y].z - points[x - 1][y + 1].z, 0) / down) * water;
                    points[x - 1][y - 1].newWater += (Math.max(points[x][y].z - points[x - 1][y - 1].z, 0) / down) * water;

                    points[x][y].water = 1 + stayingWater;
                }
            }
        }

        for (let x = 1; x < size - 2; x++) {
            for (let y = 1; y < size - 2; y++) {
                points[x][y].water += points[x][y].newWater;
                points[x][y].newWater = 0;

                let oldZ = points[x][y].z;
                points[x][y].z += (-(points[x][y].down - 0.005 / scale) * points[x][y].water) * erosion + points[x][y].water * deposition;
                points[x][y].erosion = oldZ - points[x][y].z;

                if (oldZ < points[x][y].z) {
                    points[x][y].water = Math.max(points[x][y].water - (points[x][y].z - oldZ) * 1000, 0);
                }
            }
        }
    }

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            points[x][y].z -= 0.2;
        }
    }

    return points;

}

function getNoise(x, y, res) {

    let lightness = (noise.simplex2(x / res, y / res));
    res /= 2;
    lightness += (noise.simplex2(x / res, y / res)) * 0.5;
    res /= 2;
    lightness += (noise.simplex2(x / res, y / res)) * 0.25;
    res /= 2;
    lightness += (noise.simplex2(x / res, y / res)) * 0.125;
    res /= 2;
    lightness += (noise.simplex2(x / res, y / res)) * 0.06;
    res /= 2;
    //lightness += (noise.simplex2(x/res, y/res))*0.03;
    res /= 2;
    lightness += (noise.simplex2(x / res, y / res)) * 0.015;
    res /= 2;
    //lightness += (noise.simplex2(x/res, y/res))*0.008;

    return lightness;
}

function buildMeshFromPoints(points, size) {
    let mesh = new Float32Array(Math.pow(size - 1, 2) * 18);

    for (let x = 0; x < size - 1; x++) {
        for (let y = 0; y < size - 1; y++) {
            mesh[(x * size + y) * 18 + 0] = points[x][y].y;
            mesh[(x * size + y) * 18 + 1] = points[x][y].z;
            mesh[(x * size + y) * 18 + 2] = points[x][y].x;

            mesh[(x * size + y) * 18 + 3] = points[x + 1][y].y;
            mesh[(x * size + y) * 18 + 4] = points[x + 1][y].z;
            mesh[(x * size + y) * 18 + 5] = points[x + 1][y].x;

            mesh[(x * size + y) * 18 + 6] = points[x][y + 1].y;
            mesh[(x * size + y) * 18 + 7] = points[x][y + 1].z;
            mesh[(x * size + y) * 18 + 8] = points[x][y + 1].x;


            mesh[(x * size + y) * 18 + 9] = points[x + 1][y].y;
            mesh[(x * size + y) * 18 + 10] = points[x + 1][y].z;
            mesh[(x * size + y) * 18 + 11] = points[x + 1][y].x;

            mesh[(x * size + y) * 18 + 12] = points[x + 1][y + 1].y;
            mesh[(x * size + y) * 18 + 13] = points[x + 1][y + 1].z;
            mesh[(x * size + y) * 18 + 14] = points[x + 1][y + 1].x;

            mesh[(x * size + y) * 18 + 15] = points[x][y + 1].y;
            mesh[(x * size + y) * 18 + 16] = points[x][y + 1].z;
            mesh[(x * size + y) * 18 + 17] = points[x][y + 1].x;
        }
    }

    return mesh;
}




























