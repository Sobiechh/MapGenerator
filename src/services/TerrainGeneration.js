import {noise} from "./perlin";
import generate from "./erosion"

export function generateTerrain(geometry, width, height) {
    // let position = geometry.getAttribute("position")
    // let vertices = position.array
    // console.log("original:",vertices)
     generate(geometry)
    // const hVerts = geometry.parameters.heightSegments + 1;
    // const wVerts = geometry.parameters.widthSegments + 1;
    // for (let j = 0; j < hVerts; j++) {
    //     for (let i = 0; i < wVerts; i++) {
    //
    //
    //
    //         const ex = 1.5; //uwaga ostroznie
    //
    //         vertices[3 * (j * wVerts + i) + 2] =
    //             (noise.simplex2(i / 100, j / 100) +
    //                 noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
    //                 noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
    //                 noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
    //                 +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
    //             2;
    //     }
    // }

}

function noiseFlat(hVert, wVert) {
    const ex = 1.5;
    return (noise.simplex2(hVert / 100, wVert / 100) +
        noise.simplex2((hVert + 200) / 50, wVert / 50) * Math.pow(ex, 1))
}

// export  function generateTexture( data, width, height ) {
//
//     let context, image, imageData, shade;
//
//     const vector3 = new Vector3( 0, 0, 0 );
//
//     const sun = new Vector3( 1, 1, 1 );
//     sun.normalize();
//
//     const canvas = document.createElement( 'canvas' );
//     canvas.width = width;
//     canvas.height = height;
//
//     context = canvas.getContext( '2d' );
//     context.fillStyle = '#000';
//     context.fillRect( 0, 0, width, height );
//
//     image = context.getImageData( 0, 0, canvas.width, canvas.height );
//     imageData = image.data;
//
//     for ( let i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {
//
//         vector3.x = data[ j - 2 ] - data[ j + 2 ];
//         vector3.y = 2;
//         vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
//         vector3.normalize();
//
//         shade = vector3.dot( sun );
//
//         imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
//         imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
//         imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
//
//     }
//
//     context.putImageData( image, 0, 0 );
//
//     // Scaled 4x
//
//     const canvasScaled = document.createElement( 'canvas' );
//     canvasScaled.width = width * 4;
//     canvasScaled.height = height * 4;
//
//     context = canvasScaled.getContext( '2d' );
//     context.scale( 4, 4 );
//     context.drawImage( canvas, 0, 0 );
//
//     image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
//     imageData = image.data;
//
//     for ( let i = 0, l = imageData.length; i < l; i += 4 ) {
//
//         const v = ~ ~ ( Math.random() * 5 );
//
//         imageData[ i ] += v;
//         imageData[ i + 1 ] += v;
//         imageData[ i + 2 ] += v;
//
//     }
//
//     context.putImageData( image, 0, 0 );
//
//     return canvasScaled;
//
// }